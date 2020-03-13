import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let homeSection = $('.home-section');
    let navbar = $('.navbar-custom');
    let navHeight = navbar.height()
    buildHomeSection(homeSection);

    $(window).resize(function () {
      var width = Math.max($(window).width(), window.innerWidth);
      buildHomeSection(homeSection);
      // hoverDropdown(width, mobileTest);
    });

    $(window).scroll(function () {
      effectsHomeSection(homeSection, this);
      navbarAnimation(navbar, homeSection, navHeight);
    });

    navbarAnimation(navbar, homeSection, navHeight);

    function effectsHomeSection(homeSection, scrollTopp) {
      if (homeSection.length > 0) {
        var homeSHeight = homeSection.height();
        var topScroll = $(document).scrollTop();
        if ((homeSection.hasClass('home-parallax')) && ($(scrollTopp).scrollTop() <= homeSHeight)) {
          homeSection.css('top', (topScroll * 0.55));
        }
        if (homeSection.hasClass('home-fade') && ($(scrollTopp).scrollTop() <= homeSHeight)) {
          var caption = $('.caption-content');
          caption.css('opacity', (1 - topScroll / homeSection.height() * 1));
        }
      }
    }

    function navbarAnimation(navbar, homeSection, navHeight) {
      var topScroll = $(window).scrollTop();
      if (navbar.length > 0 && homeSection.length > 0) {
        if (topScroll >= navHeight) {
          navbar.removeClass('navbar-transparent');
        } else {
          navbar.addClass('navbar-transparent');
        }
      }
    }

    function buildHomeSection(homeSection) {
      if (homeSection.length > 0) {
        if (homeSection.hasClass('home-full-height')) {
          homeSection.height($(window).height());
        } else {
          homeSection.height($(window).height() * 0.85);
        }
      }
    }

    /* ---------------------------------------------- /*
     * Youtube video background
     /* ---------------------------------------------- */
    $(function () {
      $(".video-player").mb_YTPlayer();
    });

    $('#video-play').click(function (event) {
      event.preventDefault();
      if ($(this).hasClass('fa-play')) {
        $('.video-player').playYTP();
      } else {
        $('.video-player').pauseYTP();
      }
      $(this).toggleClass('fa-play fa-pause');
      return false;
    });

    $('#video-volume').click(function (event) {
      event.preventDefault();
      if ($(this).hasClass('fa-volume-off')) {
        $('.video-player').YTPUnmute();
      } else {
        $('.video-player').YTPMute();
      }
      $(this).toggleClass('fa-volume-off fa-volume-up');
      return false;
    });

    if ($('.testimonials-slider').length > 0) {
      $('.testimonials-slider').flexslider({
        animation: "slide",
        smoothHeight: true
      });
    }
  }


}
