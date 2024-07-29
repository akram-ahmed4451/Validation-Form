function validatetionForm() {
    let fname = document.forms["myForm"]["Firstname"].value;
    // console.log(fname);
    if (fname == "") {
      document.getElementById("fnameerror").innerHTML =
        "***Please fill the name box!";
      return false;
    } else if (fname.length < 3) {
      document.getElementById("fnameerror").innerHTML =
        "***Name length is too short!";
      return false;
    } else if (fname.length > 15) {
      document.getElementById("fnameerror").innerHTML =
        "***Name length is too long!";
      return false;
    } else {
      document.getElementById("fnameerror").innerHTML = "";
    }

    let lname = document.forms["myForm"]["lname"].value;
    // console.log(lname);
    if (lname == "") {
      document.getElementById("lnameerror").innerHTML =
        "***Please fill this box!";
      return false;
    } else if (lname.length < 3) {
      document.getElementById("lnameerror").innerHTML =
        "***Last name Length is too short!";
      return false;
    } else if (lname.length > 15) {
      document.getElementById("lnameerror").innerHTML =
        "***Last name length is too long!";
      return false;
    } else {
      document.getElementById("lnameerror").innerHTML = "";
    }

    let usernumber = document.forms["myForm"]["usernumber"].value;
    // console.log(usernumber);
    if (usernumber.length != 10) {
      document.getElementById("numbererror").innerHTML =
        "***Phone number should be 10 digits!";
      return false;
    } else {
      document.getElementById("numbererror").innerHTML = "";
    }

    let email = document.forms["myForm"]["useremail"].value;
    // console.log(email);
    
    if (email.length == "") {
      document.getElementById("emailerror").innerHTML =
        "***Please fill this box!";
      return false;
    } else if (email.length > 40) {
      document.getElementById("emailerror").innerHTML =
        "***Email address is too long!";
      return false;
    } else {
      document.getElementById("emailerror").innerHTML = "";
    }

    let password = document.forms["myForm"]["userpass"].value;
    let cpassword = document.forms["myForm"]["usercpass"].value;
    if (password == "") {
      document.getElementById("passerror").innerHTML =
        "***Please create password!";
      return false;
    } else if (password.length < 6) {
      document.getElementById("passerror").innerHTML =
        "***Password should 6 be character!";
      return false;
    } else if (password.length > 12) {
      document.getElementById("passerror").innerHTML =
        "***Password length is too long!";
      return false;
    } else {
      document.getElementById("passerror").innerHTML = "";
    }

    if (cpassword == "") {
      document.getElementById("cpasserror").innerHTML =
        "***Please give us to confirm password!";
      return false;
    } else if (password != cpassword) {
      document.getElementById("cpasserror").innerHTML =
        "***Confirm password is not match!";
      return false;
    } else {
      document.getElementById("cpasserror").innerHTML = "";
    }

    return false;
  }