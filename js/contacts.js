const form = document.getElementById('myform');

        
//----------------------------------
// function output(name) {
//     const inputElement = document.querySelector("input.name");
//     const inputValue = inputElement.value;
//     console.log(inputValue);
// }

//----------------------------------
function showMessage(input, message, type) {
// get the small element and set the message
    const msg = input.parentNode.querySelector("span");
    msg.innerText = message;
}

//----------------------------------
function hasValue(name) {
    const element = form.elements[name];
    if (element.value.trim().length === 0) {
        showMessage(element, "Field required")
    } else {
        console.log(element.value);
    }
}

//----------------------------------
function cleanMessage() {
    const msg = Array.from(document.getElementsByClassName("form-message"))

    msg.forEach(item => {
        item.innerText = ""
    })
}
// form.onclick = function(){
//     // const inputElement = document.getElementsByTagName("input");
//     // const inputValue = inputElement.value;
//     // alert(inputValue);
//     console.log("abc");
// };

//----------------------------------
function resetForm() {
    form.reset();  // Reset all form data
    return false; // ngan lam moi trang
}

// ----------------------------------
form.addEventListener("submit", function (event) {
    event.preventDefault();
    cleanMessage();
    hasValue("form-name");
    hasValue("form-email");
    hasValue("form-comment");
    hasValue("email-footer");
    
    // output("form-name");
    // output("form-email");
    // output("form-comment");
    
//    resetForm();
}) 