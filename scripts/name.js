function chg_name() {
  let log = localStorage.getItem("name");
  let name = localStorage.getItem(log+"_name");

  document.querySelector(".niki_").innerHTML=name;
  document.querySelector(".niki_2").innerHTML=name;
}
