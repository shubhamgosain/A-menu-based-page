var main=function()
{
	$('.menusign').click(function(){
		$('.menudata').animate({left:'0px'},200);
		$('body').animate({left:'300px'},200);
		
		});
		
		
		$('.backgroundcontent').click(function(){
		$('.menudata').animate({left:'-300px'},150);
		$('body').animate({left:'0px'},150);
		
	});
	
	$('.preview').click(function(){
		$('.lists').show();
	$('.menudata').animate({left:'-300px'},150);
		$('body').animate({left:'0px'},150);
		
	});
	
	$('.article').click(function()
	{
		$('.article').removeClass('current');
		$('.description').hide();
	$(this).addClass('current');
	$(this).children('.description').show();	
	
	});
	

	
$(document).keypress(function(event){
if(event.which===111)
{
	$('.description').hide();
$('.current').children('.description').toggle();
}
else if(event.which===110)
{
	
	var currentArticle=$('.current');

	var nextArticle=currentArticle.next();

currentArticle.removeClass('current');
nextArticle.addClass('current');
	
}
});

	
	};

$(document).ready(main);
