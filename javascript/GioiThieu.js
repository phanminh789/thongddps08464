/**
 * copy from w3school, add some features:
 * - disable next button and prev button when reaching the end or the begin of slideshow
 * - mouse hovering will make the slide jumps randomly 
 * 
 * @author: W3School + Dinh Dat Thong
 * @version: 1.0
 */

var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var autoSlide;

$(document).ready(function() {
	showSlides(1);
	$(".prev").hide();
	$(".next").hide();
	
	// image grayscale effect
	$(".slideshow-container").hover(function() {
		// if we reach the first image of slide, disable the prev button
		if (slideIndex == 1) {
			$(".next").fadeIn("fast");
		}
		// if we reach the last image of slide, disable the next button
		else if (slideIndex == slides.length) {
			$(".prev").fadeIn("fast");
		}
		else {
			$(".prev").fadeIn("fast");
			$(".next").fadeIn("fast");
		}
		
		$(".slideshow-container img").css("filter", "grayscale(0%)");
	}, function() {
		$(".prev").fadeOut("fast");
		$(".next").fadeOut("fast");
		$(".slideshow-container img").css("filter", "grayscale(100%)");
	});
	
	
	
	
	// auto go to next image when being hovered
	$(".mySlides").hover(function() {
		autoSlide = setInterval(function() {
			// this block of code is to be executed after 1500 miliseconds
			slideIndex++;
			currentSlide(slideIndex);
		}, 2500);
	}, function() {
		clearInterval(autoSlide);
	});
});

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	if (n > slides.length) {
		slideIndex = slides.length;
	}
	
	if (n < 1) {
		slideIndex = 1;
	}
	
	// if we reach the first image of slide, disable the prev button
	if (slideIndex == 1) {
		$(".prev").hide();
	}
	else {
		$(".prev").show();
	}
	
	// if we reach the last image of slide, disable the next button
	if (slideIndex == slides.length) {
		$(".next").hide();
	}
	else {
		$(".next").show();
	}
	
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}