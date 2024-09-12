//===== Back to top =====//
//Get the button
let mybutton = document.querySelector(".back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Animation on scroll function
function initAOS() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", () => {
  initAOS();
});

document.addEventListener('DOMContentLoaded', function() {
  var reviews = document.querySelectorAll('.review');
  var loadMoreButton = document.querySelector('.load-more-reviews');

  reviews.forEach(function(review, index) {
      if (index >= 3) {
          review.style.display = 'none';
          review.classList.add('extra-review');
      }
  });

  loadMoreButton.addEventListener('click', function() {
      var extraReviews = document.querySelectorAll('.extra-review');
      var isHidden = Array.from(extraReviews).some(function(review) {
          return review.style.display === 'none';
      });

      extraReviews.forEach(function(review) {
          review.style.display = isHidden ? 'block' : 'none';
      });

      this.textContent = isHidden ? 'إخفاء المراجعات' : 'مشاهدة جميع المراجعات';
  });
});