document.addEventListener("DOMContentLoaded", function () {
  const bannerList = document.querySelector(".banner-list");
  const item = document.querySelectorAll(".item");
  let active = 0;
  let lengthItem = item.length - 1;

  // Kiểm tra ảnh đã load xong
  window.addEventListener("load", function () {
    let moveY = item[0].offsetHeight; // Lấy chiều cao của một item
    setInterval(() => {
      if (active + 1 > lengthItem) {
        active = 0;
      } else {
        active += 1;
      }
      slideUp(moveY);
    }, 3000);
  });

  function slideUp(moveY) {
    bannerList.style.transform = `translateY(-${active * moveY}px)`;
  }
});
