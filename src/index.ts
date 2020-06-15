import ResizeObserver from 'resize-observer-polyfill';
import { getOffset, append, addClass, removeClass, hasClass } from './utility';

type Option = {
  foldMenuClass: string;
  foldMenuToggleClass: string;
  foldMenuListClass: string;
  foldMenuListActiveClass: string;
  foldMenuText: string;
  addToggleBtn: boolean;
  offset: number
};

const defaultOption = {
  foldMenuClass: 'js-fold-menu',
  foldMenuToggleClass: 'js-fold-menu-toggle',
  foldMenuListClass: 'js-fold-menu-list',
  foldMenuListActiveClass: 'js-fold-menu-list-active',
  foldMenuText: '...',
  addToggleBtn: false,
  offset: 0
}

export default class FoldMenu {
  selector: HTMLElement;
  option: Option;
  foldMenuList: HTMLElement[] = [];

  constructor(selector: string | HTMLElement, option: Partial<Option> = {}) {
    this.selector = typeof selector === 'string' ? document.querySelector(selector) : selector;
    this.option = { ...defaultOption, ...option };
    this.appendMenu();
    this.calc();
    this.buildToggleHtml();
    this.registerToggleEvent();
    this.observe();
  }

  observe() {
    // @ts-ignore
    const resizeObserver = new ResizeObserver(() => {
      this.calc();
      this.buildToggleHtml();
    });
    resizeObserver.observe(this.selector);
  }

  calc() {
    const { foldMenuClass, foldMenuToggleClass, foldMenuText, offset } = this.option;
    const childElements = this.selector.children;
    const parentWidth = this.selector.offsetWidth;
    const foldMenu: HTMLElement = this.selector.querySelector(`.${foldMenuClass}`);
    this.selector.style.overflow = 'hidden';
    foldMenu.style.display = '';
    this.foldMenuList = [];
    [].forEach.call(childElements, (element: HTMLElement) => {
      element.style.display = '';
    });

    let lastIndex = childElements.length;

    while (getOffset(foldMenu).left + foldMenu.offsetWidth + offset > getOffset(this.selector).left + parentWidth) {

      if (lastIndex === childElements.length && childElements[lastIndex - 2]) {
        const beforeElement = childElements[lastIndex - 2] as HTMLElement;
        if (getOffset(this.selector).left + parentWidth > getOffset(beforeElement).left + beforeElement.offsetWidth) {
          break;
        }
      }
      const lastElement = childElements[lastIndex - 1] as HTMLElement;
      if (lastElement && !hasClass(lastElement, foldMenuClass)) {
        lastElement.style.display = 'none';
        this.foldMenuList.push(lastElement);
      }
      lastIndex--;
    }
    this.foldMenuList = this.foldMenuList.reverse();

    this.selector.style.overflow = '';
    if (!this.foldMenuList.length) {
      foldMenu.style.display = 'none';
    } else {
      foldMenu.style.display = '';
    }
  }

  buildToggleHtml() {
    const { foldMenuListClass, addToggleBtn } = this.option;
    const ul: HTMLElement = this.selector.querySelector(`.${foldMenuListClass}`);
    const listHTML = [].map.call(this.foldMenuList, (child: HTMLElement) => {
      return `<li>${child.innerHTML}</li>`;
    }).join('');
    ul.innerHTML = listHTML;
    if (addToggleBtn) {
      ul.style.display = 'none';
    }
  }

  registerToggleEvent() {
    const { foldMenuToggleClass, foldMenuListClass, foldMenuListActiveClass, addToggleBtn } = this.option;
    if (!addToggleBtn) {
      return;
    }
    const toggle = this.selector.querySelector(`.${foldMenuToggleClass}`);
    const list: HTMLElement = this.selector.querySelector(`.${foldMenuListClass}`);
    toggle.addEventListener('click', () => {
      if (list.style.display === 'none') {
        list.style.display = '';
        requestAnimationFrame(() => {
          addClass(list, foldMenuListActiveClass);
        });
      } else {
        removeClass(list, foldMenuListActiveClass);
        setTimeout(() => {
          list.style.display = 'none';
        }, 300);
      }
    });
  }

  appendMenu() {
    const { foldMenuClass, foldMenuToggleClass, foldMenuListClass, foldMenuText } = this.option;
    append(this.selector, `<li class="${foldMenuClass}">
      <a href="#" class="${foldMenuToggleClass}">${foldMenuText}</a>
      <ul class="${foldMenuListClass}"></ul>
    </li>`);
  }
}
