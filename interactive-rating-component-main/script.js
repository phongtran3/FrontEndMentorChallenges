const ratingNumbers = document.querySelectorAll(".rating-number");
let ratingValue = 0;

// Iterate through each list item and attach a click event listener
ratingNumbers.forEach(function (item) {
  item.addEventListener("click", function () {
    ratingNumbers.forEach(function (item) {
      item.classList.remove("selected");
    });
    ratingValue = item.textContent;
    item.classList.add("selected");
  });
});

document.getElementById("submit").onclick = function () {
  const askRatingDiv = document.getElementById("ask-rating");
  askRatingDiv.classList.remove("active");
  askRatingDiv.classList.add("inactive");

  const thankYouDiv = document.getElementById("thank-you");
  thankYouDiv.classList.remove("inactive");
  thankYouDiv.classList.add("active");

  const resultText = document.getElementById("result-text");
  resultText.innerText = `You selected ${ratingValue} out of 5`;
};
