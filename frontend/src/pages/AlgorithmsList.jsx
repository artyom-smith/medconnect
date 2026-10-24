import { useParams, useNavigate } from 'react-router-dom';
import checkMark from '../assets/img/check-mark.png';
import arrBack from '../assets/img/arr-back.png';
import Footer from '../components/Footer.jsx';
import algorithmsList from '../data/algorithms-list.json';


export default function AlgorithmsList() {
  const navigate = useNavigate();
  const { mdkId } = useParams();

  const currentMdk = algorithmsList.find(mdk => mdk.id === mdkId);
  const currentAlgorithms = currentMdk.algorithms;

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
            {currentMdk.title}
          </h2>
        </div>
      </header>

      <main className="flex justify-center mb-[15px] overflow-y-auto">
        <ul className="flex flex-col justify-start items-center gap-3 w-full pt-[30px]">

          {currentAlgorithms.map((item) => (
            <li
              key={item.id}
              className="w-[85%]"
            >
              <button
                type="button"
                onClick={() => navigate(`/modules/${currentMdk.id}/${item.id}`)}
                className="flex items-center w-full rounded-[25px] p-[15px] bg-[#C9E8FD] flex gap-4 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <img
                  src={checkMark}
                  alt="Check mark"
                  className="w-[40px] h-[40px]"
                />
                <span className="block pt-[5px] font-roboto font-bold text-[11px] text-left uppercase">
                  {item.title}
                </span>
              </button>
            </li>
          ))}

        </ul>
      </main>

      <Footer />
    </>
  );
}