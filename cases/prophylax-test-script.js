const questions = [
  {
    title: "Определение факторов риска при диспансеризации",
    description: `В рамках профилактического медицинского осмотра, пациентка 42 лет, прошла 1 этап диспансеризации. В анамнезе повышение АД (диагноз не уточнен), остеохондроз поясничного отдела позвоночника.
Анкетирование – жалоб нет, курит, нерациональное питание, низкая физическая активность. Не принимает антигипертензивные препараты.
Объективно: ИМТ-35,2 кг/м, Пульс 74 удара в 1 минуту. АД-130/80 мм рт. ст. Лабораторные показатели: холестерин -5,2 ммоль/л, глюкоза 4,5 ммоль/л Рентгенологические исследования без патологии.
Диагноз: Ожирение 1 степени. Остеохондроз поясничного отдела позвоночника. По результатам I этапа диспансеризации направлена на - 2 этап диспансеризации.
Назначено: Контроль/самоконтроль АД.`,
    question: "Определите факторы риска.",
    answers: [
      { text: "артериальная гипертензия, курение, гиподинамия, нерациональное питание, холестеринемия, возраст", isCorrect: false },
      { text: "артериальная гипертензия, курение, гиподинамия, нерациональное питание, ожирение 1 степени, холестеринемия, возраст", isCorrect: true },
      { text: "артериальная гипертензия, курение, гиподинамия, нерациональное питание, ожирение 1 степени, холестеринемия, возраст, остеохондроз", isCorrect: false }
    ],
    comment: "Остеохондроз поясничного отдела — это заболевание, а заболевания не относятся к факторам риска. Так же, остеохондроз не входит в число 7 ведущих факторов риска и не относится к хроническим неинфекционным заболеваниям (ХНИЗ). В рамках диспансеризации он рассматривается как самостоятельное заболевание, но не как фактор риска.",
    remember_list: [
      "Возраст – относится к не модифицируемым факторам риска развития многих заболеваний и состояний из-за естественных физиологических изменений, которые происходят в организме с течением времени.",
      "Ожирение – является заболеванием, но относиться к факторам риска, т.к. ожирение напрямую вызывает или утяжеляет другие состояния. Например, в задаче у женщины ожирение - главная причина прогрессирования артериальной гипертензии (которая у неё в анамнезе)."
    ]
  },
  {
    title: "Определение факторов риска при диспансеризации",
    description: `В рамках профилактического медицинского осмотра, пациентка 42 лет, прошла 1 этап диспансеризации. В анамнезе повышение АД (диагноз не уточнен), остеохондроз поясничного отдела позвоночника.
Анкетирование – жалоб нет, курит, нерациональное питание, низкая физическая активность. Не принимает антигипертензивные препараты.
Объективно: ИМТ-35,2 кг/м, Пульс 74 удара в 1 минуту. АД-130/80 мм рт. ст. Лабораторные показатели: холестерин -5,2 ммоль/л, глюкоза 4,5 ммоль/л Рентгенологические исследования без патологии.
Диагноз: Ожирение 1 степени. Остеохондроз поясничного отдела позвоночника. По результатам I этапа диспансеризации направлена на - 2 этап диспансеризации.
Назначено: Контроль/самоконтроль АД.`,
    question: "Определите группу здоровья.",
    answers: [
      { text: "I", isCorrect: false },
      { text: "II", isCorrect: true },
      { text: "IIIa", isCorrect: false },
      { text: "IIIb", isCorrect: false }
    ],
    comment: "Согласно Порядку, ко II группе здоровья относятся граждане, у которых не установлены хронические неинфекционные заболевания (ХНИЗ), но имеются факторы риска их развития при высоком или очень высоком абсолютном сердечно-сосудистом риске.",
    remember_list: [
      "Возраст – относится к не модифицируемым факторам риска развития многих заболеваний и состояний из-за естественных физиологических изменений, которые происходят в организме с течением времени.",
      "Ожирение – является заболеванием, но относиться к факторам риска, т.к. ожирение напрямую вызывает или утяжеляет другие состояния. Например, в задаче у женщины ожирение - главная причина прогрессирования артериальной гипертензии (которая у неё в анамнезе)."
    ]
  }
];

let total = 0
let currentQuestionIndex = 0;

function renderQuestion() {
  document.getElementById('answer-checked').classList.add('hidden');
  document.getElementById('test-area').classList.remove('hidden');

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  document.getElementById('progress-step').innerText = `Задача ${currentQuestionIndex + 1} из ${totalQuestions}`;
  document.getElementById('progress-percent').innerText = `${progressPercent}%`;

  document.getElementById('progress-fill').style.width = `${progressPercent}%`;
  document.getElementById('quiz-title').innerText = currentQuestion.title;
  document.getElementById('quiz-description').innerText = currentQuestion.description;
  document.getElementById('quiz-question').innerText = currentQuestion.question;

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

  document.getElementById('test-area').classList.add('hidden');
  document.getElementById('answer-checked').classList.remove('hidden');

  if (selected.value === 'true') {
    total += 1;
    document.getElementById('answer-status').innerHTML = `
      <img src="../img/cases-img/correct-answer.png">
      <ul>
        <li>Правильный ответ</li>
        <li>${selected.closest('.answer-item').querySelector('.answer-text').innerText}</li>
      </ul>
    `;
    document.getElementById('comment').innerText = questions[currentQuestionIndex].comment;

    document.getElementById('remember-area').classList.add('correct-remember');
    document.getElementById('remember-area').classList.remove('wrong-remember');
    let rememberHTML = `
      <span>Что важно запомнить</span>
      <ul>`;
    currentQuestion.remember_list.forEach(item => {
      rememberHTML += `
        <li>
          <img src="../img/cases-img/correct-answer.png">
          ${item}
        </li>
      `
    });
    rememberHTML += '</ul>';
    document.getElementById('remember-area').innerHTML = rememberHTML;

  }
  else {
    document.getElementById('answer-status').innerHTML = `
      <img src="../img/cases-img/wrong-answer.png">
      <ul>
        <li>Неверный ответ</li>
        <li>${selected.closest('.answer-item').querySelector('.answer-text').innerText}</li>
      </ul>
    `;
    document.getElementById('comment').innerText = questions[currentQuestionIndex].comment;

    document.getElementById('remember-area').classList.add('wrong-remember');
    document.getElementById('remember-area').classList.remove('correct-remember');
    let rememberHTML = `
      <span>Что важно запомнить</span>
      <ul>`;
    currentQuestion.remember_list.forEach(item => {
      rememberHTML += `
        <li>
          <img src="../img/cases-img/wrong-answer.png">
          ${item}
        </li>
      `
    });
    rememberHTML += '</ul>';
    document.getElementById('remember-area').innerHTML = rememberHTML;
  }
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
  else {
    document.getElementById('answer-checked').classList.add('hidden');
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

document.getElementById('check-btn').addEventListener('click', function() {
  checkAnswer();
});

document.getElementById('next-btn').addEventListener('click', function() {
  nextQuestion();
});

document.getElementById('quit-btn').addEventListener('click', function() {
  total = 0;
  currentQuestionIndex = 0;
  window.location.href = '../cases-list.html';
});