$(document).ready(function(){
	$(".main").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 900,
    	direction : 'vertical',
		loop: true,
    	updateURL: true,
    	pagination: true,
    	beforeMove: function(ind){
    		$('#kyr')[0].style.opacity = 0 + (0.066666666667 * ind);
    		console.log($('#kyr')[0].style.opacity);

    		var tx = $('.back')[0];
    		if(ind == 1) {tx.innerText = 'Американская мечта';}
    		if(ind == 2) {tx.innerText = 'История возникновения термина';}
    		if(ind == 3) {tx.innerText = 'Что привлекает людей в Америку';}
    		if(ind == 4) {tx.innerText = 'Компоненты, составляющие понятие «американская мечта»';}
    		if(ind == 5) {tx.innerText = 'Актуальность «американской мечты» на сегодня';}
    		if(ind >= 6 && ind < 15) {tx.innerText = 'Способы достижения «американской мечты»';}
    		if(ind == 15) {tx.innerText = 'ФИНАЛОЧКА';}
    	}


	});
});	