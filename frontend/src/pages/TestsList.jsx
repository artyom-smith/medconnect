import { useParams, useNavigate } from 'react-router-dom';
import arrBack from '../assets/img/arr-back.png';
import clock from '../assets/img/tests/timer-icon.png';
import shield from '../assets/img/tests/mdk-tests-main.png';
import Footer from '../components/Footer.jsx';
import disciplines from '../data/tests-list.json';

export default function TestsList() {
  const navigate = useNavigate();
  const { mdkId } = useParams();

  const currentMdk = disciplines.find(mdk => mdk.id === mdkId);
  const currentTests = currentMdk.tests;

  return (
    <>
      <header className="flex justify-between items-center gap-1 px-[25px] pt-[30px]">
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
        <h2 className="font-jakarta font-bold text-[#0D4764]">
          Тесты по {currentMdk.title}
        </h2>
        <div className="w-[15px]" />
      </header>

      <section className="self-center flex items-center gap-4 w-[90%] md:w-[80%] mx-[10px] rounded-[18px] bg-[#D8EFFF] p-[12px] mt-[10px]">
        <img
          src={shield}
          alt="Shield"
          className="w-[30px] h-[30px]"
        />
        <ul className="flex flex-col gap-1 md:gap-0">
          <li className="font-roboto text-xs md:text-sm text-[#7FA0B9]">
            {currentMdk.title} ● Тесты
          </li>
          <li className="font-roboto font-bold text-[10px] md:text-sm text-[#0D4764]">
            {currentMdk.subtitle}
          </li>
        </ul>
      </section>

      <main className="flex justify-center mb-[15px] overflow-y-auto">
        <ul className="flex flex-wrap justify-center items-start gap-3 w-full pt-[15px]">

          {currentTests.map((item) => (
            <li
              key={item.id}
              className="relative flex items-center gap-[10px] w-[90%] lg:w-[45%] rounded-[20px] bg-[#EFF8FF] p-[10px]"
            >
              <div className="flex justify-center items-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[50%] bg-[#C6E9FD] p-[5px]">
                <img
                  src={item.img}
                  alt=""
                  className="w-[90%]"
                />
              </div>
              <ul className="flex flex-col gap-1">
                <li className="font-roboto text-xs md:text-base font-bold text-[#2B2D2D]">
                  {item.title}
                </li>
                <li className="flex gap-1 items-center">
                  <img
                    src={clock}
                    alt="clock"
                    className="w-[10px] h-[10px] md:w-[14px] md:h-[14px]"
                  />
                  <span className="font-roboto text-[10px] md:text-sm font-medium text-[#7FA0B9]">
                    {item.questions} вопросов ● {item.duration} минут
                  </span>
                </li>
                <li className="font-roboto text-xs md:text-base font-medium text-[#00B9F1]">
                  Пройдено 0%
                </li>
              </ul>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="absolute right-[10px] top-[30%] rounded-[20px] bg-[#00B9F1] px-[10px] py-[5px] font-roboto text-[10px] md:text-sm text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Начать
              </button>
            </li>
          ))}

        </ul>
      </main>

      <Footer />
    </>
  );
}