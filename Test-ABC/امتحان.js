const questionContainer = document.getElementById('question-container');

let fois = 0;
let alphabet;

var questionsCorrect = localStorage.getItem('questionsCorrect');
var questionsIncorrect = localStorage.getItem('questionsIncorrect');
console.log(questionsCorrect);
if (questionsCorrect === null || questionsCorrect == 0) {
  questionsCorrect = 0;
  questionsIncorrect = 0;
  localStorage.setItem('questionsIncorrect', questionsIncorrect);
  localStorage.setItem('questionsCorrect', questionsCorrect);
  document.getElementById("élémentPourcentage").innerText = "%";
} else {
  total = parseInt(localStorage.getItem('questionsIncorrect'))+parseInt(localStorage.getItem('questionsCorrect'));
  PourcentageCorrect = 100*(localStorage.getItem('questionsCorrect')/total);
  document.getElementById("élémentPourcentage").innerText = parseInt(PourcentageCorrect) + "% ✅";
}

console.log(questionsCorrect);


document.getElementById('élémentIncorrect').textContent = "❌: " + questionsIncorrect;
document.getElementById('élémentCorrect').textContent = "✅: " + questionsCorrect;
localStorage.setItem('questionsCorrect', questionsCorrect++);
localStorage.setItem('questionsIncorrect', questionsIncorrect++);


function changeTitle(newTitle) {
  document.title = newTitle;
  document.querySelector('h1').textContent = newTitle;
  //document.getElementById('start-button').textContent = nouvelleBouton;
}



document.getElementById('language-select').addEventListener('change', () => {
    if (languageSelect.value != "select") {
        currentLanguage = document.getElementById('language-select').value;
        decideLang();
        console.log('hi')
            questionContainer.style.display = 'block';
            correctAnswer = displayQuestion();
    }
    console.log('hi')
    
});

const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function() {
  questionContainer.style.display = 'block';
  correctAnswer = displayQuestion(); 
  startButton.style.visibility = 'hidden';
});

function reappearButton() {
  startButton.style.visibility = 'visible';
}
        

const languageSelect = document.getElementById('language-select');
const loadingIcon = document.getElementById('loading');
fois=0
let currentLanguage = (navigator.language || navigator.userLanguage).slice(0, 2);
console.log(currentLanguage);
let en = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let es = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let fr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "À", "Â", "Æ", "Ç", "É", "È", "Ê", "Ë", "Î", "Ï", "Ô", "Ù", "Û", "Ü"]
let de = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Ö', 'Ü', 'ß'];
let vn = ['A', 'À', 'Á', 'Ả', 'Ã', 'Ạ','Â', 'Ầ', 'Ấ', 'Ẩ', 'Ẫ', 'Ậ','Ê', 'Ề', 'Ế', 'Ể', 'Ễ', 'Ệ','I', 'Ì', 'Í', 'Ỉ', 'Ĩ', 'Ị','O', 'Ò', 'Ó', 'Ỏ', 'Õ', 'Ọ','Ô', 'Ồ', 'Ố', 'Ổ', 'Ỗ', 'Ộ','Ơ', 'Ờ', 'Ớ', 'Ở', 'Ỡ', 'Ợ','U', 'Ù', 'Ú', 'Ủ', 'Ũ', 'Ụ','Ư', 'Ừ', 'Ứ', 'Ử', 'Ữ', 'Ự','Y', 'Ỳ', 'Ý', 'Ỷ', 'Ỹ', 'Ỵ'];
let ar = [ "خ", "ح", "ج", "ث", "ت", "ب", "ا", "ص", "ش", "س", "ز", "ر", "ذ", "د", "ق", "ف", "غ", "ع", "ظ", "ط", "ض", "ي", "و", "ه", "ن", "م", "ل", "ك", ];


function decideLang() {
  fois=0
  console.log(fois)
  if (currentLanguage == "en") {
    alphabet=en;
    changeTitle('ABC Test!')
  } else if (currentLanguage == "fr") {
    alphabet=fr;
    changeTitle('Test ABC!')
  } else if (currentLanguage == "es") {
    alphabet=es
    changeTitle('Prueba ABC!')
  } else if (currentLanguage == "ar") {
    alphabet=ar;
    changeTitle('!امتحان ا ب ت')
  } else {
    alert("Device language unsupported. Default to English.");
    currentLanguage="en";
    alphabet=en;
  }
}
decideLang()

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text.toLowerCase());
    utterance.lang=currentLanguage;
    speechSynthesis.speak(utterance);
}

languageSelect.addEventListener('change', () => {
  if (languageSelect.value != "select") {
	  currentLanguage = languageSelect.value;
    console.log(currentLanguage)
	}
});

function getRandomString() {
  const index = Math.floor(Math.random() * alphabet.length);
  return alphabet[index];
}

function displayQuestion() {
  const correctIndex = Math.floor(Math.random() * 4);
  const answers = [];
  for (let i = 0; i < 4; i++) {
    let answer;
    do {
      answer = getRandomString();
    } while (answers.includes(answer));
      answers.push(answer);
  }
  const correctAnswer = answers[correctIndex];
  console.log(correctAnswer);
  speak(correctAnswer)
  document.getElementById('sound-button').textContent = `🔊`;
  for (let i = 0; i < 4; i++) {
    document.getElementsByClassName('answer-button')[i].textContent = answers[i];
  }
  return correctAnswer;
}

function playSound(sound) {
	const audioElement = new Audio(sound);
	audioElement.play();
}

let correctAnswer = displayQuestion;

document.getElementById('sound-button').addEventListener('click', function() {
  speak(correctAnswer);
});

function checkAnswer(index) {
  if (document.getElementsByClassName('answer-button')[index].textContent === correctAnswer) {
    playSound('/Test-ABC/sons/correct.mp3')
    localStorage.setItem('questionsCorrect', questionsCorrect++);
    document.getElementById('élémentCorrect').textContent = "✅: " + localStorage.getItem('questionsCorrect');
    document.getElementById('modal-text').textContent = '✅';
    showModal();
    setTimeout(() => {
      correctAnswer = displayQuestion();
      hideModal();
    }, 400);
  } else {
	  playSound('/Test-ABC/sons/incorrect.mp3')
    localStorage.setItem('questionsIncorrect', questionsIncorrect++);
    document.getElementById('élémentIncorrect').textContent = "❌: " + localStorage.getItem('questionsIncorrect');
    document.getElementById('modal-text').textContent = '❌';
    showModal();
    speak(correctAnswer)
      setTimeout(() => {
      hideModal();
    }, 600);
  }
  total = parseInt(localStorage.getItem('questionsIncorrect'))+parseInt(localStorage.getItem('questionsCorrect'));
  PourcentageCorrect = 100*(localStorage.getItem('questionsCorrect')/total);
  document.getElementById("élémentPourcentage").innerText = parseInt(PourcentageCorrect) + "% ✅";
}

function showModal() {
  document.getElementById('modal').style.display = 'block';
}

function hideModal() {
  document.getElementById('modal').style.display = 'none';
}
