const switchButton = document.querySelector("header button");
const bodyStyle = document.querySelector("body");

switchButton.addEventListener("click", () => {
  if (bodyStyle.style.backgroundColor === "#fff")
    document.querySelector("body").style.backgroundColor = "#000";
  else if (bodyStyle.style.backgroundColor === "#000")
    document.querySelector("body").style.backgroundColor = "#fff";
});
