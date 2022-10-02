const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {

    const emailElem = event.target.elements.email;
    const passElem = event.target.elements.password;
  
    event.preventDefault();
    if(emailElem.value !=="" && passElem.value !=="") {

    const formData = new FormData(event.target);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
        
        console.log(data);
        
        emailElem.style.borderColor = "";
        passElem.style.borderColor = "";
    } else {
        emailElem.style.borderColor = "red";
        passElem.style.borderColor = "red";

    }
    document.querySelector(".login-form").reset();
    
});


