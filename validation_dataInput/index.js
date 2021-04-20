const regex = /^CODE-/;

let inputCode = document.getElementById('code');
let resultatInputCode = document.getElementById('code-validation');
let buttonVerifier = document.getElementById('submit-btn');
let test = document.getElementById('test');




inputCode.addEventListener('input', function(event) {
  if (!regex.test(inputCode.value)) {
    resultatInputCode.textContent = "SAISSIR CODE CORRECT";  
    buttonVerifier.setAttribute("disabled","true");
  } else {
    resultatInputCode.textContent = "VALLIDER";
    buttonVerifier.removeAttribute("disabled");
  }
});