/*$(document).ready(function() {
    "use strict";
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"><i class='fa-solid fa-bars'></i></a>");
    $(".menu > ul > li").hover(function(e) {
      if ($(window).width() > 943) {
        $(this).children("ul").stop(true, false).fadeToggle(150);
        e.preventDefault();
      }
    });
    $(".menu > ul > li").click(function() {
      if ($(window).width() <= 943) {
        $(this).children("ul").fadeToggle(150);
      }
    });
    $(".menu-mobile").click(function(e) {
      $(".menu > ul").toggleClass('show-on-mobile');
      e.preventDefault();
    });
  });
  $(window).resize(function() {
    $(".menu > ul > li").children("ul").hide();
    $(".menu > ul").removeClass('show-on-mobile');
  });



  const getMenu =  document.querySelector(".clearfix");
  const closeMenu = document.querySelector(".close-hamburger");
  closeMenu.addEventListener("click", ()=> {
    getMenu.style.display = "none";
  })
  function closemenu(){
    getMenu.style.display = "none";
  }
  //console.log(closeMenu);
*/


$(document).ready(function() {
    "use strict";
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"><i class='fa-solid fa-bars'></i></a>");
    
    $(".menu > ul > li").hover(function(e) {
        if ($(window).width() > 943) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });

    $(".menu > ul > li").click(function() {
        if ($(window).width() <= 943) {
            $(this).children("ul").fadeToggle(150);
        }
    });

    const menu = document.querySelector(".menu > ul");
    const closeMenuButton = document.querySelector(".close-hamburger");

    closeMenuButton.addEventListener("click", closemenu);

    $(".menu-mobile").click(function(e) {
        menu.classList.toggle("show-on-mobile");
        e.preventDefault();
    });

    $(window).resize(function() {
        if ($(window).width() > 943) {
            menu.style.display = "";
        } else {
            menu.classList.remove("show-on-mobile");
        }
    });

    function closemenu() {
        menu.classList.remove("show-on-mobile");
    }
});


