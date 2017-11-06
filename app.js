$(document).ready(function(){
//name entry
var p1Name = prompt("Player 1 please enter your name:");
var p2Name = prompt("Player 2 please enter your name:");
document.getElementById('p2-plus-five').setAttribute("value", p2Name + " +5");
document.getElementById('p1-plus-five').setAttribute("value", p1Name + " +5");
document.getElementById('p2-plus-six').setAttribute("value", p2Name + " +6");
document.getElementById('p1-plus-six').setAttribute("value", p1Name + " +6");
document.getElementById('p2-plus-seven').setAttribute("value", p2Name + " +7");
document.getElementById('p1-plus-seven').setAttribute("value", p1Name + " +7");

setNames();

function setNames(){
	$('#p1-name').text(p1Name);
	$('#p2-name').text(p2Name);
}
//ball select
	$('.ball').on("mouseenter", function(){
		$(this).animate({width:"15px", height:"15px"}, 200)
});
	$('.ball').on("mouseleave", function(){
		$(this).animate({width:"10px", height:"10px"}, 200)
	});

//set break

function p1Break() {
	$('.highlight').removeClass('highlight');
	$('#p1-score').addClass('highlight');
	setTimeout(function(){$('#p2-current-break').text(0)}, 500);
}

function p2Break() {
	$('.highlight').removeClass('highlight');
	$('#p2-score').addClass('highlight');
	setTimeout(function(){$('#p1-current-break').text(0)}, 500);
}

$('#p1-break').on("click", p1Break);

$('#p2-break').on("click", p2Break);

//scoring
//red
$('.red').attr("data", "1");

$('.red').on("click", function() {
	$(this).hide();
	if($('#p1-score').hasClass('highlight')){
		$('#p1-score').text((parseInt(document.getElementById('p1-score').innerHTML) + 1));
		$('#p1-current-break').text(parseInt(document.getElementById('p1-current-break').innerHTML) + 1);
	} 
	else if($('#p2-score').hasClass('highlight')){
			$('#p2-score').text((parseInt(document.getElementById('p2-score').innerHTML) + 1));
			$('#p2-current-break').text(parseInt(document.getElementById('p2-current-break').innerHTML) + 1);
		}
	else{
		$(this).show();
	}
});

//colour
$('.colour').on("click", function(){
	if (!($('.red').is(':visible')) && $('#p1-score').hasClass('highlight')){
		$(this).hide();
		$('#colour-respot').show();
		$('#p1-score').text((parseInt(document.getElementById('p1-score').innerHTML)) + parseInt($(this).attr("data")));
		$('#p1-current-break').text(parseInt(document.getElementById('p1-current-break').innerHTML) + parseInt($(this).attr("data")));
	}
	else if(($('.red').is(':visible')) && $('#p1-score').hasClass('highlight')){
		$('#p1-score').text((parseInt(document.getElementById('p1-score').innerHTML)) + parseInt($(this).attr("data")));
		$('#p1-current-break').text(parseInt(document.getElementById('p1-current-break').innerHTML) + parseInt($(this).attr("data")));
	}
	else if(!($('.red').is(':visible')) && $('#p2-score').hasClass('highlight')){
		$('#colour-respot').show();
		$(this).hide();
		$('#p2-score').text((parseInt(document.getElementById('p2-score').innerHTML)) + parseInt($(this).attr("data")));
		$('#p2-current-break').text(parseInt(document.getElementById('p2-current-break').innerHTML) + parseInt($(this).attr("data")));
	}
	else if(($('.red').is(':visible')) && $('#p2-score').hasClass('highlight')){
		$('#p2-score').text((parseInt(document.getElementById('p2-score').innerHTML)) + parseInt($(this).attr("data")));
		$('#p2-current-break').text(parseInt(document.getElementById('p2-current-break').innerHTML) + parseInt($(this).attr("data")));
	}
	else {
		$(this).show;
	}
})

$('.colour').on("mousedown", function(){
	$(this).addClass('rubberBand');
	$(this).hide(1);
	$(this).show(1);
})

//colour re-spot

function colourRespot(){
	$('.colour').show();
}

$('#colour-respot').on("click", colourRespot);

//fouls
function p1Foul(){
	if ($('#p1-score').hasClass('highlight')){
	$('#p2-score').text(parseInt(document.getElementById('p2-score').innerHTML) + parseInt($(this).attr("data")));
	}
	else {}
}

function p2Foul(){
	if($('#p2-score').hasClass('highlight')){
	$('#p1-score').text(parseInt(document.getElementById('p1-score').innerHTML) + parseInt($(this).attr("data")));
	}
	else {}
}

$('.foul').on("click", p1Foul);
$('.foul').on("click", p2Foul); 

//winning
function p1Win(){
	$('#p1-frames').text(parseInt(document.getElementById('p1-frames').innerHTML + 1))
}

function p2Win(){
	$('#p2-frames').text(parseInt(document.getElementById('p2-frames').innerHTML + 1))
}

//new frame

function newFrame(){
	highestBreak();
	if (document.getElementById('p1-score').innerHTML > document.getElementById('p2-score').innerHTML){
		p1Win();
	}
	else if(document.getElementById('p1-score').innerHTML < document.getElementById('p2-score').innerHTML) {
		p2Win();
	}
	else {}
	resetScores();
	$('#colour-respot').hide();
	$('.highlight').removeClass('highlight');
}

function resetScores(){
	$('#p1-score').text(0);
	$('#p2-score').text(0);
	$('#p1-current-break').text(0);
	$('#p2-current-break').text(0);
	$('.red').show();
	$('.colour').show();
}

$('#new-frame').on("click", newFrame);

$('#re-rack').on("click", resetScores);

//new match
function newMatch(){
	newFrame();
	$('#p1-frames').text(0);
	$('#p2-frames').text(0);
}

$('#new-match').on("click", newMatch);

//highest break
function highestBreak(){
	if (parseInt(document.getElementById('p1-current-break').innerHTML) > parseInt(document.getElementById('p1-highest-break').innerHTML)) {
		$('#p1-highest-break').text(document.getElementById('p1-current-break').innerHTML);
	}
	else if(parseInt(document.getElementById('p2-current-break').innerHTML) > parseInt(document.getElementById('p2-highest-break').innerHTML)) {
		$('#p2-highest-break').text(document.getElementById('p2-current-break').innerHTML);
	}
	else {}
}

$('.button').on("click", highestBreak);

//end of document ready function
});