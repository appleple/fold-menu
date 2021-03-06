export declare const getUniqId: () => string;
export declare const getWindowWidth: () => number;
export declare const getWindowHeight: () => number;
export declare const hasClass: (el: HTMLElement, className: string) => boolean;
export declare const addClass: (element: HTMLElement, className: string) => void;
export declare const removeClass: (element: HTMLElement, className: string) => void;
export declare const getScrollTop: () => number;
export declare const getScrollLeft: () => number;
export declare const wrap: (el: HTMLElement, wrapper: HTMLElement) => void;
export declare const after: (el: HTMLElement, html: string) => void;
export declare const isIE: () => boolean;
export declare const triggerEvent: (el: HTMLElement, eventName: string, options: EventListenerOptions) => void;
export declare const append: (element: HTMLElement, string: string) => void;
export declare const prepend: (element: HTMLElement, string: string) => void;
export declare const matches: (element: HTMLElement | Document, query: string) => boolean;
export declare const findAncestor: (element: HTMLElement | Document, selector: string) => any;
export declare const getOffset: (el: any) => {
    top: any;
    left: any;
};
export declare const createElement: (html: string) => HTMLElement;
