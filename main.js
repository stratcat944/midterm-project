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

// var submitInfo 	= {
// 	catName		: "name",
// 	catAge 		: "age",
// 	catBreed	: "breed",
// 	coatColor	: "coatColor",
// 	eyeColor	: "eyeColor",
// 	gender		: "gender",
// 	status		: "status",
// 	healthNotes	: "text",
// 	locOrigin	: "text",
// 	history		: "text"
// };

$(function() {
    $( ".date-picker" ).datepicker();
  });


$('#submit1').on('click', function(){
<<<<<<< HEAD
	var name = $('#name').val();
	var age = $('#age').val();
	var breed = $('#breed').val();
	var coatColor = $('#coatColor').val();
	var	eyeColor = $('#eyeColor').val();
	var gender = $('#radio1 input:checked').val();
=======
	var name 	= $('#name').val()
	var age 	= $('#age').val()
>>>>>>> 8f0a698e6e632fcb2489b4db93a6f68a0690f5b7

	console.log(name, age, breed, coatColor, eyeColor, gender);
});






  

});  