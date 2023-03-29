let container = document.querySelector(".container");
let img = container.querySelector(".hover-img");

container.onmousemove = (e) => {
  let x = e.pageX;
  let y = e.pageY;
  img.style.top = y + "px";
  img.style.left = x + "px";
};

container.querySelectorAll(".text").forEach((text) => {
  text.onmousemove = () => {
    img.src = text.getAttribute("data-src");
  };
});

var password;
var pass1 = "tyek6auSJ0hHntB";
password = prompt("Enter password to view page");
if (password == pass1) alert("Correct password, click OK to enter.");
else {
  alert("Uncorrect password");
  window.location = "http://www.google.com";
}
