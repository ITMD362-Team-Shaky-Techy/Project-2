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
var contactType = "email";

for(select in radios) {
  radios[select].onclick = function() {
      if(this.value == "email"){
        phoneInput.disabled = true;
        emailInput.disabled = false;
        contactType = "email";
      }
      else if(this.value = "phone"){
        phoneInput.disabled = false;
        emailInput.disabled = true;
        contactType = "phone";
      }
  }
}

//Form Control
document.addEventListener('DOMContentLoaded',function(){
	console.log ("It loaded");
	document.getElementById('submit').addEventListener('click', function () {
    var nameFlag = true;
    var contactFlag = true;

		var full = document.getElementById('fullname').value;
    if(contactType == "email"){
      var contact = document.getElementById('mail').value;
    }
    else if(contactType == "phone"){
      var contact = document.getElementById('phone').value;
    }

		if (full === "") {
			nameFlag = false; //means name is missing
		}
		if (contact === "") {
			contactFlag = false;
		}
    
    if(nameFlag && contactFlag){
      var container = document.getElementById("form-container");
      container.innerHTML = "";
      thankYouNode = document.createElement("h2");
      thankYouNode.innerHTML = "Thank You for signing up!";
      confirmationNode = document.createElement("h3");
      confirmationNode.innerHTML = "We will contact you soon"
      container.appendChild(thankYouNode);
      container.appendChild(confirmationNode);
    }
    else{
      if(!nameFlag && !contactFlag){
        alert("Please provide your name and a way to contact you.")
      }
      else if(!nameFlag){
        alert("Please provide your name.");
      }
      else{
        alert("Please provide a contact method.");
      }
    }
		
	});
});