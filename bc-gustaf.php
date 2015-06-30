<?php include_once "assets/html/head.html" ?>
<body>
	<?php include_once "assets/plugins/mobile-menu/mobile-menu.html" ?>
	<?php include_once "assets/html/main-menu.html" ?>
	<?php include_once "assets/html/bc-gustaf.html" ?>
	<?php include_once "assets/html/footer.html" ?>
<script>
$(document).ready(function(){
	var height = $(window).height();
	$(".bc-magnus-content-head").height(height);
	$(window).resize(function(event) {
		var height = $(window).height();
		$(".bc-magnus-content-head").height(height);
	});
})
</script>

</body>