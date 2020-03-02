import { getOffset, append } from './utility';

type Option = {
  foldMenuClass: string;
  foldMenuToggleClass: string;
  foldMenuListClass: string;
};

const defaultOption = {
  foldMenuClass: 'js-fold-menu',
  foldMenuToggleClass: 'js-fold-menu-toggle',
  foldMenuListClass: 'js-fold-menu-list',
}


export default class FoldMenu {
  selector: HTMLElement;
  option: Option;
  foldMenuList: HTMLElement[] = [];

  constructor(selector: string | HTMLElement, option: Partial<Option> = {}) {
    this.selector = typeof selector === 'string' ? document.querySelector(selector) : selector;
    this.option = { ...defaultOption, ...option }
    this.calc();
    this.appendMenu();
    this.buildToggleHtml();
  }
  
  calc() {
    const childElements = this.selector.children;
    const parentWidth = this.selector.offsetWidth;
    [].forEach.call(childElements, (element: HTMLElement) => {
      if (getOffset(element).left + element.offsetWidth > parentWidth) {
        element.style.display = 'none';
        this.foldMenuList.push(element);
      }
    });
  }

  buildToggleHtml() {
    const { foldMenuClass, foldMenuToggleClass, foldMenuListClass } = this.option;
    const ul = this.selector.querySelector(`.${foldMenuListClass}`);
    const listHTML = [].map.call(this.foldMenuList, (child: HTMLElement) => {
      return `<li>${child.innerHTML}</li>`;
    }).join('');
    ul.innerHTML = listHTML;
  }

  appendMenu() {
    const { foldMenuClass, foldMenuToggleClass, foldMenuListClass } = this.option;
    append(this.selector, `<li class="${foldMenuClass}">
      <a href="#" class="${foldMenuToggleClass}"></a>
      <ul class="${foldMenuListClass}"></ul>
    </li>`);
  }
}