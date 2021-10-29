'use strict'

const input = document.querySelector('.input');
const pShow = document.querySelector('.input-show');

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const getShowInput = debounce(() => {
    console.log('click');
    pShow.textContent = input.value;
}, 300)


input.addEventListener('input', getShowInput);