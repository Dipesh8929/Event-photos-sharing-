function validateForm(event) {
    event.preventDefault();
    
     var username = document.forms["loginpage"]["username"].value;
     var password = document.forms["loginpage"]["password"].value;

     if (username == "") {
        alert("Username must be filled out");
        return false;
     }
     if (password == "") {
        alert("Password must be filled out");
        return false;
     }
     else event.target.submit();
  }