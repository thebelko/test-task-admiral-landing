'use strict';

var popupBtnsOpenMobile = document.querySelectorAll('.btn');
var popup = document.querySelector('.popup');
var overlay = document.querySelector('.overlay');
var popupBtnClose = popup.querySelector('.popup__close-btn');

var showPopup = function () {
    popup.classList.add('popup_show');
    overlay.classList.add('overlay_show');
};

var closePopup = function () {
    popup.classList.remove('popup_show');
    overlay.classList.remove('overlay_show');
};

function addClick(element) {
    element.addEventListener('click', function (evt) {
        evt.preventDefault();
        showPopup();
    });
}

popupBtnsOpenMobile.forEach(addClick);

document.body.addEventListener('mouseleave', function () {
    if (window.innerWidth > 1024) {
        showPopup();
    }
});

popupBtnClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup();
});

window.onload = function () {
    function timer() {

        var minute = document.getElementById('minutes').innerHTML;
        var second = document.getElementById('seconds').innerHTML;
        var end = false;

        if ( second > 0 ) {
            second--;
        } else {
            second = 60;

            if ( minute > 0 ) {
                minute--;
            } else {
                second = 60;
            }
        }

        if (end) {
            document.getElementById('minutes').innerHTML = '04';
            document.getElementById('seconds').innerHTML = '59';
        } else {
            if (second < 10) {
                document.getElementById('seconds').innerHTML = '0' + second;
            } else if (minute < 1) {
                document.getElementById('minutes').innerHTML = '00';
                document.getElementById('seconds').innerHTML = second;
            } else {
                document.getElementById('minutes').innerHTML = minute;
                document.getElementById('seconds').innerHTML = second;
            }

        }
    }
    window.intervalID = setInterval(timer, 1000);
};




