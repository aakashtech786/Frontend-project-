const myform = document.getElementById("myform");
const submitBtn = document.getElementById("btn");

const ErrorText = document.getElementById("errorText");
const ErrorMail = document.getElementById("errormail");
const ErrorPassword = document.getElementById("errorpassword");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();


  if (validname() && validmail() && validpass()) {
    alert("Form Submitted successfully!");
    myform.reset();
    
  }

});

// -------- Name Validation --------
function validname() {
  const inputName = document.getElementById("name").value.trim();

  if (inputName === "") {
    ErrorText.innerText = "Name is required!";
    ErrorText.classList.add("color");
    return false;
  }
  if (!inputName.match(/^[A-Za-z]+\s+[A-Za-z]*$/)) {
    ErrorText.innerText = "Write Full Name!";
    ErrorText.classList.add("color");
    return false;
  }

  ErrorText.innerText = ""; // clear error
  return true;
}

// -------- Email Validation --------
function validmail() {
  const mailEl = document.getElementById("mail").value.trim();

  if (mailEl === "") {
    ErrorMail.innerText = "Email is required!";
    ErrorMail.classList.add("color");
    return false;
  }
  if(!mailEl.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})*$/)) {
    ErrorMail.innerText = "Enter Valid Email!";
    ErrorMail.classList.add("color");
    return false;
  }

  ErrorMail.innerText = "";
  return true;
}

// -------- Password Validation --------
function validpass() {
  const passwordEl = document.getElementById("password").value;

  if (passwordEl === "") {
    ErrorPassword.innerText = "Password is required!";
    ErrorPassword.classList.add("color");
    return false;
  }

  

  // FIX: negated regex check (!)
  if (!passwordEl.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,30}$/) ) {
    ErrorPassword.innerText =
      "Password must contain 1 Uppercase, 1 Lowercase, 1 Digit & 1 Special Character!";
    ErrorPassword.classList.add("color");
    return false;
  }

  ErrorPassword.innerText = "";
  return true;
 
}

