let $=require('jquery')

	$(".logo_bottom_list_items").click(function(){
		$(this).addClass('active').siblings().removeClass('active')	
	})


