$(function() {
	function hash() {
		var hash = window.location.hash.substring(2);
		hash == "" ? hash = "body" : hash;
		$('#rightMain').attr('src', hash + '.html');
	};
	hash();
	$('.outerlayer>li').click(function() {
		if(!$(this).hasClass('onli')) {
			$(this).addClass('onli').siblings().removeClass('onli');
		}else{
			$(this).removeClass('onli');
		}
	})

	$('.innerlayer>li>a').click(function(event) {
		event.stopPropagation();
		var href = $(this).attr('href').substring(2);
		$('#rightMain').attr('src', href + '.html');
		$('.innerlayer>li').removeClass('onaLink');
		$(this).parent('li').addClass('onaLink');
	});
})