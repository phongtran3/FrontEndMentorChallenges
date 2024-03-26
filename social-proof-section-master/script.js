const starContainers = document.querySelectorAll(".stars");
const starImage = '<img src="./images/icon-star.svg" class="star-icon" alt="star icon" />';

starContainers.forEach((starContainer) => {
  for (let i = 0; i < 5; i++) {
    starContainer.innerHTML += starImage;
  }
});
