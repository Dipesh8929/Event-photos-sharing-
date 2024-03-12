function validateForm(event) {
    event.preventDefault();

     var user = document.forms["forgotpage"]["user"].value;
     var mail = document.forms["forgotpage"]["mail"].value;
     
     if (user == "") {
        alert("please give a valid username");
        return false;
     }
     if (mail == "") {
        alert("please fill the recovery mail");
        return false;
     }
     else event.target.submit();
  }