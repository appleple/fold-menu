!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.FoldMenu=e():t.FoldMenu=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="bundle",n(n.s=0)}([function(t,e,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(1)),s=n(3),c={foldMenuClass:"js-fold-menu",foldMenuToggleClass:"js-fold-menu-toggle",foldMenuListClass:"js-fold-menu-list",foldMenuListActiveClass:"js-fold-menu-list-active",foldMenuText:"...",addToggleBtn:!1,offset:0},u=function(){function t(t,e){void 0===e&&(e={}),this.foldMenuList=[],this.selector="string"==typeof t?document.querySelector(t):t,this.option=o(o({},c),e),this.appendMenu(),this.calc(),this.buildToggleHtml(),this.registerToggleEvent(),this.observe()}return t.prototype.observe=function(){var t=this;new r.default((function(){t.calc(),t.buildToggleHtml()})).observe(this.selector)},t.prototype.calc=function(){var t=this.option,e=t.foldMenuClass,n=(t.foldMenuToggleClass,t.foldMenuText,t.offset),o=this.selector.children,i=this.selector.offsetWidth,r=this.selector.querySelector("."+e);this.selector.style.overflow="hidden",r.style.display="",this.foldMenuList=[],[].forEach.call(o,(function(t){t.style.display=""}));for(var c=o.length;s.getOffset(r).left+r.offsetWidth+n>s.getOffset(this.selector).left+i;){if(c===o.length&&o[c-2]){var u=o[c-2];if(console.log(i),s.getOffset(this.selector).left+i+n>s.getOffset(u).left+u.offsetWidth)break}var a=o[c-1];a&&!s.hasClass(a,e)&&(a.style.display="none",this.foldMenuList.push(a)),c--}this.foldMenuList=this.foldMenuList.reverse(),this.selector.style.overflow="",this.foldMenuList.length?r.style.display="":r.style.display="none"},t.prototype.buildToggleHtml=function(){var t=this.option,e=t.foldMenuListClass,n=t.addToggleBtn,o=this.selector.querySelector("."+e),i=[].map.call(this.foldMenuList,(function(t){return"<li>"+t.innerHTML+"</li>"})).join("");o.innerHTML=i,n&&(o.style.display="none")},t.prototype.registerToggleEvent=function(){var t=this.option,e=t.foldMenuToggleClass,n=t.foldMenuListClass,o=t.foldMenuListActiveClass;if(t.addToggleBtn){var i=this.selector.querySelector("."+e),r=this.selector.querySelector("."+n);i.addEventListener("click",(function(){"none"===r.style.display?(r.style.display="",requestAnimationFrame((function(){s.addClass(r,o)}))):(s.removeClass(r,o),setTimeout((function(){r.style.display="none"}),300))}))}},t.prototype.appendMenu=function(){var t=this.option,e=t.foldMenuClass,n=t.foldMenuToggleClass,o=t.foldMenuListClass,i=t.foldMenuText;s.append(this.selector,'<li class="'+e+'">\n      <a href="#" class="'+n+'">'+i+'</a>\n      <ul class="'+o+'"></ul>\n    </li>')},t}();e.default=u},function(t,e,n){"use strict";n.r(e),function(t){var n=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,o){return t[0]===e&&(n=o,!0)})),n}return(function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),o=this.__entries__[n];return o&&o[1]},e.prototype.set=function(e,n){var o=t(this.__entries__,e);~o?this.__entries__[o][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,o=t(n,e);~o&&n.splice(o,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,o=this.__entries__;n<o.length;n++){var i=o[n];t.call(e,i[1],i[0])}},e}())}(),o="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),r="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,o=!1,i=0;function s(){n&&(n=!1,t()),o&&u()}function c(){r(s)}function u(){var t=Date.now();if(n){if(t-i<2)return;o=!0}else n=!0,o=!1,setTimeout(c,e);i=t}return u}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;s.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),a=function(t,e){for(var n=0,o=Object.keys(e);n<o.length;n++){var i=o[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},l=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||i},f=g(0,0,0,0);function d(t){return parseFloat(t)||0}function h(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+d(t["border-"+n+"-width"])}),0)}function p(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return f;var o=l(t).getComputedStyle(t),i=function(t){for(var e={},n=0,o=["top","right","bottom","left"];n<o.length;n++){var i=o[n],r=t["padding-"+i];e[i]=d(r)}return e}(o),r=i.left+i.right,s=i.top+i.bottom,c=d(o.width),u=d(o.height);if("border-box"===o.boxSizing&&(Math.round(c+r)!==e&&(c-=h(o,"left","right")+r),Math.round(u+s)!==n&&(u-=h(o,"top","bottom")+s)),!function(t){return t===l(t).document.documentElement}(t)){var a=Math.round(c+r)-e,p=Math.round(u+s)-n;1!==Math.abs(a)&&(c-=a),1!==Math.abs(p)&&(u-=p)}return g(i.left,i.top,c,u)}var v="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof l(t).SVGGraphicsElement}:function(t){return t instanceof l(t).SVGElement&&"function"==typeof t.getBBox};function m(t){return o?v(t)?function(t){var e=t.getBBox();return g(0,0,e.width,e.height)}(t):p(t):f}function g(t,e,n,o){return{x:t,y:e,width:n,height:o}}var b=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=g(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=m(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),y=function(t,e){var n,o,i,r,s,c,u,l=(o=(n=e).x,i=n.y,r=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(c.prototype),a(u,{x:o,y:i,width:r,height:s,top:i,right:o+r,bottom:s+i,left:o}),u);a(this,{target:t,contentRect:l})},_=function(){function t(t,e,o){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=o}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new b(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new y(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),w="undefined"!=typeof WeakMap?new WeakMap:new n,M=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),o=new _(e,n,this);w.set(this,o)};["observe","unobserve","disconnect"].forEach((function(t){M.prototype[t]=function(){var e;return(e=w.get(this))[t].apply(e,arguments)}}));var E=void 0!==i.ResizeObserver?i.ResizeObserver:M;e.default=E}.call(this,n(2))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getUniqId=function(){return(Date.now().toString(36)+Math.random().toString(36).substr(2,5)).toUpperCase()},e.getWindowWidth=function(){return document&&document.documentElement?document.documentElement.clientWidth:window&&window.innerWidth?window.innerWidth:0},e.getWindowHeight=function(){return window.innerHeight||document.documentElement.clientHeight||0},e.hasClass=function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},e.addClass=function(t,e){t.classList?t.classList.add(e):t.className+=" "+e},e.removeClass=function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")},e.getScrollTop=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},e.getScrollLeft=function(){return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0},e.wrap=function(t,e){t.parentNode.insertBefore(e,t),e.appendChild(t)},e.after=function(t,e){t.insertAdjacentHTML("afterend",e)},e.isIE=function(){var t=window.navigator.userAgent.toLowerCase();return!(!t.match(/(msie|MSIE)/)&&!t.match(/(T|t)rident/))},e.triggerEvent=function(t,e,n){var o;window.CustomEvent?o=new CustomEvent(e,{cancelable:!0}):(o=document.createEvent("CustomEvent")).initCustomEvent(e,!1,!1,n),t.dispatchEvent(o)},e.append=function(t,e){var n=document.createElement("div");for(n.innerHTML=e;n.children.length>0;)t.appendChild(n.children[0])},e.prepend=function(t,e){var n=document.createElement("div");for(n.innerHTML=e;n.children.length>0;)t.insertBefore(n.children[0],t.firstChild)},e.matches=function(t,e){for(var n=(t.document||t.ownerDocument).querySelectorAll(e),o=n.length;--o>=0&&n.item(o)!==t;);return o>-1},e.findAncestor=function(t,n){if("function"==typeof t.closest)return t.closest(n)||null;for(;t&&t!==document;){if(e.matches(t,n))return t;t=t.parentElement}return null},e.getOffset=function(t){var n=t.getBoundingClientRect();return{top:n.top+e.getScrollTop(),left:n.left+e.getScrollLeft()}},e.createElement=function(t){var e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}}]).default}));