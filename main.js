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
	var coat = $('#coat').val();
	var	eye = $('#eye').val();
	var gender = $('#radio1 input:checked').val();

	$('.name').text(name);
	$('.age').text(age);
	$('.breed').text(breed);
	$('.coat').text(coat);
	$('.eye').text(eye);
	$('.gender').text(gender);


	$('.form-one').hide();
	$('.cat-add').hide();
	$('.form-two').show();
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