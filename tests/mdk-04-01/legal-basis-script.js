const questions = [
  {
    question: "При постановке очистительной клизмы медицинская сестра должна",
    answers: [
      { text: "Вызвать дежурного врача", isCorrect: false },
      { text: "Получить согласие пациента на проведение манипуляции", isCorrect: true },
      { text: "Получить согласие лечащего врача", isCorrect: false },
      { text: "Не предупреждать пациента о манипуляции", isCorrect: false }
    ],
  },
  {
    question: "Документ, являющийся главным нормативным актом рф в системе здравоохранения, это",
    answers: [
      { text: "Приказ МЗ СССР от 23.09.1981 г. №1000 «О мерах по совершенствованию организации работы амбулаторно-поликлинических учреждений»", isCorrect: false },
      { text: "Приказ Минздрава России от 03.02.2015 г. № 36-н «Об утверждении Порядка проведения диспансеризации определенных групп взрослого населения»", isCorrect: false },
      { text: "Федеральный Закон от 29.11.2011 г. № 323-ФЗ «Об основах охраны здоровья граждан в Российской Федерации»", isCorrect: true },
      { text: "Конституция Российской Федерации", isCorrect: false }
    ],
  },
  {
    question: "Медицинская сестра должна проводить оценку эффективности и качества ухода за пациентом",
    answers: [
      { text: "При каждом контакте", isCorrect: true },
      { text: "В начале и в конце смены", isCorrect: false },
      { text: "Строго каждый час", isCorrect: false },
      { text: "В день выписки пациента", isCorrect: false }
    ],
  },
  {
    question: "К ятрогенным относятся заболевания",
    answers: [
      { text: "С неблагоприятным прогнозом", isCorrect: false },
      { text: "Обусловленные вредными факторами производства", isCorrect: false },
      { text: "Наследственного генеза", isCorrect: false },
      { text: "Обусловленные неосторожными действиями или высказываниями медицинских работников", isCorrect: true }
    ],
  },
  {
    question: "Запрещается в присутствии пациентов",
    answers: [
      { text: "Быть приветливой", isCorrect: false },
      { text: "Обсуждать поставленный диагноз, план лечения, говорить о заболеваниях соседей по палате", isCorrect: true },
      { text: "Быть вежливой", isCorrect: false },
      { text: "Разъяснять в доступной форме значение, смысл и необходимость обследований", isCorrect: false }
    ],
  },
  {
    question: "Вмешательство в сферу здоровья человека может осуществляться на основании",
    answers: [
      { text: "Извлечения финансовой выгоды", isCorrect: false },
      { text: "Медицинских показаний", isCorrect: false },
      { text: "Свободного, осознанного и информированного согласия пациента", isCorrect: true },
      { text: "Требования родственников", isCorrect: false }
    ],
  },
  {
    question: "Согласие на медицинское вмешательство оформляется",
    answers: [
      { text: "В форме гражданско-правового договора", isCorrect: false },
      { text: "В нотариальной форме", isCorrect: false },
      { text: "Только в присутствии адвоката", isCorrect: false },
      { text: "В письменной форме", isCorrect: true }
    ],
  },
  {
    question: "Одним из основных принципов охраны здоровья, согласно фз рф от 21.11.2011 n 323-фз «об основах охраны здоровья граждан в российской федерации», является",
    answers: [
      { text: "Соблюдение прав и обеспечение государственных гарантий", isCorrect: true },
      { text: "Медицинское страхование граждан", isCorrect: false },
      { text: "Государственное управление здравоохранением", isCorrect: false },
      { text: "Муниципальное управление здравоохранением", isCorrect: false }
    ],
  },
  {
    question: "Врачебную тайну составляет информация",
    answers: [
      { text: "О диагнозе и лечении", isCorrect: false },
      { text: "Об обращении и заболевании", isCorrect: false },
      { text: "О прогнозе и исходе болезни", isCorrect: false },
      { text: "Вся, содержащаяся в медицинской документации гражданина", isCorrect: true }
    ],
  },
  {
    question: "К ятрогенным относятся заболевания, обусловленные",
    answers: [
      { text: "Неосторожными действиями или высказываниями медицинских работников", isCorrect: true },
      { text: "Вредными факторами внешней среды", isCorrect: false },
      { text: "Вредными факторами производства", isCorrect: false },
      { text: "Наследственными факторами", isCorrect: false }
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