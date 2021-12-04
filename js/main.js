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
	
		if ( full === "") {
			alert("Enter Full Name Please");
		}
		else {
			alert ( "Hello " + full + " You are now a member");
		}
	});
		document.getElementById('mail').disabled=true;
		document.getElementById('phone').disabled=true;
		
	});