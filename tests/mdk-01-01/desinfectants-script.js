const questions = [
  {
    question: "При положительной азопирамовой пробе (наличие крови) появляется окрашивание",
    answers: [
      { text: "Розовое", isCorrect: false },
      { text: "Бурое", isCorrect: false },
      { text: "Сине-фиолетовое", isCorrect: true },
      { text: "Сине-зеленое", isCorrect: false }
    ],
  },
  {
    question: "При выявлении инфекционного заболевания экстренное извещение направляют в",
    answers: [
      { text: "Родственникам пациента", isCorrect: false },
      { text: "Миграционную службу", isCorrect: false },
      { text: "Отделение полиции", isCorrect: false },
      { text: "Роспотребнадзор", isCorrect: true }
    ],
  },
  {
    question: "Централизованная дезинфекция медицинских отходов класса б происходит",
    answers: [
      { text: "На месте образования отходов", isCorrect: false },
      { text: "За пределами территории учреждения здравоохранения", isCorrect: true },
      { text: "В специальных помещениях лечебного отделения", isCorrect: false },
      { text: "На территории учреждения здравоохранения", isCorrect: false }
    ],
  },
  {
    question: "Вывоз и обезвреживание отходов класса д осуществляется",
    answers: [
      { text: "Организациями по обращению с радиоактивными отходами", isCorrect: true },
      { text: "Организациями по обращению с промышленными отходами", isCorrect: false },
      { text: "Организациями по обращению с токсикологически опасными отходами", isCorrect: false },
      { text: "Организациями по обращению с бытовыми отходами", isCorrect: false }
    ],
  },
  {
    question: "Тело умершего пациента транспортируют в",
    answers: [
      { text: "Реанимационное отделение", isCorrect: false },
      { text: "Терапевтическое отделение", isCorrect: false },
      { text: "Патологоанатомическое отделение", isCorrect: true },
      { text: "Приемное отделение", isCorrect: false }
    ],
  },
  {
    question: "Объем санитарной обработки пациента определяет",
    answers: [
      { text: "Персонал санпропускника", isCorrect: false },
      { text: "Медицинская сестра смотрового кабинета", isCorrect: false },
      { text: "Медицинская сестра приемного отделения", isCorrect: false },
      { text: "Врач приемного отделения", isCorrect: true }
    ],
  },
  {
    question: "Полное уничтожение микроорганизмов и их спор",
    answers: [
      { text: "Стерилизация", isCorrect: true },
      { text: "Дезинфекция", isCorrect: false },
      { text: "Демеркуризация", isCorrect: false },
      { text: "Дезинсекция", isCorrect: false }
    ],
  },
  {
    question: "Дезинфекция, проводимая в очаге после удаления из него источника инфекции",
    answers: [
      { text: "Профилактическая", isCorrect: false },
      { text: "Текущая", isCorrect: false },
      { text: "Заключительная", isCorrect: true },
      { text: "Очаговая", isCorrect: false }
    ],
  },
  {
    question: "К механическому способу дезинфекции относится",
    answers: [
      { text: "Влажная уборка помещений", isCorrect: true },
      { text: "Использование формалина", isCorrect: false },
      { text: "Кипячение", isCorrect: false },
      { text: "Ультрафиолетовое облучение", isCorrect: false }
    ],
  },
  {
    question: "К химическому способу дезинфекции относится",
    answers: [
      { text: "Ультрафиолетовое облучение", isCorrect: false },
      { text: "Фильтрация воздуха", isCorrect: false },
      { text: "Использование формалина", isCorrect: true },
      { text: "Влажная уборка помещений", isCorrect: false }
    ],

 }
];

let total = 0
let currentQuestionIndex = 0;

let timeLeft = 600;
const timerElement = document.getElementById('timer');

const testTimer = setInterval(function() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  if (seconds < 10) {seconds = '0' + seconds;}
  if (minutes < 10) {minutes = '0' + minutes;}

  timerElement.innerText = minutes + ':' + seconds;
  timeLeft -= 1;

  if (timeLeft < 10) {timerElement.style.color = 'red';};
  if (timeLeft < 0) {
    clearInterval(testTimer);
    document.getElementById('test-area').classList.add('hidden');
    document.getElementById('finish-area').classList.remove('hidden');
    document.getElementById('finish-text').innerHTML = `
      <ul>
        <li>Время вышло.</li>
        <li>Ваш балл: ${total}</li>
      </ul>
    `;
  };
}, 1000);


function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  document.getElementById('progress-step').innerText = `Задача ${currentQuestionIndex + 1} из ${totalQuestions}`;
  document.getElementById('progress-percent').innerText = `${progressPercent}%`;

  document.getElementById('progress-fill').style.width = `${progressPercent}%`;
  document.getElementById('test-question').innerText = currentQuestion.question;

  const container = document.getElementById('answers-container');
  container.innerHTML = '';
  currentQuestion.answers.forEach((answer, index) => {
    container.innerHTML += `
      <label class="answer-item">
        <input type="radio" name="quiz-answer" value="${answer.isCorrect}">
        <span class="radio-custom"></span>
        <span class="answer-text">${answer.text}</span>
      </label>
    `;
  });
}


function checkAnswer() {
  const currentQuestion = questions[currentQuestionIndex];
  const selected = document.querySelector('input[name="quiz-answer"]:checked');
  if (!selected) {
    alert("Выберите вариант ответа!");
    return;
  }

  if (selected.value === 'true') {total += 1;};
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
  else {
    clearInterval(testTimer);
    timerElement.style.color = '#0D4764';
    document.getElementById('test-area').classList.add('hidden');
    document.getElementById('finish-area').classList.remove('hidden');
    document.getElementById('finish-text').innerHTML = `
      <ul>
        <li>Поздравляем! Вы прошли тест.</li>
        <li>Ваш балл: ${total}</li>
      </ul>
    `;
  }
}


document.getElementById('finish-area').classList.add('hidden');
renderQuestion();


document.getElementById('forward-btn').addEventListener('click', function() {
  checkAnswer();
  nextQuestion();
});

document.getElementById('quit-btn').addEventListener('click', function() {
  total = 0;
  currentQuestionIndex = 0;
  window.location.href = 'mdk-main.html';
});