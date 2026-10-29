import { useNavigate } from 'react-router-dom';
import checkMark from '../assets/img/check-mark.png';
import arrBack from '../assets/img/arr-back.png';
import Footer from '../components/Footer.jsx';
import disciplines from '../data/tests-list.json'


export default function SelfControl() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1 className="px-[25px] pt-[30px] font-montserrat font-black text-3xl">
          MedConnect
        </h1>
        <div className="flex items-center gap-2 px-[25px] ">
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
            Тестовые задания
          </h2>
        </div>
      </header>

      <main className="flex justify-center mb-[15px] overflow-y-auto">
        <ul className="flex flex-col justify-start items-center gap-3 w-full pt-[30px]">

          {disciplines.map((item) => (
            <li
              key={item.id}
              className="flex justify-center w-[85%]"
            >
              <button
                type="button"
                onClick={() => navigate(`/self-control/${item.id}`)}
                className="w-full rounded-[25px] px-[15px] py-[20px] bg-[#C9E8FD] flex gap-4 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <img
                  src={checkMark}
                  alt="Check mark"
                  className="w-[40px] h-[40px]"
                />
                <div className="text-left">
                  <h2 className="font-montserrat font-black text-xl text-[#0D4764]">
                    {item.title}
                  </h2>
                  <span className="block pt-[5px] font-roboto font-bold text-[11px] uppercase">
                    {item.subtitle}
                  </span>
                </div>
              </button>
            </li>
          ))}

        </ul>
      </main>

      <Footer />
    </>
  );
}