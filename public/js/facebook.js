function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}

function statusChangeCallback(response) {
	console.log('Facebook login status changed');
	if (response.status === 'connected') {
	console.log('Successfully logged in with Facebook');
	FB.api('/me?fields=name,first_name,picture.width(480)',changeUser);
	}
}

function changeUser(response) {
	$("#fblogin").hide();
	$(".facebookLogin").hide();
	$("#name").text(response.name);
	$("#photo").attr('src',response.picture.data.url);
}