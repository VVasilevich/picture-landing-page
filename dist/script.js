/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const accordion = triggerSelector => {
  const btns = document.querySelectorAll(triggerSelector);
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      btns.forEach(btn => {
        if (!this.classList.contains('active-style')) {
          btn.classList.remove('active-style');
          btn.nextElementSibling.classList.remove('active-content');
          btn.nextElementSibling.style.maxHeight = '0px';
        }
      });
      this.classList.toggle('active-style');
      this.nextElementSibling.classList.toggle('active-content');
      if (this.classList.contains('active-style')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const burger = (burgerSelector, menuSelector) => {
  const burgerElem = document.querySelector(burgerSelector),
    menuElem = document.querySelector(menuSelector);
  menuElem.style.display = 'none';
  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display === 'none') {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);
  let sum = 0;
  const calcSum = () => {
    sum = Math.round(+sizeBlock.value + +optionsBlock.value * +materialBlock.value);
    if (sizeBlock.value == '' || materialBlock.value == '') {
      resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
    } else if (promocodeBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };
  sizeBlock.addEventListener('change', calcSum);
  materialBlock.addEventListener('change', calcSum);
  optionsBlock.addEventListener('change', calcSum);
  promocodeBlock.addEventListener('input', calcSum);
};
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(item => {
    item.addEventListener('keypress', e => {
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
      }
    });
    item.addEventListener('input', () => {
      if (item.value.match(/[a-z]/ig)) {
        item.value = '';
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/dragAndDrop.js":
/*!***************************************!*\
  !*** ./src/js/modules/dragAndDrop.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const dragAndDrop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');
  const preventDefaults = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });
  const highlight = item => {
    item.closest('.file_upload').style.border = '1px solid #c51abb';
    item.closest('.file_upload').style.borderRadius = '50px';
    item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .3)';
  };
  const unhighlight = item => {
    item.closest('.file_upload').style.border = 'none';
    if (item.closest('.calc_form')) {
      item.closest('.file_upload').style.backgroundColor = '#fff';
    } else {
      item.closest('.file_upload').style.backgroundColor = '#ededed';
    }
  };
  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });
  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });
  fileInputs.forEach(input => {
    input.addEventListener('drop', e => {
      input.files = e.dataTransfer.files;
      let dots;
      const arr = input.files[0].name.split('.');
      arr[0].length > 6 ? dots = '...' : dots = '.';
      const name = arr[0].substring(0, 5) + dots + arr[1];
      input.previousElementSibling.textContent = name;
      console.log(input.files[0]);
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (dragAndDrop);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    no = document.querySelector('.portfolio-no');
  const typeFilters = markType => {
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });
    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');
    if (markType.length) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };
  items.forEach(item => {
    item.addEventListener('click', e => {
      const markType = wrapper.querySelectorAll(`.${e.target.classList[0]}`);
      typeFilters(markType);
    });
  });
  menu.addEventListener('click', e => {
    let target = e.target;
    if (target && target.tagName === 'LI') {
      items.forEach(item => item.classList.remove('active'));
      target.classList.add('active');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const forms = () => {
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    textareas = document.querySelectorAll('textarea'),
    upload = document.querySelectorAll('[name="upload"]'),
    selects = document.querySelectorAll('select'),
    totalPrice = document.querySelector('.calc-price');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся.',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };
  const path = {
    designer: 'https://jsonplaceholder.typicode.com/posts',
    consultation: 'https://jsonplaceholder.typicode.com/posts'
  };
  const clearForms = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    textareas.forEach(item => {
      item.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
    selects.forEach(select => {
      select.selectedIndex = 0;
    });
    totalPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
  };
  upload.forEach(item => {
    item.addEventListener('input', () => {
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 6 ? dots = '...' : dots = '.';
      const name = arr[0].substring(0, 5) + dots + arr[1];
      item.previousElementSibling.textContent = name;
      console.log(item.files[0]);
    });
  });
  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item);
      if (item.classList.contains('calc_form')) {
        const totalPrice = document.querySelector('.calc-price').textContent;
        formData.append('price', totalPrice);
      }
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.consultation;
      console.log(api);
      (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.postData)(api, json).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearForms();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 4000);
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  const inputs = document.querySelectorAll(selector);
  const setCursorPosition = (pos, elem) => {
    elem.addEventListener('click', () => {
      elem.setSelectionRange(elem.value.length, elem.value.length);
    });
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = '+7 (___) ___-__-__',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  inputs.forEach(item => {
    item.addEventListener('input', createMask);
    item.addEventListener('keypress', createMask);
    item.addEventListener('focus', createMask);
    item.addEventListener('blur', createMask);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let btnPressed;
  const bindModal = function (triggerSelector, modalSelector, closeSelector) {
    let triggerDelete = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scrollWidth = calcScrollWidth();
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true;
        if (triggerDelete) {
          item.remove();
        }
        windows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollWidth}px`;
      });
    });
    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = '0px';
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
      }
    });
  };
  const showModalByTime = (modalSelector, modalTimerID) => {
    setTimeout(() => {
      let display;
      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });
      if (!display) {
        document.querySelector(modalSelector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${calcScrollWidth()}px`;
      }
      if (modalTimerID) {
        clearTimeout(modalTimerID);
      }
    }, modalTimerID);
  };
  const openByScroll = selector => {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      if (!btnPressed && window.scrollY + document.documentElement.clientHeight >= scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  };
  const calcScrollWidth = () => {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  };
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
  // showModalByTime('.popup-consultation', 3000);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  const showPicture = block => {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none';
    });
  };
  const hidePicture = block => {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('p').forEach(p => {
      p.style.display = 'block';
    });
  };
  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showPicture(block);
    });
    block.addEventListener('mouseout', () => {
      hidePicture(block);
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });

  // Scrolling with requestAnimationFrame

  const element = document.documentElement,
    body = document.body;
  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.1;
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let scrollTop = Math.round(element.scrollTop || body.scrollTop),
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start,
          r = toBlock < 0 ? Math.max(scrollTop - progress / speed, scrollTop + toBlock) : Math.min(scrollTop + progress / speed, scrollTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r != scrollTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  // Pure JS scrolling

  // const element = document.documentElement,
  //       body = document.body;

  // const calcScroll = () => {
  //   upElem.addEventListener('click', function(e) {
  //     let scrollTop = Math.round(element.scrollTop || body.scrollTop);

  //     if (this.hash !== '') {
  //       e.preventDefault();
  //       let hashElement = document.querySelector(this.hash),
  //           hashElementTop = 0;

  //       while (hashElement.offsetParent) {
  //         hashElementTop += hashElement.offsetTop;
  //         hashElement = hashElement.offsetParent;
  //       }

  //       hashElementTop = Math.round(hashElementTop);
  //       smoothScroll(scrollTop, hashElementTop, this.hash)
  //     }
  //   });
  // }

  // const smoothScroll = (from, to, hash) => {
  //   let timeInterval = 1,
  //       prevScrollTop,
  //       speed;

  //   if (to > from) {
  //     speed = 30;
  //   } else {
  //     speed = -30;
  //   }

  //   let move = setInterval(function() {
  //     let scrollTop = Math.round(element.scrollTop || body.scrollTop);

  //     if (
  //       prevScrollTop === scrollTop ||
  //       (to > from && scrollTop >= to) ||
  //       (to < from && scrollTop <= to)
  //     ) {
  //       clearInterval(move);
  //       history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
  //     } else {
  //       body.scrollTop += speed;
  //       element.scrollTop += speed;
  //       prevScrollTop = scrollTop
  //     }
  //   }, timeInterval);
  // };

  // calcScroll();
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  // Loading option from DOM.

  // cards.forEach(card => {
  //   card.classList.add('animated', 'fadeInUp');
  // });

  // btn.addEventListener('click', () => {
  //   cards.forEach(card => {
  //     card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
  //     card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  //   });

  //   btn.remove();
  // });

  btn.addEventListener('click', function () {
    (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getData)('assets/db.json').then(res => {
      createCards(res.styles);
      this.remove();
    }).catch(error => {
      console.log(error);
    });
  });
  function createCards(response) {
    response.forEach(_ref => {
      let {
        src,
        title,
        link
      } = _ref;
      let card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      card.innerHTML = `
        <div class='styles-block'>
          <img src=${src} alt='style'>
          <h4>${title}}</h4>
          <a href=${link}>Подробнее</a>
        </div>
      `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
  ;
};
/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const sliders = (slides, dir, prev, next) => {
  let slideIndex = 1,
    paused = false;
  const items = document.querySelectorAll(slides);
  const showSlides = n => {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });
    items[slideIndex - 1].style.display = 'block';
  };
  showSlides(slideIndex);
  const changeSlides = n => {
    showSlides(slideIndex += n);
  };
  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      changeSlides(-1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
    nextBtn.addEventListener('click', () => {
      changeSlides(1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
  } catch (e) {}
  const activateAnimation = () => {
    if (dir === 'vertical') {
      paused = setInterval(function () {
        changeSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(function () {
        changeSlides(1);
        items[slideIndex - 1].classList.remove('slideInLeft');
        items[slideIndex - 1].classList.add('slideInRight');
      }, 3000);
    }
  };
  activateAnimation();
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: function() { return /* binding */ getData; },
/* harmony export */   postData: function() { return /* binding */ postData; }
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  return await res.json();
};
const getData = async url => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_dragAndDrop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/dragAndDrop */ "./src/js/modules/dragAndDrop.js");













window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block');
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])('.accordion-heading');
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger', '.burger-menu');
  (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])('.pageup');
  (0,_modules_dragAndDrop__WEBPACK_IMPORTED_MODULE_12__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map