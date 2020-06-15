"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resize_observer_polyfill_1 = __importDefault(require("resize-observer-polyfill"));
var utility_1 = require("./utility");
var defaultOption = {
    foldMenuClass: 'js-fold-menu',
    foldMenuToggleClass: 'js-fold-menu-toggle',
    foldMenuListClass: 'js-fold-menu-list',
    foldMenuListActiveClass: 'js-fold-menu-list-active',
    foldMenuText: '...',
    addToggleBtn: false,
    offset: 0
};
var FoldMenu = /** @class */ (function () {
    function FoldMenu(selector, option) {
        if (option === void 0) { option = {}; }
        this.foldMenuList = [];
        this.selector = typeof selector === 'string' ? document.querySelector(selector) : selector;
        this.option = __assign(__assign({}, defaultOption), option);
        this.appendMenu();
        this.calc();
        this.buildToggleHtml();
        this.registerToggleEvent();
        this.observe();
    }
    FoldMenu.prototype.observe = function () {
        var _this = this;
        // @ts-ignore
        var resizeObserver = new resize_observer_polyfill_1.default(function () {
            _this.calc();
            _this.buildToggleHtml();
        });
        resizeObserver.observe(this.selector);
    };
    FoldMenu.prototype.calc = function () {
        var _a = this.option, foldMenuClass = _a.foldMenuClass, foldMenuToggleClass = _a.foldMenuToggleClass, foldMenuText = _a.foldMenuText, offset = _a.offset;
        var childElements = this.selector.children;
        var parentWidth = this.selector.offsetWidth;
        var foldMenu = this.selector.querySelector("." + foldMenuClass);
        this.selector.style.overflow = 'hidden';
        foldMenu.style.display = '';
        this.foldMenuList = [];
        [].forEach.call(childElements, function (element) {
            element.style.display = '';
        });
        var lastIndex = childElements.length;
        while (utility_1.getOffset(foldMenu).left + foldMenu.offsetWidth + offset > utility_1.getOffset(this.selector).left + parentWidth) {
            if (lastIndex === childElements.length && childElements[lastIndex - 2]) {
                var beforeElement = childElements[lastIndex - 2];
                console.log(parentWidth);
                if (utility_1.getOffset(this.selector).left + parentWidth + offset > utility_1.getOffset(beforeElement).left + beforeElement.offsetWidth) {
                    break;
                }
            }
            var lastElement = childElements[lastIndex - 1];
            if (lastElement && !utility_1.hasClass(lastElement, foldMenuClass)) {
                lastElement.style.display = 'none';
                this.foldMenuList.push(lastElement);
            }
            lastIndex--;
        }
        this.foldMenuList = this.foldMenuList.reverse();
        this.selector.style.overflow = '';
        if (!this.foldMenuList.length) {
            foldMenu.style.display = 'none';
        }
        else {
            foldMenu.style.display = '';
        }
    };
    FoldMenu.prototype.buildToggleHtml = function () {
        var _a = this.option, foldMenuListClass = _a.foldMenuListClass, addToggleBtn = _a.addToggleBtn;
        var ul = this.selector.querySelector("." + foldMenuListClass);
        var listHTML = [].map.call(this.foldMenuList, function (child) {
            return "<li>" + child.innerHTML + "</li>";
        }).join('');
        ul.innerHTML = listHTML;
        if (addToggleBtn) {
            ul.style.display = 'none';
        }
    };
    FoldMenu.prototype.registerToggleEvent = function () {
        var _a = this.option, foldMenuToggleClass = _a.foldMenuToggleClass, foldMenuListClass = _a.foldMenuListClass, foldMenuListActiveClass = _a.foldMenuListActiveClass, addToggleBtn = _a.addToggleBtn;
        if (!addToggleBtn) {
            return;
        }
        var toggle = this.selector.querySelector("." + foldMenuToggleClass);
        var list = this.selector.querySelector("." + foldMenuListClass);
        toggle.addEventListener('click', function () {
            if (list.style.display === 'none') {
                list.style.display = '';
                requestAnimationFrame(function () {
                    utility_1.addClass(list, foldMenuListActiveClass);
                });
            }
            else {
                utility_1.removeClass(list, foldMenuListActiveClass);
                setTimeout(function () {
                    list.style.display = 'none';
                }, 300);
            }
        });
    };
    FoldMenu.prototype.appendMenu = function () {
        var _a = this.option, foldMenuClass = _a.foldMenuClass, foldMenuToggleClass = _a.foldMenuToggleClass, foldMenuListClass = _a.foldMenuListClass, foldMenuText = _a.foldMenuText;
        utility_1.append(this.selector, "<li class=\"" + foldMenuClass + "\">\n      <a href=\"#\" class=\"" + foldMenuToggleClass + "\">" + foldMenuText + "</a>\n      <ul class=\"" + foldMenuListClass + "\"></ul>\n    </li>");
    };
    return FoldMenu;
}());
exports.default = FoldMenu;
//# sourceMappingURL=index.js.map