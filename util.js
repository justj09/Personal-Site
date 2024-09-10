console.log("set");
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("disabled-animation");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("disabled-animation");
  }, 50);
});