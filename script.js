const form =document.getElementById('#registration-form');
const userNameEl = document.getElementById('#username');
const emailEl = document.getElementById('#email');
const passWordEl = document.getElementById('#password');
const feedBack= document.getElementById('#form-feedback');
const submit= document.getElementById('#submit');

//check user name
 const checkUsername=()=>{
  let valid = false;
  const min = 3;
const max = 25 ;
const username = userNameEl.value.trim();
if(!isRequired(username)){
    showError(userNameEl, 'username is not valid');
    
}else if (!isnameValid(username.length, min, max)){
    showError(username, 'username must be between ${min} and ${max}')
}else {
    showSucces(userNameEl);
    valid= true
}
return valid
 }
 //check email
  const checkEmail=()=>{
    let valid = false;
    const email = emailEl.value.trim();
    if(!isRequired(email)){
        showError(emailEl, 'email can not be blank.')
    }else if (!isEmailValid(email)){
        showError(emailEl, 'email is not valid.')
    }else {
        showSucces(emailEl);
        valid= true;
    }
    return valid;
 }
 //chech password
 const checkPassword =()=> {
    let valid= false;
    const passWord= passWordEl.value.trim();
    if (!isRequired(passWord)){
        showError(passWordEl,' passWord can not be blank')
    }else if (isPasswordValid(passWord)){
        showError(emailEl,'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)' );
    }else {
        showSucces(passWord);
        valid= true;
    }
    return valid;
 }


 const isRequired = value => value===''? false: true;
const isEmailValid= (email)=>{
      const reValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return reValid.test(email)
}
const isnameValid = (length, min, max)=> length >=min && length <=max;

const isPasswordValid = (passWord)=>{
    const rePassWord = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
     return rePassWord(passWord)
}
 
const  showError = (msg)=> {
    feedBack.classList.remove('success') ;
    feedBack.classList.add('error');
    feedBack.style.color='  #dc3545';
   
    error.textContent = msg
 }
const  showSucces = (msg)=> {
    feedBack.classList.remove('success') ;
    feedBack.classList.add('error');
    feedBack.style.color='#28a745';
   
    error.textContent = msg
 }

form.addEventListener('submit',function(e){
    e.preventDefault();

    let isnameValid= checkUsername(),
        isEmailValid= checkEmail(),
        isPasswordValid= checkPassword();
        
    let isformValid = isnameValid && 
    isEmailValid &&
    isPasswordValid;
    if(isformValid){

    }

})








 
 