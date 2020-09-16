$(function() {
	// 选中页面中所有input[data-rule]


	// 解析每一个input的验证规则


	// 验证
	var validator = new Validator('21', {
		max:100,
		min:18,
	});

	// var result = validator.validate_max();
	var result = validator.validate_min();
	console.log('result:', result);
});


















































/* JS、jQuery、AJAX练习 */
// var searchForm = $('#search-form');
// var searchInput = $('#search-input');
// var result = $('#result');
// var username;


// $('#search-input').focus(function(e) {
// 	e.preventDefault();
// 	username = searchInput.val();
// 	$.ajax({
// 		url: 'https://api.github.com/users/' + username,
// 		error: function(data){
// 					console.log('请求失败');
// 			},
// 		}).done(function(data) {
// 			console.log("data:", data);
// 			var addHtml =
// 				'<div>用户名：' + data.login + '</div>' +
// 				'<div>姓名：' + data.name + '</div>' +
// 				'<div>介绍：' + (data.bio || '无') + '</div>';
// 			result.html(addHtml);
// 		});
// });


// $('#search-input').focus(function(e) {
// 	username = searchInput.val();
// 	$.ajax('https://api.github.com/users/' + username, {
// 		success: function(data){
// 			console.log(data);
// 			var addHtml =
// 				'<div>用户名：' + data.login + '</div>' +
// 				'<div>姓名：' + data.name + '</div>' +
// 				'<div>介绍：' + (data.bio || '无') + '</div>';
// 				result.html(addHtml);
// 		},
// 		error: function(){
// 			console.log('获取失败');
// 		},
// 	});
// });


// searchForm.on('submit', function(e) {
// 	e.preventDefault();
// 	username = searchInput.val();
// 	$.ajax('https://api.github.com/users/' + username)
// 		.done(function(data) {
// 			console.log("data:", data);
// 		});
// });
