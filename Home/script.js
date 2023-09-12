(function () {
  function scroller() {
    let scroll = $("div.scroll");

    let height = scroll.height();

    let topAdj = -height - 30;
    scroll.animate(
      {
        top: [topAdj, "linear"],
      },
      10000,
      function () {
        scroll.css("top", 400);
        scroller();
      }
    );
  }

  scroller();
})();

const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
