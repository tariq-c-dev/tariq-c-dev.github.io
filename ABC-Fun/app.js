const languageSelect = document.getElementById('language-select');



let en = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let es = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let fr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "À", "Â", "Æ", "Ç", "É", "È", "Ê", "Ë", "Î", "Ï", "Ô", "Ù", "Û", "Ü"]
let de = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Ö', 'Ü', 'ß'];

let currentLanguage = (navigator.language || navigator.userLanguage).slice(0, 2);
console.log(currentLanguage);
const loadingIcon = document.getElementById('loading');
fois=0

function decideLang() {
fois=0
console.log(fois)
if (currentLanguage == "en") {
alphabet=en;
} else if (currentLanguage == "fr") {
alphabet=fr;
} else if (currentLanguage == "es") {
alphabet=es;
} else if (currentLanguage == "de") {
alphabet=de;
} else {
alert("Device language unsupported. Default to English.");
currentLanguage="en";
alphabet=en;
}

}
decideLang()

languageSelect.addEventListener('change', () => {
if (languageSelect.value != "select") {
	currentLanguage = languageSelect.value;
	decideLang()
	removeLetters()
	packLetters()
	}
});

function removeLetters() {
const myDiv = document.getElementById('buttonContainer');
myDiv.innerHTML = '';
}

function packLetters() {
alphabet.forEach(string => {
    const button = document.createElement('button');
    button.className = 'styled-button';
    button.textContent = string;
    button.id = string;
    button.onclick = () => playSound(string);
    buttonContainer.appendChild(button);
});
}
packLetters()



// Function to play sound
function playSound(key) {
window.speechSynthesis.cancel()
const button = document.getElementById(key);
console.log(key);
button.classList.add('move-up');
setTimeout(() => {
    button.classList.remove('move-up');
}, 500);

const utterance = new SpeechSynthesisUtterance(key.toLowerCase());
console.log(fois)
if (fois==0) {
loadingIcon.style.display = 'block';
}
utterance.lang = currentLanguage;

utterance.onstart = () => {
    loadingIcon.style.display = 'none';
};
fois=fois+1
window.speechSynthesis.speak(utterance);


}





