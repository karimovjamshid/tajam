let burgerMenu = document.querySelector(".menu-toggler");
let navList = document.querySelector(".nav-list");

burgerMenu.addEventListener("click", function () {
  navList.classList.toggle("active");
});
navList.addEventListener("click", function () {
  navList.classList.remove("active");
});

$(document).ready(function () {
  // Sticky navbar
  let header = $("#header");
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    let headerH = header.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > headerH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  $(".header__link").on("click", function (event) {
    event.preventDefault();
    $(".header__list").removeClass("header__list--show");
    $(".burger").removeClass("burger__open");
  });
  // Smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elemID = $(this).data("scroll");
    let elemOffSet = $(elemID).offset().top;

    $("html, body").animate({
      scrollTop: elemOffSet - 68,
    });
  });
});
