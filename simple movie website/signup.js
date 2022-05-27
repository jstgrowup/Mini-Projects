document.querySelector("#signupID").addEventListener("submit",signfun)
function signfun(){
    event.preventDefault()
    var signobj={
        name:signupID.idname.value,
        mail:signupID.idmail.value,
        number:signupID.idnumber.value,
        pass:signupID.idpass.value,
    }
    localStorage.setItem("userdatafromsignup",JSON.stringify(signobj))
    window.location.href="login.html";

}