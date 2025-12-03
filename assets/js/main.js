document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll(".hero-rotator-img");
  if (imgs.length <= 1) return;

  let index = 0;

  setInterval(() => {
    imgs[index].classList.remove("active");
    index = (index + 1) % imgs.length;
    imgs[index].classList.add("active");
  }, 4000);
});

