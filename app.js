const switchButton = document.querySelector("header button");

switchButton.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector("body").style.backgroundColor = "white";
});
