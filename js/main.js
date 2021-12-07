// Responsive Menu
const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

//Radio Buttons
var radios = document.forms["signup"].elements["select"];
var emailInput = document.getElementById('mail');
var phoneInput =document.getElementById('phone');

for(select in radios) {
  radios[select].onclick = function() {
      if(this.value == "email"){
        phoneInput.disabled = true;
        emailInput.disabled = false;
      }
      else if(this.value = "phone"){
        phoneInput.disabled = false;
        emailInput.disabled = true;
      }
  }
}

//Form Control
document.addEventListener('DOMContentLoaded',function(){
	console.log ("It loaded");
	document.getElementById('submit').addEventListener('click', function () {

		var full = document.getElementById('fullname').value;

		var  ma = document.getElementById('mail').value;
		var ph =document.getElementById('phone').value;
	
		if (full === "") {
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