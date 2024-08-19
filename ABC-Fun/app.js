const languageSelect = document.getElementById('language-select');



function jouerLeSon(event) {
//window.speechSynthesis.cancel()

console.log(event.target.id);
const button = document.getElementById(event.target.id);

const utterance = new SpeechSynthesisUtterance(event.target.id);
utterance.lang = 'ar'; // Set the language to English (US)
button.classList.add('move-up');
setTimeout(() => {
    button.classList.remove('move-up');
}, 500);

utterance.onstart = () => {
    loadingIcon.style.display = 'none';
};
fois=fois+1

window.speechSynthesis.speak(utterance);

}

function checkOrientation() {
    // Check if the device is in portrait mode
    if (window.orientation === 0 || window.orientation === 180) {
        alert("دور الموبايل");
    }
}

    function activerLarabe() {
        // Define the HTML content to be copied
        const contentToCopy = `
        <div class="letter-row">
<button class="styled-button" id="ت">ت</button>
<button class="styled-button" id="ب">ب</button>
<button class="styled-button" id="ا">ا</button>
        </div>
        
        <div class="letter-row">

<button class="styled-button" id="ح">ح</button>
<button class="styled-button" id="ج">ج</button>
<button class="styled-button" id="ث">ث</button>

        </div>
        
        <div class="letter-row">

<button class="styled-button" id="ذ">ذ</button>
<button class="styled-button" id="د">د</button>
<button class="styled-button" id="خ">خ</button>
        </div>
                <div class="letter-row">

<button class="styled-button" id="س">س</button>
<button class="styled-button" id="ز">ز</button>
<button class="styled-button" id="ر">ر</button>
        </div>

        <div class="letter-row">
        <button class="styled-button" id="ض">ض</button>
        <button class="styled-button" id="ص">ص</button>

        <button class="styled-button" id="ش">ش</button>
        </div>
        
        <div class="letter-row">

        <button class="styled-button" id="ع">ع</button>
        <button class="styled-button" id="ظ">ظ</button>
                <button class="styled-button" id="ط">ط</button>

        </div>

        <div class="letter-row">

        <button class="styled-button" id="ق">ق</button>
        <button class="styled-button" id="ف">ف</button>
        <button class="styled-button" id="غ">غ</button>
        </div>
        
                <div class="letter-row">
        <button class="styled-button" id="م">م</button>
        <button class="styled-button" id="ل">ل</button>
        <button class="styled-button" id="ك">ك</button>
    </div>

                <div class="letter-row">
        <button class="styled-button" id="و">و</button>
        <button class="styled-button" id="ه">ه</button>
        <button class="styled-button" id="ن">ن</button>

    </div>
            <div class="letter-row">

            <button class="styled-button" id="ي">ي</button>
    </div>
        `;

        // Insert the copied content into the buttonContainer
        const buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.innerHTML = contentToCopy;
    }


let en = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let es = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let fr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "À", "Â", "Æ", "Ç", "É", "È", "Ê", "Ë", "Î", "Ï", "Ô", "Ù", "Û", "Ü"]
let de = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Ö', 'Ü', 'ß'];
let ar = [ "خ", "ح", "ج", "ث", "ت", "ب", "ا", "ص", "ش", "س", "ز", "ر", "ذ", "د", "ق", "ف", "غ", "ع", "ظ", "ط", "ض", "ي", "و", "ه", "ن", "م", "ل", "ك", ];

let currentLanguage = (navigator.language || navigator.userLanguage).slice(0, 2);
console.log(currentLanguage);
const loadingIcon = document.getElementById('loading');
fois=0

function decideLang() {
window.removeEventListener("orientationchange", checkOrientation);
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
} else if (currentLanguage == "ar") {
alphabet=ar;
window.addEventListener("orientationchange", checkOrientation);
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

    if (currentLanguage == "ar") {
    console.log("activation du mode arabe (de droit à gauche)")
    activerLarabe()
    const buttons = document.querySelectorAll('.container button');
buttons.forEach(button => {
console.log('hi')
console.log(button)
    button.addEventListener('click', jouerLeSon);
});
    } else {
	removeLetters()
	decideLang()
	packLetters()
	}
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





