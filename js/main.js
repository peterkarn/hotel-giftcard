/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там
// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())
// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }
// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);
// Фикс фулскрин-блоков
// import './functions/fix-fullheight';
// Реализация бургер-меню
 // Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';
// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/disable-scroll';
// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();
// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');
// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';
// Подключение плагина кастом-скролла
// import 'simplebar';
// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });
// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });
// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');
// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');
// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });
// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];
// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };
// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./src/js/functions/enable-scroll.js");



(function () {
  var _document, _document2, _document3, _document4;

  var burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
  var menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
  var menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu-item]');
  var overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu-overlay]');
  burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', function (e) {
    burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('menu--active');

    if (menu !== null && menu !== void 0 && menu.classList.contains('menu--active')) {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Close menu');
      (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Open menu');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', function () {
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Open menu');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach(function (el) {
    el.addEventListener('click', function () {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Open menu');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
})();

/***/ }),

/***/ "./src/js/functions/disable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableScroll": () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

var disableScroll = function disableScroll() {
  var _document;

  var fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  var pagePosition = window.scrollY;
  var paddingOffset = "".concat(window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth, "px");
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(function (el) {
    el.style.paddingRight = paddingOffset;
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = "-".concat(pagePosition, "px");
};

/***/ }),

/***/ "./src/js/functions/enable-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableScroll": () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

var enableScroll = function enableScroll() {
  var _document;

  var fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  var body = document.body;
  var pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(function (el) {
    el.style.paddingRight = '0px';
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 //sticky func

function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

function checkScroll() {
  var offerHeight = document.querySelector(".offer").clientHeight;
  var scrolled = document.documentElement.scrollTop;
  var filtersBlockHeight = document.querySelector(".filters").offsetHeight;

  if (scrolled > offerHeight) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
}

document.addEventListener("scroll", throttle(checkScroll, 100)); // render data from ***jsonFromServer***

var jsonFromServer = {
  hotels: [{
    id: 1,
    webp: 'img/image_1.webp',
    jpg: 'img/image_1.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '3.5',
    description: 'Description could be small...',
    price: '129'
  }, {
    id: 2,
    webp: 'img/image_2.webp',
    jpg: 'img/image_2.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '2.0',
    description: ' Or very very long ..... Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
    price: '229'
  }, {
    id: 3,
    webp: 'img/image_3.webp',
    jpg: 'img/image_3.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '5.0',
    description: 'Or even a few words bla bla bla bla bla WestCord Fashion Hotel ...',
    price: '229'
  }, {
    id: 4,
    webp: 'img/image_4.webp',
    jpg: 'img/image_4.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '4.5',
    description: 'It won`t break the markup',
    price: '229'
  }, {
    id: 5,
    webp: 'img/image_5.webp',
    jpg: 'img/image_5.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '4',
    description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
    price: '229'
  }, {
    id: 6,
    webp: 'img/image_6.webp',
    jpg: 'img/image_6.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '5',
    description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
    price: '229'
  }, {
    id: 7,
    webp: 'img/image_7.webp',
    jpg: 'img/image_7.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '3.5',
    description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
    price: '229'
  }, {
    id: 8,
    webp: 'img/image_8.webp',
    jpg: 'img/image_8.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '3.3',
    description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
    price: '229'
  }, {
    id: 9,
    webp: 'img/image_9.webp',
    jpg: 'img/image_9.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '3.2',
    description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
    price: '229'
  }, {
    id: 10,
    webp: 'img/image_10.webp',
    jpg: 'img/image_10.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '4',
    description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
    price: '229'
  }, {
    id: 11,
    webp: 'img/image_11.webp',
    jpg: 'img/image_11.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '4',
    description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
    price: '229'
  }, {
    id: 12,
    webp: 'img/image_12.webp',
    jpg: 'img/image_12.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '4',
    description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
    price: '229'
  }, {
    id: 13,
    webp: 'img/image_13.webp',
    jpg: 'img/image_13.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '4',
    description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
    price: '229'
  }, {
    id: 14,
    webp: 'img/image_14.webp',
    jpg: 'img/image_14.jpg',
    title: 'WestCord Fashion Hotel',
    city: 'Barcelona',
    rating: '4',
    description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
    price: '229'
  }]
};

var render = function render() {
  var selector = document.querySelector('.hotels__list');

  var _iterator = _createForOfIteratorHelper(jsonFromServer.hotels),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var hotel = _step.value;
      var template = "\n      <li>\n        <article class = \"card\">\n          <a href = \"#\" target=\"_blank\" class = \"card__img _ibg\">\n            <picture>\n              <source srcset = \"".concat(hotel.webp, "\">\n              <img src = \"").concat(hotel.jpg, "\" alt = \"").concat(hotel.title, "\">\n            </picture>\n          </a>\n          <a href=\"#\" target=\"_blank\" class=\"card__city\">").concat(hotel.city, "</a>\n          <a href=\"#\" target=\"_blank\" class = \"card__title\">").concat(hotel.title, "</a>\n           <div class = \"star-rating\" style = \"--rating: ").concat(hotel.rating, ";\"> </div>\n          <p class=\"card__description\">").concat(hotel.description, "</p>\n          <a href=\"#\" target=\"_blank\" class=\"card__price\"> vanaf \u20AC<span>").concat(hotel.price, "</span> per nacht</a>\n        </article>\n      </li>\n    ");
      selector.innerHTML += template;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

render();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map