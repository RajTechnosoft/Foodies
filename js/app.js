let modalLoginForm = document.getElementById("modal-user-login-form");

// All functions functions
const clearLoginInput = function () {
  document.getElementById("LoginEmail").value = "";
  document.getElementById("LoginPwd").value = "";
};
const userAuth = function (LoginEmail, LoginPwd) {
  if (LoginEmail === "erajmishra000@gmail.com") {
    if (LoginPwd === "123") {
      alert("You Logged In Successfully");
      clearLoginInput();
      window.location.href = "pages/user/userDashboard.html";
    } else {
      alert("password is incorrect");
      clearLoginInput();
    }
  } else {
    alert("Email in incorrect");
    clearLoginInput();
  }
};
modalLoginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  var LoginEmail = document.getElementById("LoginEmail").value;
  var LoginPwd = document.getElementById("LoginPwd").value;
  userAuth(LoginEmail, LoginPwd);
  console.log(LoginEmail, LoginPwd);
});
