const $indicator = $('.slide-pagination a');
const $container = $('.slide-container');
$indicator.on('click', function (evt) {
	evt.preventDefault();

	const nowIdx = $indicator.index(this);

	//컨테이너 이동
	$container.animate({ left: -1120 * nowIdx });

	//활성화표시
	// $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

	$indicator.eq(nowIdx).parent().addClass('on');
	$indicator.eq(nowIdx).parent().siblings().removeClass('on');
});
