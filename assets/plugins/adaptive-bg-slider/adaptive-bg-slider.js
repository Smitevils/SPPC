$(document).ready(function() {
	//узнаем количество элементов в блоке
	var img_count = $('.adaptive-slider-container').find('img').length;
	//пустой массив для хранения адресов картинок
	var img_src = new Array();
	//заносим в массив все адреса картинок в блоке
	$("img").each(function(){
		img_src.push($(this).attr("src"));
	});

	// назначаем блокам картинки
	for (var i = 0; i < img_count; i++) {
		$('.adaptive-slider-container').prepend('<div class="cover-img cover-img-'+(i+1)+'"></div>')
	};

	//присваиваем фоны блокам и задаем opacity
	for (var i = 0; i < img_count; i++) {
		$('.cover-img-'+(i+1)+'').css('backgroundImage', 'url('+img_src[(i)]+')');
		$('.cover-img-1').css('opacity', '1');
	};

	// интервал смены слайдов
	var interval = 10000;
	// нумерация слайдов
	var slide_number = 1;

	// устанавливаем интервал
	setInterval(function() {
		checkBg();
	}, interval);

	// функция сменяет слайд
	function checkBg() {
		slide_number++;
		if (slide_number > img_count) {
			slide_number = 1;
		};
		for (var i = 0; i < img_count; i++) {
			$('.cover-img-'+(i+1)+'').css('opacity', '0');
			$('.cover-img-'+slide_number+'').css('opacity', '1');
		};
		//console.log(slide_number)
	}
});