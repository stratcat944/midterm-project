$(document).on('ready', function() {
	$('.init-form').hide();
	$('.form-two').hide();

$(".cat-add").on('click', function(event){
	event.preventDefault()
	$('.init-form').show();
	});

$(".next-add").on('click', function(event){
	event.preventDefault()
	$('.init-form').hide();
	$('.cat-add').hide();
	$('.form-two').show();
	});


  
});  