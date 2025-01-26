"use strict";

const submitBtn = document.querySelector(".submit-btn");
const ratingButtons = document.querySelectorAll(".btns-grp button");
const selectedRating = document.querySelector(".num");
const ratingContainer = document.getElementById("rating-container");
const thankyouCard = document.getElementById("thankyou-card");

//hide the thank you by default
if (thankyouCard) {
  thankyouCard.hidden = true;
  console.log("thank you hidden", thankyouCard.hidden);
}
//show the rating card by default
if (ratingContainer) {
  ratingContainer.hidden = false;
  console.log("rating card shown", ratingContainer.hidden);
}
submitBtn.addEventListener("click", function buttonClicked() {
  if (currentRating > 0) {
    //update the thank you card with the selected rating
    selectedRating.textContent = currentRating;
    //show the thank you card and hide the rating container
    console.log(
      "submit button clicked and hide the rating and show the thank you"
    );
    thankyouCard.hidden = false;
    ratingContainer.hidden = true;
  } else {
    alert("Please select a rating before submitting.");
  }
});
//initialize the variable to store the selected rating
let currentRating = 0;

//add event listeners to rating buttons
ratingButtons.forEach((button) => {
  button.addEventListener("click", function () {
    //set the current rating value of the clicked button
    currentRating = this.textContent;
  });
});
