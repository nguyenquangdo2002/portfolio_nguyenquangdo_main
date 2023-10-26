console.log("hi");
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCount = 0;
  arrow.addEventListener("click", () => {
    clickCount++;
    if (itemNumber - (4 + clickCount) > 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = `translateX(0)`;
      clickCount = 0;
    }
  });
});

// arrows.forEach((arrow, i) => {
//   const itemNumber = movieLists[i].querySelectorAll("img").length;
//   let countItemNum = 0;
//   arrow.addEventListener("click", () => {
//     countItemNum++;
//     if (itemNumber - (4 + countItemNum) >= 0) {
//       movieLists[i].style.transform = `translateX(${
//         movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
//       }px)`;
//     } else {
//       movieLists[i].style.transform = "translateX(0)";
//       countItemNum = 0;
//     }
//   });
//   console.log();
// });
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".menu-list,.profile-container,.toggle,.toggle-ball,.sidebar,.left-menu-icon,.navbar-container,.movie-list-title,.movie-list"
);
ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
});
