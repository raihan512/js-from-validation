function formValidation(){
var name = document.getElementById('name');
var phone = document.getElementById('phone');
var user = document.getElementById('user');
var email = document.getElementById('email');
var password = document.getElementById('pass');
var confirmPass = document.getElementById('repass');

if(name.value == ''){
    document.getElementById('name_error').innerHTML = "Enter Your Name";
    name.focus();
    return false ;
}else{
    document.getElementById('name_error').innerHTML = "";
}
if(phone.value == ''){
    document.getElementById('phone_error').innerHTML = "Enter Your Number";
    phone.focus();
    return false ;
}else{
    document.getElementById('phone_error').innerHTML = "";

}
if(user.value == ''){
    document.getElementById('user_error').innerHTML = "Enter Your Username";
    user.focus();
    return false ;
}else{
    document.getElementById('user_error').innerHTML = "";
}
if(email.value == ''){
    document.getElementById('email_error').innerHTML = "Enter Your email"
    email.focus();
    return false ;
}else{
    document.getElementById('email_error').innerHTML = ""
}
if(password.value == ''){
    document.getElementById('pass_error').innerHTML = "Enter Your Password";
    password.focus();
    return false ;
}else if(password.value!=confirmPass.value){
    document.getElementById('pass_error').innerHTML = "Password Didn't Matched";
    password.focus();
    return false ;
}else{
    document.getElementById('pass_error').innerHTML = "";
}
if(confirmPass.value == ''){
    document.getElementById('repass_error').innerHTML = "Enter Your Confirm Password";
    confirmPass.focus();
    return false ;
}else{
    document.getElementById('repass_error').innerHTML = "";
}
}