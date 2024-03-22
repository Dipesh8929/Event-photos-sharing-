function validateForm(event) {
    event.preventDefault();

    var eventname = document.forms["createevent"]["eventname"].value;
    var date = document.forms["createevent"]["date"].value;
    var location = document.forms["createevent"]["location"].value;
    var type = document.forms["createevent"]["type"].value;

    if (eventname == "" || date == "" || location == "" ||type == "") {
        alert("Please fill out all fields");
        return false;
    }

    event.target.submit();
}
