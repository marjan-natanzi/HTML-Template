$(document).ready(function(){

  $('.slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 700,
    fade: true,
  });

  document.getElementById("contact-us-form").addEventListener("submit", function(event){
    event.preventDefault();
    var formData = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      message : document.getElementById("message").value
    };
    console.log(formData);
    document.getElementById("contact-us-form").reset();
  });
  
});