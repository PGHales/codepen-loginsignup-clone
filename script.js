/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {

	codepen.objects.User = {
		name: null,
		email: null,
		username: null,
		password: null,
		is_loged_in: false
	};

	var NewUser = Object.create(codepen.objects.User, {
		firstname: {
			writable: true,
			enumerable: true,
			value: ''
		},
		lastname: {
			writable: true,
			enumberable: true,
			value: ''
		}
	});
	//hide the signup on load
	//bring up the signup element if you click signup, and hide the login element
		$('.signup-form').hide();
	
		$('.signup-form-btn').click(function() {
			$('.signup-form').show();
			$('.login-form').hide();
			$(".login-form-btn").removeClass("active");
			$(".signup-form-btn").addClass("active");

		});
	 	$('#login-ht').click(function() {
			$('.login-form').show();
			$('.signup-form').hide();
			$(".login-form-btn").addClass("active");
			$(".signup-form-btn").removeClass("active");

		});
//.btn-login
	
	//grab the text(value) from the username field and password field and store them in variables
	//instantiate an objet with the username and password
	// call the login method and pass it our previously instantiated object
	// and handle the response
		$('.btn-login').click(function() {
			var user = Object.create(NewUser);
			user.username = $("login-username-field").val();
			user.password = $("login-password-field").val();
			var response = codepen.api.login(user);
			if(response.success == true) {
				$('.login-form .form-feedback').html("You're logged in!");
			}
		}); //ending login click

	// $('login-username-field').click(function() {
	// 	$('login-password-field').removeClass('backgnd');
	// 	$('login-username-field').addClass('backgnd');

	// });

	// $('login-password-field').click(function() {
	// 	$('login-password-field').addClass('backgnd');
	// 	$('login-username-field').removeClass('backgnd');
	// });

	
	$(".btn-signup").click(function() {
		var signupUser = {};
		signupUser.name = $("#signup-name-field").val();
		signupUser.email = $("#signup-email-field").val();
		signupUser.username = $("#signup-username-field").val();
		signupUser.password = $("#signup-password-field").val();
		console.log((codepen.api.signup(signupUser)));





	});









}); //ending ready