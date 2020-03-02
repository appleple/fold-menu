import { getOffset, append, addClass, removeClass, hasClass } from './utility';

type Option = {
  foldMenuClass: string;
  foldMenuToggleClass: string;
  foldMenuListClass: string;
  foldMenuListActiveClass: string;
  foldMenuText: string;
};

const defaultOption = {
  foldMenuClass: 'js-fold-menu',
  foldMenuToggleClass: 'js-fold-menu-toggle',
  foldMenuListClass: 'js-fold-menu-list',
  foldMenuListActiveClass: 'js-fold-menu-list-active',
  foldMenuText: '...'
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
    const { foldMenuClass } = this.option;
    const childElements = this.selector.children;
    const parentWidth = this.selector.offsetWidth;
    const foldMenu: HTMLElement = this.selector.querySelector(`.${foldMenuClass}`);
    this.selector.style.overflow = 'hidden';
    foldMenu.style.display = '';
    this.foldMenuList = [];
    [].forEach.call(childElements, (element: HTMLElement) => {
      element.style.display = '';
    });
    [].forEach.call(childElements, (element: HTMLElement) => {
      if (getOffset(foldMenu).left + foldMenu.offsetWidth > parentWidth && !hasClass(element, foldMenuClass)) {
        element.style.display = 'none';
        this.foldMenuList.push(element);
      }
    });
    this.selector.style.overflow = '';
    if (!this.foldMenuList.length) {
      foldMenu.style.display = 'none';
    } else {
      foldMenu.style.display = '';
    }
  }

  buildToggleHtml() {
    const { foldMenuListClass } = this.option;
    const ul: HTMLElement = this.selector.querySelector(`.${foldMenuListClass}`);
    const listHTML = [].map.call(this.foldMenuList, (child: HTMLElement) => {
      return `<li>${child.innerHTML}</li>`;
    }).join('');
    ul.innerHTML = listHTML;
    ul.style.display = 'none';
  }

  registerToggleEvent() {
    const { foldMenuToggleClass, foldMenuListClass, foldMenuListActiveClass } = this.option;
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