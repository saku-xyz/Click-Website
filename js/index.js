let leftSlider = document.querySelector(".slider--left");
let rightSlider = document.querySelector(".slider--right");
let items = document.querySelectorAll(".item");

let maxClicks = items.length - 4;
let numClicks = 0;

items.forEach((item) => {
  item.addEventListener("transitionend", () =>{
    item.style.transition = "none";
  });
})

leftSlider.addEventListener("click", () => {
  if (numClicks != 0) {
    items.forEach(item => {
      let currLeft = item.style.left ? parseFloat(item.style.left) : 0;
      currLeft += GetWidth();
      
      item.style.transition = "left 0.3s";
      item.style.left = currLeft + "px";
    });
    numClicks--;
  }
});

rightSlider.addEventListener("click", () => {
  if (numClicks != maxClicks) {
    items.forEach(item => {
      let currLeft = item.style.left ? parseFloat(item.style.left) : 0;
      currLeft -= GetWidth();
      
      item.style.transition = "left 0.3s";
      item.style.left = currLeft + "px";
    });
    numClicks++;
  }
});

function GetWidth() {
  let item = document.querySelector(".item");
  let style = window.getComputedStyle(item);

  let itemWidth =
    parseFloat(item.offsetWidth) +
    parseFloat(style.marginLeft) +
    parseFloat(style.marginRight);

  return itemWidth;
}

window.addEventListener("resize", () => {
  let newLeft = numClicks * GetWidth();

  items.forEach((item) => {
    item.style.left = - (newLeft) + "px";
  });
});









