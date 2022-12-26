const btnDesEncryptar = document.querySelector("#btn-decryp")
const btnEncryptar = document.querySelector("#btn-encryp")
const encriptado = document.querySelector("#cifrado")

const stack = document.querySelector("#copyElement")
const copyButtom = document.querySelector("#button-papelera")
const principal_div = document.querySelector("#principal-text-div") /* div */


encriptado.addEventListener('input', function() {
    this.value = this.value.replace(/[^a-zA-Z0-9]/g, '') && this.value.toLowerCase();
  })


let message;

function getchangeText(e) {
    
     valorInput = e.target.value
    
    message = valorInput
    message.toLowerCase()
}


function encrypTex() {
        let clear = message.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").
        replace(/o/g, "ober").replace(/u/g, "ufat")
        stack.value = clear
        
        if(stack.classList.add("hidden")) {
            copyButtom.classList.add("hidden")
            stack.classList.add("hidden")
            principal_div.classList.remove("hidden")
            console.log("vacio")
        } else {
            copyButtom.classList.remove("hidden")
            stack.classList.remove("hidden")
           
            principal_div.classList.add("hidden")
        }
}


function desencrypMessage() {
    
    let clear = message.replace(/enter*/g, "e").replace(/imes*/g, "i").replace(/ai*/g, "a").
    replace(/ober*/g, "o").replace(/ufat*/g,"u")
    stack.value = clear
    
    if(stack.classList.add("hidden")) {
        copyButtom.classList.add("hidden")
        stack.classList.add("hidden")
        principal_div.classList.remove("hidden")
        console.log("vacio")
    } else {
        copyButtom.classList.remove("hidden")
        stack.classList.remove("hidden")
       
        principal_div.classList.add("hidden")
        console.log("hay contenido")
    }
    
}


function copyText() {
    stack.select();
    document.execCommand("copy");
}

encriptado.addEventListener("input", getchangeText)
btnEncryptar.addEventListener("click", encrypTex)
btnDesEncryptar.addEventListener("click", desencrypMessage)
copyButtom.addEventListener("click", copyText)


   