let pswrd = document.getElementById("password");
let lgn = document.getElementById("login");
let nm = document.getElementById("names");

let tmp;
let parol;
let login;
let _parol;
let _login;
let name, _name;

function reg() {
  parol = pswrd.value;
  login = lgn.value;
  name = nm.value;

  localStorage.setItem(login, parol);
  localStorage.setItem(login+"_name", name);
}

function log() {
  _parol = pswrd.value;
  _login = lgn.value;
  _name = nm.value;

  tmp = localStorage.getItem(_login);
  n_tmp = localStorage.getItem(_login+"_name");

  if (_parol == tmp) {
    if (_name == n_tmp) {
      localStorage.setItem("name", _login);
      localStorage.setItem(_login+"_name", _name);
      location.replace("../index.html");
    }
  }
}
