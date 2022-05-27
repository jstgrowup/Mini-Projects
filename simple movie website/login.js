var logindata = JSON.parse(localStorage.getItem("userdatafromsignup"));
document.querySelector("#signupID").addEventListener("submit", loginfun);
function loginfun() {
  event.preventDefault();
  var userlogindata = {
    mail: signupID.idmail.value,
    pass: signupID.idpass.value,
  };
  if (logindata === null) {
    alert("signup first");
    window.location.href = "signup.html";
  } else if (
    logindata.mail === userlogindata.mail &&
    logindata.pass === userlogindata.pass
  ) {
    alert("login successful");
    // we need the username
    localStorage.setItem("maiduserdata", JSON.stringify(logindata));
    window.location.href = "index.html";
  } else {
    alert("wrong password");
  }
}
