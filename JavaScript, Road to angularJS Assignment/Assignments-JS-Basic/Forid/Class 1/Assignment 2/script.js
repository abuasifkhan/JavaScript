
var loginForm = document.getElementById("loginForm");
	formValidation(loginForm);	

var registrationForm = document.getElementById("registrationForm");
	formValidation(registrationForm);	

function loginFormValidation(){
	return formStatus(loginForm);
}

function registrationFormValidation(){
 	 var formVal = formStatus(registrationForm);
	  var checkPass = checkPassword(registrationForm);
	return checkPass && formVal;
}

function formValidation(form){
	var inputs = form.getElementsByTagName("input");
	for(var i =0;i<inputs.length;i++){
		inputs[i].onkeyup=function(){
			if (this.value) {
				this.style.border='0px';
			}else{
				this.style.border='2px solid red';
			}
		};

		inputs[i].onblur=function(){
			if (this.value) {
				this.style.border='0px';
			}else{
				this.style.border='2px solid red';
			}
		};
	}
}

function formStatus(form){
	var inputs = form.getElementsByTagName("input"),
	flag=true;
	for(var i =0;i<inputs.length;i++){
		if(!inputs[i].value){
			//window.alert("Please fill all the input fields Correctly");
			inputs[i].style.border='2px solid red';
			flag = false;
		}else{
			inputs[i].style.border='0px';
		}
	}
	return flag;
}

function checkPassword(form){
	if(form.password.value == ""){
 		window.alert("Please Enter Password");
 		return false;

	} else if(form.password.value.length < 4){
 		window.alert("Password should be at least 4 character");
 		return false;
	}
	if(form.password_confirm.value == ""){
 		window.alert("Please Re-Type Password");
 		return false;
 
	}else if(form.password.value != form.password_confirm.value){
 		window.alert("The Password and verified password does not match!");
 		return false;
	}	
	return true;
}
