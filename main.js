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

$('#intakeDate').datepicker();

$('#submit1').on('click', function(){
	var name = $('#name').val();
	var age = $('#age').val();
	var breed = $('#breed').val();
	var coatColor = $('#coatColor').val();
	var	eyeColor = $('#eyeColor').val();
	var gender = $('#radio1 input:checked').val();

	console.log(name, age, breed, coatColor, eyeColor, gender);
});

$('#submit2').on('click', function(){
	var textBox1 = $('#textArea1').val();

	console.log(textBox1);
})

$('#submit3').on('click', function(){
	var textBox2 = $('#textArea2').val();
	var intakeDate = $('#intakeDate').val();
	var placement = $('#radio2 input:checked').val();

	console.log(textBox2, intakeDate, placement);
})

$('#submit4').on('click', function(){
	var textBox3 = $('#textArea3').val();

	console.log(textBox3);
})







  

});  