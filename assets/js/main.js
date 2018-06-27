$(document).ready(function() {

  // Ancora
	$('.acr').on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
	});

	$('.catalog-item').on('click', function(e) {
	  e.preventDefault();
	  var prod = $(this).attr('data-produto');
	  $('.modal-catalog-item#'+prod).addClass('active');
	  $('body').css('overflow-y','hidden');
	});

	$('.close-modal-catalog-item').on('click', function(e) {
	  e.preventDefault();
	  $('body').css('overflow-y','auto');
	  $('.modal-catalog-item').removeClass('active');
	});

});