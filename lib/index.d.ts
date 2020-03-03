declare type Option = {
    foldMenuClass: string;
    foldMenuToggleClass: string;
    foldMenuListClass: string;
    foldMenuListActiveClass: string;
    foldMenuText: string;
    addToggleBtn: boolean;
};
export default class FoldMenu {
    selector: HTMLElement;
    option: Option;
    foldMenuList: HTMLElement[];
    constructor(selector: string | HTMLElement, option?: Partial<Option>);
    observe(): void;
    calc(): void;
    buildToggleHtml(): void;
    registerToggleEvent(): void;
    appendMenu(): void;
}
export {};
