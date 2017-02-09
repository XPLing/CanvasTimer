function ajaxFn(num) {
	$.ajax({
		type: "GET",
		url: "test.json",
		data: {
			username: $("#username").val(),
			content: $("#content").val()
		},
		dataType: "json",
		success: function(data) {

		}
	});
}
$('a').click(function() {
	var num = $(this).text();//获取页码
	$.ajax({
		type: "GET",
		url: url,
		data: {
			num: num,//传入页码
		},		
		success: function(data) {
			console.log(data);//取得的数据
		}
	});
});