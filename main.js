$(document).on('ready', function() {

$(".cat-add").on('click', function(event){
	event.preventDefault()
	$('.init-form').addClass('show').removeClass('hide');
	});

$(".next-add").on('click', function(event){
	event.preventDefault()
	$('.hide').addClass('show').removeClass('hide');
	});
	


  
});  