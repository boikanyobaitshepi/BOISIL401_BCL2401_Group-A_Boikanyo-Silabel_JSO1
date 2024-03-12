function validateSyntax() {
    let input = document.getElementById('petInput').value.trim();
    let regex = /^pet_\d+[a-zA -Z]+$/;
    let isValid = regex.test(petinput);

    // Validation logic goes here

    let resultElement= document.getElementById("result"); // Placeholder for validation result

    if (isValid) {
        resultElement.innerHTML = "Valid Syntax." + '<span style = "color: green; font-size: 60px;">&#x25cf;</span>';
    }else{
        resultElement.innerHTML = "Invalid Syntax." + '<span style = "color: red; font-size: 60px;">&#x25cf;</span>';
    }
}
            


