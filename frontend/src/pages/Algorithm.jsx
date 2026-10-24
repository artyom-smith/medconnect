import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import arrBack from '../assets/img/arr-back.png';

import Footer from '../components/Footer.jsx';
import Renderer from '../components/Renderer.jsx';
import algoList from '../data/algorithms-list.json';


export default function Algorithm() {
  const navigate = useNavigate();
  const { mdkId, algoId } = useParams();

  const currentMdk = algoList.find(mdk => mdk.id === mdkId);
  const currentAlgo = currentMdk.algorithms.find(algo => algo.id === algoId);

  const [algoData, setAlgoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (() => {
    setLoading(true);
    setError(false);

    fetch(`/algorithms/${mdkId}/${algoId}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Algorithm not found');
        }
        return response.json()
      })
      .then((data) => {
        setAlgoData(data);
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false)
      })
  }, [algoId]);


  if (loading) return (
    <div className="p-6">
      Загрузка медицинского алгоритма...
    </div>
  );

  if (error) return (
    <div className="p-6 text-red-500">
      Ошибка: {error}
    </div>
  );

  if (!algoData) return null;



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
        <h2 className="w-[80%] text-center font-jakarta font-bold text-base leading-tight text-[#0D4764]">
          {currentAlgo.title}
        </h2>
        <div className="w-[15px]" />
      </header>

      <div className="self-center h-0 w-[90%] my-[15px] border border-mainbg" />

      <main className="flex flex-col justify-start items-center px-[10px] md:px-[25px] pb-[30px] overflow-y-auto">
        {algoData.map((block, index) => (
          <Renderer key={index} block={block} />
        ))}
      </main>

      <Footer />
    </>
  );
}