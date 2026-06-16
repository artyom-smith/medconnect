const questions = [
  {
    question: "При проведении внутривенной инъекции медицинская сестра должна",
    answers: [
      { text: "Не предупреждать пациента о манипуляции", isCorrect: false },
      { text: "Информировать пациента о ходе проведения манипуляции", isCorrect: true },
      { text: "Вызвать врача", isCorrect: false },
      { text: "Получить согласие старшей медицинской сестры на проведение манипуляции", isCorrect: false }
    ],
  },
  {
    question: "Согласие на медицинское вмешательство оформляется",
    answers: [
      { text: "В нотариальной форме", isCorrect: false },
      { text: "Только в присутствии адвоката", isCorrect: false },
      { text: "В форме гражданско-правового договора", isCorrect: false },
      { text: "В письменной форме", isCorrect: true }
    ],
  },
  {
    question: "Пульс чаще всего исследуют на",
    answers: [
      { text: "Лучевой и сонной артерии", isCorrect: true },
      { text: "Локтевой артерии и аорте", isCorrect: false },
      { text: "Подколенной артерии", isCorrect: false },
      { text: "Брюшной аорте и мозговой артерии", isCorrect: false }
    ],
  },
  {
    question: "Температуру тела у пациентов измеряют",
    answers: [
      { text: "Перед сном", isCorrect: false },
      { text: "Один раз в день с 12 до 13 часов", isCorrect: false },
      { text: "Утром натощак (7 до 9 час) и вечером (с 17 до 19 час)", isCorrect: true },
      { text: "Сразу после завтрака", isCorrect: false }
    ],
  },
  {
    question: "Температура тела 37,0º-37,9ºC",
    answers: [
      { text: "Фебрильная", isCorrect: false },
      { text: "Субфебрильная", isCorrect: true },
      { text: "Пиретическая", isCorrect: false },
      { text: "Гиперпиретическая", isCorrect: false }
    ],
  },
  {
    question: "Медицинский предмет, используемый для промывания глаз",
    answers: [
      { text: "Пробирка", isCorrect: false },
      { text: "Грушевидный баллончик", isCorrect: false },
      { text: "Шприц Жане", isCorrect: false },
      { text: "Ундинка", isCorrect: true }
    ],
  },
  {
    question: "Положение симса предполагает размещение пациента в постели",
    answers: [
      { text: "Промежуточное положение, между положением лёжа на боку и лёжа на животе", isCorrect: true },
      { text: "На боку, руки согнуты в локтевых суставах", isCorrect: false },
      { text: "Полусидя, с приподнятым изголовьем кровати под углом 25-30 градусов", isCorrect: false },
      { text: "Полулёжа, с приподнятым изголовьем кровати под углом 45-60 градусов", isCorrect: false }
    ],
  },
  {
    question: "Сестринские вмешательства во 2 периоде лихорадки",
    answers: [
      { text: "Холодный примочка, тёплые ножные ванны", isCorrect: false },
      { text: "Использование грелки к ногам, горячий чай", isCorrect: false },
      { text: "Применение жаропонижающих препаратов разных форм", isCorrect: false },
      { text: "Холодный компресс, обильное тёплое питьё", isCorrect: true }
    ],
  },
  {
    question: "Признаки 3-й стадии пролежней",
    answers: [
      { text: "Мацерация кожи", isCorrect: false },
      { text: "Покраснение кожи с синюшным оттенком", isCorrect: false },
      { text: "Образование пузырей и язв", isCorrect: true },
      { text: "Некроз кожи и подкожной клетчатки", isCorrect: false }
    ],
  },
  {
    question: "Признаком, характерным для экспираторной одышки, является",
    answers: [
      { text: "Затруднение вдоха и выдоха", isCorrect: false },
      { text: "Затруднение выдоха", isCorrect: true },
      { text: "Затруднение вдоха", isCorrect: false },
      { text: "Шумный вдох", isCorrect: false }
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