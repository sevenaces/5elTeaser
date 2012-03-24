var flagMenu, hostName;
$(window).ready(function () {
	hostName = document.location;
	flagMenu = true;
	
	$('.home-content').load('./data/home.html');
	$('.tracks-content').load('./data/tracks.html');
	$('.venue-content').load('./data/venue.html');
	$('.sponsorship-content').load('./data/sponsorship.html');
	$('.contact-content').load('./data/contact.html');

	if(document.location.toString().indexOf('#') > 0)
	{
		preloadPage(document.location.toString().substring(document.location.toString().indexOf('#') + 1));
	}
	else
		init();
	$('input, textarea').placeholder();

});

function init()
{
	$('.title').css("top", $(window).height()/2 - 120);
	$('.title').css("left", $(window).width()/2 - 280);
	$('.title').fadeIn(300);

	$('.hg-logo').css("top", $(window).height()/2 - 250);
	$('.hg-logo').css("left", $(window).width()/2 - 50);
	$('.hg-logo').fadeIn(500);

	$('.hg-logo-2').css("top", "0px");
	$('.hg-logo-2').css("left", $(window).width()/2 + 350);

	$('.byline').css("top", $(window).height()/2);
	$('.byline').css("left", $(window).width()/2 - 150);
	$('.byline').fadeIn(600);

	$('.nav').css("top", $(window).height()/2 + 60);
	$('.nav').css("left", $(window).width()/2 - 320);
	$('.nav').fadeIn(1400);
}
function preloadPage(pageName)
{
	flagMenu = false;
	pageIndex = ["home", "tracks", "venue", "sponsorship", "contact"].indexOf(pageName)+1;
	
	$('.title').css("top", "0px");
	$('.title').animate({left: $(window).width()/2 - 515, opacity: '1'}, 300);
	$('.title').fadeIn(300);
	
	$('.hg-logo-2').css("top", "0px");
	$('.hg-logo-2').css("left", $(window).width()/2 + 350);
	$('.hg-logo-2').fadeIn(300);

	$('.nav').css("left", $(window).width()/2 - 320);
	$('.nav').fadeIn(300).animate({top: "90px"});
	
	$('.content').css("top", "0px");
	$('.content').fadeIn(400).animate({top: '130px'});
	$('.content .cover').animate({left: 980-980*pageIndex});
	$('.nav a').removeClass("active");
	$('.nav a:nth-child(0n+' + pageIndex + ')').addClass('active');
}
function page(pageName, pageIndex)
{
	if(flagMenu)
	{
		flagMenu = false;
		$('.hg-logo').animate({left: '-200px', opacity: 0}, 500);
		$('.title').animate({left: '-200px', opacity: 0}, 500);
		$('.byline').animate({top: ($(window).height()), opacity: 0}, 400);
		$('.nav').animate({top: ($(window).height()), opacity: 0}, 300, 
			function()
			{
				$('.nav').css("top", "0px");
				$('.nav a').removeClass("active");
				$('.nav a:nth-child(0n+' + pageIndex + ')').addClass('active');
				$('.nav').animate({top: '90px', opacity: '1'}, 500, 
					function()
					{
						$('.title').css("top", "0px");
						$('.title').animate({left: $(window).width()/2 - 515, opacity: '1'}, 300);
						$('.hg-logo-2').fadeIn(300);
						$('.content').css("top", "0px");
						$('.content .cover').css("left", 980-980*pageIndex);
						$('.content').fadeIn(100).animate({top: '130px'});
					});
			}
		);
	}
	else
	{
		$('.nav a').removeClass("active");
		$('.nav a:nth-child(0n+' + pageIndex + ')').addClass('active');	
		$('.content .cover').animate({left: 980-980*pageIndex});	
	}	
}