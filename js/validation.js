function validateRequired(value){
  return value !== '';
}

function validatePhone(value){
return value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
}

function validateEmail(value){
  return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

function validate() {
  var form = document.getElementsByTagName("form")[0],
      emailInput = document.getElementsByName("email")[0],
      phoneInput = document.getElementsByName("phone")[0],
      titleInput = document.getElementsByName("title")[0],
      messageInput = document.getElementsByName("messsage")[0];
  form.addEventListener('submit', function(e){
    e.preventDefault();

    var emailValid = validateEmail(emailInput.value),
        phoneValid = !validateRequired(emailInput.value) || validatePhone(phoneInput.value),
        titleValid = validateRequired(titleInput.value),
        messageValid = validateRequired(messageInput.value);

    var emailField = emailInput.closest(".field");
    if (emailValid) {
      emailField.className = "field";
    } else {
      emailField.className = "field error";
    }
    var phoneField = phoneInput.closest(".field");
    if (phoneValid) {
      phoneField.className = "field";
    } else {
      phoneField.className = "field error";
    }
    var titleField = titleInput.closest(".field");
    if (titleValid) {
      titleField.className = "field";
    } else {
      titleField.className = "field error";
    }
    var messageField = messageInput.closest(".field");
    if (messageValid) {
      messageField.className = "field";
    } else {
      messageField.className = "field error";
    }
  }, false)
}

validate();
