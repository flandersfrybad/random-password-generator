let characters = [
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+','1','2','3','4','5','6','7','8','9'
    ]

function generatePassword() {
    let passwordLength = document.getElementById("count").value
    let passwordArray = []
    for (let j = 0; j < 4; j++) {
        let potentialPassword = ""
        for (let i = 0; i < passwordLength; i++ ) {
            let index = (Math.floor(Math.random() * characters.length))
            potentialPassword += characters[index]  
        }
    passwordArray.push(potentialPassword)        
    }
    const passwordContainer = document.getElementById("password-container");
    passwordContainer.innerHTML = ""; // Clear previous passwords
    
    for (let k = 0; k < 4; k++) {
        const passwordDiv = document.createElement("div");
        passwordDiv.className = "password";
        passwordDiv.textContent = passwordArray[k];
        passwordDiv.addEventListener("click", function() {
            copyToClipboard(passwordArray[k]);
        });
        passwordContainer.appendChild(passwordDiv);
    }
}
function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Password copied to clipboard: " + text);
}


