// Responsive Menu
const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})
//Form Control

document.addEventListener('DOMContentLoaded',function(){
	console.log ("It loaded");
	document.getElementById('submit').addEventListener('click', function () {
		var full = document.getElementById('fullname').value;
		var  ma = document.getElementById('mail').value;
		var ph =document.getElementById('phone').value;
	
		if ( full === "") {
			alert("Enter Full Name Please");
		}
		else {
			alert ( "Hello " + full + " You are now a member");
		}
		if (ma === "") {
			alert( "Enter your email please");
		}
		else {
			alert (" A Email was sent to " + ma);
		}
		if (ph === "") {
			alert("Enter your phone number please");
		}
		else {
			alert ("Thank you for entering your phone number, you will receive a notification shortly");
		}
		
	});
		
		
	});