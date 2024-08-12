/*!
 * Default theme scripts
 *
 * Copyright 2012, Mogul.io (by http://thenewmediatechnology.com)
 *
 */

// nm.onload = function () {
//   // if ($("#comment_form").length > 0) {
//   //   $("#comment_form").ajaxForm({
//   //     error: function (data) {
//   //       if (data.responseText == "success") {
//   //         location.reload();
//   //       } else {
//   //         alert("Please enter a comment to post.");
//   //       }
//   //     },
//   //   });
//   // }
// };

// nm.page_onload = function () {
//   PAGE_ONLOADED = true;
//   nm.onload();
// };

// nm.ajax_onload = function () {
//   if (!PAGE_ONLOADED) nm.onload();
//   PAGE_ONLOADED = false;
// };

// $(document).ready(function () {
//   nm.page_onload();
//   PAGE_ONLOADED = false;
// });

function setup() {
  $("#langbar a.lang").click(function () {
    var next_url = location.href.replace(location.origin, "");

    $(this).attr(
      "href",
      "/change-language/?lang=" +
        $(this).attr("rel") +
        "&next=" +
        encodeURI(next_url)
    );
  });
}

function setupSearch(textbox, watermark) {
  var c = $(textbox);
  c.watermark(watermark, "watermark");
  js.enterAction(c, function () {
    doSearch(c.val());
  });
}

function doSearch(query) {
  query = query.replace(/[(`~!@#$%^&*()=+\[\]\{\}\|\\;:'"<>,/?]/g, "");
  query = query.replace(/(_)+/g, "_");

  location.href = "/search/?q=" + query.toLowerCase().trim();
}

function setupSubscribe(textbox, watermark) {
  var account = "";
  var c = $(textbox);
  var url =
    "http://feedburner.google.com/fb/a/mailverify?uri=" +
    account +
    "&loc=en_US&email=";
  c.watermark(watermark, "watermark");
  js.enterAction(c, function () {
    window.open(url + c.val());
  });
  c.parent()
    .find(".subscribe_btn")
    .click(function () {
      window.open(url + c.val());
    });
}

function gallery() {
  // $(".content_galleria").each(function (i) {
  //   $(this).galleria({
  //     preload: 3,
  //     transition: "fade",
  //     imageCrop: "height",
  //     debug: false,
  //   });
  // });
}

function servicegallery() {
  $("#content_gallery a").each(function (i) {
    var img = $(this).find("img").attr("src");
    $(".hall-slider .owl-carousel").append(
      '<div class="item" count="' + i + '"><img src="' + img + '"/></div>'
    );
    $(".hall-thumbs .owl-carousel").append(
      '<div class="thumb" counter="' + i + '"><img src="' + img + '"/></div>'
    );
  });
  $("#content_gallery").remove();

  var $slider = $(".hall-slider .owl-carousel");
  var $thumbs = $(".hall-thumbs .owl-carousel");

  // $thumbs.owlCarousel({
  //   nav: false,
  //   dots: false,
  //   items: 4,
  //   margin: 10,
  //   loop: true,
  //   autoplay: false,
  //   lazyLoad: true,
  //   animateOut: "fadeOut",
  // });

  $(".hall-thumbs .owl-carousel .thumb").on("click", function () {
    var idx = $(this).attr("counter");
    $slider.trigger("to.owl.carousel", idx, 500);
  });

  // $slider.owlCarousel({
  //   nav: false,
  //   dots: false,
  //   items: 1,
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeout: 4000,
  //   autoplaySpeed: 800,
  //   lazyLoad: true,
  //   animateOut: "fadeOut",
  // });
}

function serviceTable() {
  $(".service-content table").addClass("table table-striped table-bordered");
  var tableData = $(".service-content").find("table");
  $(".col-md-12 .table").append(tableData);
}
function mobileMenu() {
  $(".mobile-nav,.close-menu").click(function () {
    $("ul.main").toggleClass("open");
  });
}

function scrollTop() {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
}
