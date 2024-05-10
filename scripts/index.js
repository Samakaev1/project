let cur =0;
let prev;
const ph = document.getElementsByClassName('ph');
const leftArrow = document.querySelector(".left_arr");
const rightArrow = document.querySelector(".right_arr");

const _leftArrow = document.querySelector(".left_arr_2");
const _rightArrow = document.querySelector(".right_arr_2");
const gr = document.getElementsByClassName('grp');
let _cur =0;
let _prev;

const _leftArrow_ = document.querySelector(".left_arr_3");
const _rightArrow_ = document.querySelector(".right_arr_3");
const _gr = document.getElementsByClassName('_grp');
let _cur_ =0;
let _prev_;

rightArrow.addEventListener("click", function() {
  prev = cur;
  cur = cur + 1;
  if (cur > 2) {
    cur = 0;
    prev = 2;
  }
  ph[prev].style.display = "none";
  ph[cur].style.display = "block";
});
leftArrow.addEventListener("click", function() {
  prev = cur;
  cur = cur - 1;
  if (cur < 0) {
    cur = 2;
    prev = 0;
  }
  ph[prev].style.display = "none";
  ph[cur].style.display = "block";
});

_rightArrow.addEventListener("click", function() {
  _prev = _cur;
  _cur++;
  if (_cur > 1) {
    _cur = 0;
    _prev = 1;
  }
  gr[_prev].style.display = "none";
  gr[_cur].style.display = "flex";
});
_leftArrow.addEventListener("click", function() {
  _prev = _cur;
  _cur--;
  if (_cur < 0) {
    _cur = 1;
    _prev = 0;
  }
  gr[_prev].style.display = "none";
  gr[_cur].style.display = "flex";
});

_rightArrow_.addEventListener("click", function() {
  _prev_ = _cur_;
  _cur_++;
  if (_cur_ > 1) {
    _cur_ = 0;
    _prev_ = 1;
  }
  _gr[_prev_].style.display = "none";
  _gr[_cur_].style.display = "flex";
});
_leftArrow_.addEventListener("click", function() {
  _prev_ = _cur_;
  _cur_--;
  if (_cur_ < 0) {
    _cur_ = 1;
    _prev_ = 0;
  }
  _gr[_prev_].style.display = "none";
  _gr[_cur_].style.display = "flex";
});
