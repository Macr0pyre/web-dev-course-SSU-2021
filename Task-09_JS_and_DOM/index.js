import formulaPowOfSum from "./functions/Formula.js"
import generatePassword from "./functions/Password_generator.js"
import countVowels from "./functions/Vowels_count.js"

document.querySelector(".counter-execute-button").onclick = function() {
    document.querySelector(".counter-result").textContent = "Число гласных в строке: " + countVowels(document.getElementById("counter-input").value);
}

document.querySelector(".formula-execute-button").onclick = function() {
    document.querySelector(".formula-result").textContent = formulaPowOfSum(parseInt(document.getElementById("formula-input").value));
}

document.querySelector(".generator-execute-button").onclick = function() {
    document.querySelector(".generator-result").textContent = generatePassword();
}

document.querySelector(".counter-reset-button").onclick = function() {
    document.getElementById("counter-input").value = "";
    document.querySelector(".counter-result").textContent = " ";
}

document.querySelector(".formula-reset-button").onclick = function() {
    document.getElementById("formula-input").value = "";
    document.querySelector(".formula-result").textContent = " ";
}

document.querySelector(".generator-reset-button").onclick = function() {
    document.querySelector(".generator-result").textContent = " ";
}