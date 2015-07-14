$(document).on('ready', function() {
	$('.init-form').hide();
	$('.form-two').hide();
	
$(".cat-add").on('click', function(event){
	$('.init-form').show();
	});

$(".next-add").on('click', function(event){
	event.preventDefault()
	$('.init-form').hide();
	$('.form-two').show();
	});


  
});  