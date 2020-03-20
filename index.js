"use strict";

$("#portfolio-scroll").click(function() {
  console.log("you clicked");
  $.scrollTo($(".portfolio"), 500);
});
