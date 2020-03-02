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
Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = require("./utility");
var defaultOption = {
    foldMenuClass: 'js-fold-menu',
    foldMenuToggleClass: 'js-fold-menu-toggle',
    foldMenuListClass: 'js-fold-menu-list',
    foldMenuListActiveClass: 'js-fold-menu-list-active'
};
var FoldMenu = /** @class */ (function () {
    function FoldMenu(selector, option) {
        if (option === void 0) { option = {}; }
        this.foldMenuList = [];
        this.selector = typeof selector === 'string' ? document.querySelector(selector) : selector;
        this.option = __assign(__assign({}, defaultOption), option);
        this.calc();
        this.appendMenu();
        this.buildToggleHtml();
        this.registerToggleEvent();
        this.observe();
    }
    FoldMenu.prototype.observe = function () {
        var _this = this;
        // @ts-ignore
        var resizeObserver = new ResizeObserver(function () {
            _this.calc();
            _this.buildToggleHtml();
        });
        resizeObserver.observe(this.selector);
    };
    FoldMenu.prototype.calc = function () {
        var _this = this;
        var foldMenuClass = this.option.foldMenuClass;
        this.selector.style.overflow = 'hidden';
        var childElements = this.selector.children;
        var parentWidth = this.selector.offsetWidth;
        this.foldMenuList = [];
        [].forEach.call(childElements, function (element) {
            element.style.display = '';
        });
        [].forEach.call(childElements, function (element) {
            if (utility_1.getOffset(element).left + element.offsetWidth > parentWidth && !utility_1.hasClass(element, foldMenuClass)) {
                element.style.display = 'none';
                _this.foldMenuList.push(element);
            }
        });
        this.selector.style.overflow = '';
    };
    FoldMenu.prototype.buildToggleHtml = function () {
        var foldMenuListClass = this.option.foldMenuListClass;
        var ul = this.selector.querySelector("." + foldMenuListClass);
        var listHTML = [].map.call(this.foldMenuList, function (child) {
            return "<li>" + child.innerHTML + "</li>";
        }).join('');
        ul.innerHTML = listHTML;
        ul.style.display = 'none';
    };
    FoldMenu.prototype.registerToggleEvent = function () {
        var _a = this.option, foldMenuToggleClass = _a.foldMenuToggleClass, foldMenuListClass = _a.foldMenuListClass, foldMenuListActiveClass = _a.foldMenuListActiveClass;
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
        var _a = this.option, foldMenuClass = _a.foldMenuClass, foldMenuToggleClass = _a.foldMenuToggleClass, foldMenuListClass = _a.foldMenuListClass;
        utility_1.append(this.selector, "<li class=\"" + foldMenuClass + "\">\n      <a href=\"#\" class=\"" + foldMenuToggleClass + "\"></a>\n      <ul class=\"" + foldMenuListClass + "\"></ul>\n    </li>");
    };
    return FoldMenu;
}());
exports.default = FoldMenu;
//# sourceMappingURL=index.js.map