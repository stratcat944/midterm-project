$(document).on('ready', function() {
	$('.form-one').hide();
	$('.form-two').hide();
	$('.form-three').hide();
	$('.form-four').hide();
	$('.form-five').hide();
	$('#intakeDate').datepicker();

$(".cat-add").on('click', function(event){
	event.preventDefault()
	$('.cat-add').hide();
	$('.form-one').show();
	});

$(".next-add").on('click', function(event){
	event.preventDefault()
	var name = $('#name').val();
	var age = $('#age').val();
	var breed = $('#breed').val();
	var coatColor = $('#coatColor').val();
	var	eyeColor = $('#eyeColor').val();
	var gender = $('#radio1 input:checked').val();
	$('.form-one').hide();
	$('.cat-add').hide();
	$('.form-two').show();
	$('.name').text(name);
	});

$(".third-add").on('click', function(event){
	event.preventDefault()
	var healthNotes = $('#textArea1').val();
	$('.form-one').hide();
	$('.cat-add').hide();
	$('.form-two').hide();
	$('.form-three').show();
	console.log(healthNotes);
})

$(".final-add").on('click', function(event){
	event.preventDefault()
	
	var location = $('#textArea2').val();
	var intakeDate = $('#intakeDate').val();
	var placement = $('#radio2 input:checked').val();
	$('.form-one').hide();
	$('.cat-add').hide();
	$('.form-two').hide();
	$('.form-three').hide();
	$('.form-four').show();
	console.log(location, intakeDate, placement);
})

$(".last-page").on('click', function(event){
	event.preventDefault()
	var history = $('#textArea3').val();
	$('.form-one').hide();
	$('.cat-add').hide();
	$('.form-two').hide();
	$('.form-three').hide();
	$('.form-four').hide();
	$('.form-five').show();
	console.log(history);

})



});  