function validateForm(event) {
    event.preventDefault();

    var name = document.forms["signup"]["name"].value;
    var password = document.forms["signup"]["password"].value;
    var phone = document.forms["signup"]["phone"].value;
    var mail = document.forms["signup"]["mail"].value;

    if (name == "" || password == "" || phone == "" || mail == "") {
        alert("Please fill out all fields");
        return false;
    }

    // Form is valid, submit it
    event.target.submit();
}