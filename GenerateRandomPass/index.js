let pass1El = document.getElementById("pass-1")
let pass2El = document.getElementById("pass-2")
let randomNumber
let passInput1El = document.getElementById("pass-1")
let passLengthEl = document.getElementById("pass-length")
let errorMessageEl = document.getElementById("error-message")
let wantNumbersEl = document.getElementById("wantNumbers").value
let isNumbers = true
let isSymbols = true

function generatePass() {
    let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
    let charNoNumbers = []
    let password1 = ""
    let password2 = ""
    if (passLengthEl.value >= 8 && passLengthEl.value <= 24) {
        for (let i = 0; i < passLengthEl.value; i++) {   
        if (isNumbers && isSymbols) {
            randomNumber1 = Math.floor(Math.random() * characters.length)
            randomNumber2 = Math.floor(Math.random() * characters.length)
            password1 += characters[randomNumber1]
            password2 += characters[randomNumber2]
            pass1El.textContent = password1
            pass2El.textContent = password2
            console.log("All")   
            } else if (isNumbers && !isSymbols) {
                let password1 = ""
                let password2 = ""
                for (let i = 62; i < characters.length; i++) {
                    characters.pop()
                }
                console.log(passLengthEl.value)
                for (let j = 0; j < passLengthEl.value; j++) {
                    randomNumber1 = Math.floor(Math.random() * characters.length)
                    randomNumber2 = Math.floor(Math.random() * characters.length)
                    password1 += characters[randomNumber1]
                    password2 += characters[randomNumber2]
                    pass1El.textContent = password1
                    pass2El.textContent = password2
                }
            } else if (!isNumbers && isSymbols) {
                let password1 = ""
                let password2 = ""
                for (let i = 0; i < characters.length; i++) {
                    if (i >= 0 &&  i < 52 || i >= 62 ) {
                      charNoNumbers.push(characters[i])  
                    } 
                }
                for (j = 0; j < passLengthEl.value; j++) {
                    randomNumber1 = Math.floor(Math.random() * charNoNumbers.length)
                    randomNumber2 = Math.floor(Math.random() * charNoNumbers.length)
                    password1 += charNoNumbers[randomNumber1]
                    password2 += charNoNumbers[randomNumber2]
                    pass1El.textContent = password1
                    pass2El.textContent = password2
                }
            } else {
                let password1 = ""
                let password2 = ""
                for (let i = 52; i < characters.length; i++) {
                    characters.pop()
                } 
                for (j = 0; j < passLengthEl.value; j++) {
                    randomNumber1 = Math.floor(Math.random() * characters.length)
                    randomNumber2 = Math.floor(Math.random() * characters.length)
                    password1 += characters[randomNumber1]
                    password2 += characters[randomNumber2]
                    pass1El.textContent = password1
                    pass2El.textContent = password2
                }
            }
        }
    }
    else if (passLengthEl.value < 8 ) {
        let message = "The password length is too small!"
        errorMessageEl.textContent = message
    } else if (passLengthEl.value > 24 ) {
        let message = "The password length is too big!"
        errorMessageEl.textContent = message
    }
} 

function copyText1() {
    let copyText = document.getElementById("pass-1");
    navigator.clipboard.writeText(copyText.textContent);
    alert("Copied the left password: " + copyText.textContent);
}


function copyText2() {
    let copyText = document.getElementById("pass-2");
    navigator.clipboard.writeText(copyText.textContent);
    alert("Copied the right password: " + copyText.textContent);
}

function wantsNumbers() {
    isNumbers = !isNumbers
    console.log(isNumbers)
}

function wantsSymbols() {
    isSymbols = !isSymbols
    console.log(isSymbols)
}

