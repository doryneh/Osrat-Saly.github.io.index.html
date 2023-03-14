$(document).ready(function () {

  /**********
  Delete Card 
  ***********/
  function removeCard() {
    // Implement the click handler here for button of class 'remove'
    $('.trash').click(function () {
      $(this).parent().parent().parent().parent().remove();
    });
  }

  removeCard();


  /**********
  Animation
  ***********/
  function PinkSeperatorAnim() {
    var reveals = document.querySelectorAll(".PinkSeperator,.Categories .carousel-item .card,footer.footer .SocialMediaIcons li.nav-item,.Restaurants,.RoundedImageCarousel ,.Cards3Part,.ProductCarouse,.whyUs,.youNeedHelp,.FooterCards,.FooterServices ,.AnimatedRow");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", PinkSeperatorAnim);




  /**********
   Food Description show
   ***********/
  $(".Categories .WhiteBG").click(function () {
    $("#AboutFood").css("display", "block");
  });


  /**********
     Checked label css 
     ***********/
  // Add a change event listener to the radio buttons
  $('.ProductSize .form-check input[type="radio"]').change(function () {
    // Get the label associated with the checked input
    var label = $('label[for="' + $(this).attr('id') + '"]');

    // Remove the "active" class from all labels
    $('label').removeClass('active');

    // Add the "active" class to the label associated with the checked input
    label.addClass('active');
  });




});