$(function(){
//	document.addEventListener('touchstart',function(ev){
//		ev.preventDefault();
//	})
	console.log($('#btn1').children().position().left);
	var spa1 = $('#btn1').children();
	spa1.on('click',function(){
		var n = $('#btn1').children().position().left;
		console.log(n)
		$('#btn1').children().css('right','-n');
	})
})