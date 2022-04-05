const Names = document.querySelectorAll(".name");
const Emails = document.querySelectorAll(".email");
const Passwords = document.querySelectorAll(".password");
const ReEnterPassword = document.querySelector(".ReEnterpassword")
const input = document.querySelector("input");
const submitBtns = document.querySelectorAll(".submit");
const container_2 = document.querySelector(".container-2 .password")

submitBtns.forEach(function(submitBtn){
  submitBtn.addEventListener( "click" , function(){
    console.log("hi there");
    checkValue()
  })
})



function checkValue(){
  Names.forEach(function(Name){
    const nameValue = Name.value;

    if(nameValue === ""){
      errorMessage(Name,"User Name Cann't be empty")
    }else{
      successMessage(Name)
    }
  })
  
  Emails.forEach(function(Email){
    const emailValue = Email.value;

    if(emailValue === ""){
      errorMessage(Email, "Email Cann't be empty")
     }else if(!emailIsValid(emailValue)){
       errorMessage(Email, "Email isn't valid")
     }else{
      successMessage(Email)
  }
  })

  Passwords.forEach(function(Password){
    const passwordValue = Password.value;

    if(passwordValue === ""){
      errorMessage(Password, "Password Cann't be empty")
  }else{
      successMessage(Password)
  }

  if(!passwordValue.match(/[A-Z]/)){
    errorMessage(Password , "Password must contains capital letters")
  }

  if(!passwordValue.match(/[A-Z]/) && passwordValue.length < 6){
    errorMessage(Password , "Password must contains capital letters, and longer than 6 character")
  }

  if(passwordValue.match(/[A-Z]/) && passwordValue.length < 6){
    errorMessage(Password , "Password must be longer than 6 character")
  }

   if(!passwordValue.match(/[A-Z]/) && passwordValue.length > 15){
    errorMessage(Password , "Password must contains capital letters, and less than 15 character")
  }

  if(passwordValue.match(/[A-Z]/) && passwordValue.length > 15){
    errorMessage(Password , "Password must be less than 15 character")
  }
  })


  const ReEnterPasswordValue = ReEnterPassword.value;
  const lolValue = container_2.value;
  console.log(lolValue);
  if(ReEnterPasswordValue === ""){
    errorMessage(ReEnterPassword , "ReEnter the password cann't be empty")
  }else if(ReEnterPasswordValue !== lolValue){
    errorMessage(ReEnterPassword , "must be the same value as the original paswword")
  }
  else{
    successMessage(ReEnterPassword);
  }






}

function errorMessage(input,message){
    const formFloating = input.parentElement;
    const small = formFloating.querySelector("small");
    small.innerText = message;
    formFloating.classList.add("error")
}
function successMessage(input){
    const formFloating = input.parentElement;
    formFloating.classList.remove("error");
    formFloating.classList.add("success")
}

function emailIsValid(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//show and hide password
const showHide = document.querySelectorAll(".show-hide");
const showPassword = document.querySelector(".bi-eye-slash-fill");
const hidePassword = document.querySelector(".bi-eye-fill")
showHide.forEach(function(i){
    const passwordInput = document.getElementById("Password");
    i.addEventListener("click" , function(){
        if(passwordInput.type === "password"){
            passwordInput.type = "text";
            showPassword.style.display = "none";
            hidePassword.style.display = "block";
        }else{
            passwordInput.type = "password";
            showPassword.style.display = "block";
            hidePassword.style.display = "none";
        }
    })
})    

const container2ShowHide = document.querySelectorAll(".container-2 .Password .show-hide");
const container2ShowPassword = document.querySelector(".container-2 .Password .bi-eye-slash-fill");
const container2HidePassword = document.querySelector(".container-2 .Password .bi-eye-fill");
const container2ShowHideRe = document.querySelectorAll(".container-2 .reEnterpassword .show-hide");
const container2ShowRePassword = document.querySelector(".container-2 .reEnterpassword .bi-eye-slash-fill");
const container2HidRePassword = document.querySelector(".container-2 .reEnterpassword .bi-eye-fill")
container2ShowHide.forEach(function(i){
  const c2passwordInput = document.querySelector(".container-2 #Password");
  const ReRightpasswordInput = document.querySelector(".container-2 .ReEnterpassword");
  i.addEventListener("click" , function(){
    console.log(ReRightpasswordInput.value);
    if(c2passwordInput.type === "password"){
      c2passwordInput.type = "text";
      container2ShowPassword.style.display = "none";
      container2HidePassword.style.display = "block";
    }else{
      c2passwordInput.type = "password";
      container2ShowPassword.style.display = "block";
      container2HidePassword.style.display = "none";
    }
  })
})
container2ShowHideRe.forEach(function(i){
  const ReRightpasswordInput = document.querySelector(".container-2 .ReEnterpassword");
  i.addEventListener("click" , function(){
    console.log(ReRightpasswordInput.value);
    if(ReRightpasswordInput.type === "password"){
      ReRightpasswordInput.type = "text";
      container2ShowRePassword.style.display = "none";
      container2HidRePassword.style.display = "block";
    }else{
      ReRightpasswordInput.type = "password";
      container2ShowRePassword.style.display = "block";
      container2HidRePassword.style.display = "none";
    }
  })
})


/** form position */
const changeFormLogin = document.querySelector(".signUp");
const changeFormSignUp = document.querySelector(".login");
const container2 = document.querySelector(".container-2");
const container1 = document.querySelector(".container-1");
changeFormLogin.addEventListener("click" , ()=>{
  container2.style.transform  = "translate(-50% , -70%) translateY(0)";
  container1.style.transform  = "translate(-50% , -70%) translateX(-250%)";
})

changeFormSignUp.addEventListener("click" , ()=>{
  container2.style.transform  = "translate(-50% , -70%) translateY(-250%)";
  container1.style.transform  = "translate(-50% , -70%) translateX(0)";
})