$(document).on('ready', function() {
	$('.init-form').hide();
	$('.form-two').hide();
	$('.form-three').hide();
	$('.form-four').hide();

$(".cat-add").on('click', function(event){
	event.preventDefault()
	$('.cat-add').hide();
	$('.init-form').show();
	});

$(".next-add").on('click', function(event){
	event.preventDefault()
	$('.init-form').hide();
	$('.cat-add').hide();
	$('.form-two').show();
	});

$(".third-add").on('click', function(event){
	event.preventDefault()
	$('.init-form').hide();
	$('.cat-add').hide();
	$('.form-two').hide();
	$('.form-three').show();
})

$(".final-add").on('click', function(event){
	event.preventDefault()
	$('.init-form').hide();
	$('.cat-add').hide();
	$('.form-two').hide();
	$('.form-three').hide();
	$('.form-four').show();
})

var submitInfo 	= {
	catName		: "name",
	catAge 		: "age",
	catBreed	: "breed",
	coatColor	: "coatColor",
	eyeColor	: "eyeColor",
	gender		: "gender",
	status		: "status",
	healthNotes	: "text",
	locOrigin	: "text",
	history		: "text"
};

$(function() {
    $( ".date-picker" ).datepicker();
  });

// var radios = $("input[type='radio']");
// radios.filter:(":checked")



  

});  