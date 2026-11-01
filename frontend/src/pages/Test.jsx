import { useParams, useNavigate } from 'react-router-dom';
import { Fragment, useMemo, useEffect, useState } from 'react';
import arrBack from '../assets/img/arr-back.png';
import clock from '../assets/img/tests/timer-icon.png';

import Footer from '../components/Footer.jsx';
import testsList from '../data/disciplines-list.json';


export default function Algorithm() {
  const navigate = useNavigate();
  const { mdkId, testId } = useParams();

  const { currentTest, correctAnswers } = useMemo(() => {
    const currentMdk = testsList.find(mdk => mdk.id === mdkId);
    const test = currentMdk?.tests?.find(test => test.id === testId) || null;
    const answers = currentMdk?.correct_answers || {};

    return { currentTest: test, correctAnswers: answers };
  }, [mdkId, testId]);

  const [testData, setTestData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);


  useEffect(() => {
    setLoading(true);
    setError(null);
    setCurrentQuestionIndex(0);

    fetch(`/tests/${mdkId}/${testId}.json`)
      .then((response) => {
        if (!response.ok) throw new Error('Тест не найден');
        return response.json();
      })
      .then((data) => {
        setTestData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [mdkId, testId]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };



  if (loading) return <div className="p-6">Загрузка теста...</div>;
  if (error || !currentTest) return <div className="p-6 text-red-500">Ошибка: {error || 'Тест не найден в базе данных'}</div>;
  if (!testData || testData.length === 0) return <div className="p-6">В этом тесте пока нет вопросов.</div>;

  if (isFinished) {
    let correctCount = 0

    Object.keys(correctAnswers).forEach((questionId) => {
      const userRes = userAnswers[questionId];
      const correctRes = correctAnswers[questionId];

      if (String(userRes).trim() === String(correctRes).trim()) {
        correctCount += 1;
      }
    });

    return (
      <main>
        <span>
          Поздравляем! Вы прошли тест.
        </span>
        <span>
          Ваш балл: {correctCount} из {testData.length}
        </span>

        <button
          type="button"
          onClick={() => navigate('/self-control')}
        >
          Вернуться к модулям
        </button>
      </main>
    )
  }

  const totalQuestions = testData.length;
  const currentQuestionNumber = currentQuestionIndex + 1;
  const progressPercent = Math.round((currentQuestionNumber / totalQuestions) * 100);


  const handleNextQuestion = (direction) => {
    if (direction === 'bck' && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (direction === 'fwd') {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        console.log(userAnswers)
        setIsFinished(true);
      }
    }
  };

  const handleSelectAnswer = (questionId, answerId) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const currentQuestion = testData[currentQuestionIndex];


  return (
    <>
      <header className="flex justify-between items-center gap-1 px-[25px] pt-[15px] md:pt-[25px]">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-[15px] h-[15px]"
        >
          <img
            src={arrBack}
            alt="Arrow back"
          />
        </button>
        <h2 className="w-[80%] text-center font-roboto font-bold text-base leading-tight text-[#0D4764]">
          Тест: {currentTest.title}
        </h2>
        <div className="w-[15px]" />
      </header>

      <div className="self-center h-0 w-[90%] my-[15px] border border-mainbg" />

      <section className="self-center flex justify-between items-center gap-2 lg:gap-4 w-[90%]">
        <div className="flex-1">
          <div className="flex justify-between font-roboto text-xs lg:text-sm">
            <span className="font-bold">
              Вопрос {currentQuestionNumber} из {totalQuestions}
            </span>
            <span className="text-[#A5B2B8]">
              {progressPercent}%
            </span>
          </div>

          <div className="w-full h-[5px] rounded-[32px] bg-[#c8e3fa]">
            <div
              className="h-[5px] rounded-[32px] bg-mainbg"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <img
            src={clock}
            alt="clock"
            className="w-[20px] h-[20px]"
          />

          <span className="font-roboto font-bold text-sm lg:text-base text-[#0D4764]">
            00:00
          </span>
        </div>
      </section>

      <main className="self-center flex flex-col lg:flex-row gap-3 justify-between items-center mt-[15px] w-[90%] h-[75%] lg:h-[70%] lg:w-[80%] py-[20px] lg:pt-[15px] px-[15px] rounded-[15px] bg-[#D8EFFF] overflow-y-auto">
        <div>
          <h3>
            {testData[currentQuestionIndex].text}
          </h3>
          {testData[currentQuestionIndex].answers.map((answer, answerIndex) => (
            <label key={answerIndex} >
              <input
                type="radio"
                name={`question-${currentQuestionIndex}`}
                checked={ userAnswers[currentQuestion.id] === answer.id }
                onChange={() => handleSelectAnswer(
                  currentQuestion.id, answer.id
                )}
              />
              {answer.text}
            </label>
          ))}
        </div>

        <div>
          <button
            type="button"
            onClick={() => handleNextQuestion('bck')}
          >
            Назад
          </button>
          <button
            type="button"
            onClick={() => handleNextQuestion('fwd')}
          >
            Далее
          </button>
        </div>
      </main>
    </>
  );
}