const mine = document.querySelector(".mine");
const rb = document.querySelector(".rb");

rb.addEventListener("click", function() {
  rb.classList.add("cur");
  mine.classList.remove("cur");

  document.querySelector(".curenty").src="../img/lib/rb.jpg";
  document.querySelector(".silka").href="https://www.roblox.com/";
});
mine.addEventListener("click", function() {
  mine.classList.add("cur");
  rb.classList.remove("cur");

  document.querySelector(".curenty").src="../img/lib/minecraft.jpg";
  document.querySelector(".silka").href="https://www.minecraft.net/ru-ru";
});
