//@codekit-prepend "../bower_components/bootstrap-sass/assets/javascripts/bootstrap.js"

!function(n,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():n.transformicons=r()}(this||window,function(){"use strict";var n={},r="tcon-transform",t={transform:["click"],revert:["click"]},e=function(n){return"string"==typeof n?Array.prototype.slice.call(document.querySelectorAll(n)):"undefined"==typeof n||n instanceof Array?n:[n]},o=function(n){return"string"==typeof n?n.toLowerCase().split(" "):n},f=function(n,r,f){var c=(f?"remove":"add")+"EventListener",u=e(n),s=u.length,a={};for(var l in t)a[l]=r&&r[l]?o(r[l]):t[l];for(;s--;)for(var d in a)for(var v=a[d].length;v--;)u[s][c](a[d][v],i)},i=function(r){n.toggle(r.currentTarget)};return n.add=function(r,t){return f(r,t),n},n.remove=function(r,t){return f(r,t,!0),n},n.transform=function(t){return e(t).forEach(function(n){n.classList.add(r)}),n},n.revert=function(t){return e(t).forEach(function(n){n.classList.remove(r)}),n},n.toggle=function(t){return e(t).forEach(function(t){n[t.classList.contains(r)?"revert":"transform"](t)}),n},n});


$(document).ready(function() {

  //about box show hide transition //
  $(function(){
    var c=-600;
    $("#about").click(function(){
        $("#project_one").parent().toggleClass("fade");
        $(".text-wrap").toggleClass('show');
    });
  });

  transformicons.add('.tcon');

  //hamburger animation //
	$('#hamburger-animation').click(function(){
		$(this).toggleClass('open');
	});

  //hover function//
  $('.scale1').hover(function(){
    $('.art_website_background-image').toggleClass('scale');
    $('.text_box.art > img').toggleClass('scale');
    $('h4.purple.text-center').toggleClass('scale');
  });

  $('.scale2').hover(function(){
    $('.design_website_background-image').toggleClass('scale');
    $('.text_box.design > img').toggleClass('scale');
    $('h4.green.text-center').toggleClass('scale');
  });
});
