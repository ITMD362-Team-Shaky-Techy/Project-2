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
	document.getElementById('sub').addEventListener('click', function () {
		var f = document.getElementById('fn').value;
		var l = document.getElementById('ln').value;
		if (isNaN(f)) {
			alert("No numbers in here");
		}
		else if ( f === "") {
			alert("Enter Name Please");
		}
		if (isNaN(l)) {
			alert("No numbers in here");
		}
		else if ( l === "") {
			alert("Enter Last Name Please");
		}
	});
	document.getElementById('mail').disabled=true;
	document.getElementById('tel').disabled=true;
	
	
	});