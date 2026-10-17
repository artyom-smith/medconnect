import { useState } from "react"
import { useNavigate } from 'react-router-dom';

import Footer from "../components/Footer.jsx";

import algorithms from "../assets/img/main/algorithms.png";
import selfControl from "../assets/img/main/selfcontrol.png";
import laws from "../assets/img/main/laws.png";
import cases from "../assets/img/main/cases.png";
import chat from "../assets/img/main/chat.png";
import competition from "../assets/img/main/competition.png";


export default function Home() {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'modules', title: 'Алгоритмы', img: algorithms, path: '/modules', isLongText: false },
    { id: 'selfControl', title: 'Самоконтроль', img: selfControl, path: '/self-control', isLongText: false },
    { id: 'regulations', title: 'Нормативная база', img: laws, path: '/regulations', isLongText: true },
    { id: 'cases', title: 'Ситуационные задачи', img: cases, path: '/cases', isLongText: true },
    { id: 'chat', title: 'Анонимный чат', img: chat, path: '/chat', isLongText: true },
    { id: 'competition', title: 'Соревнования', img: competition, path: '/competition', isLongText: false },
  ]

  return (
    <>
      <header>
        <h1 className="px-[25px] pt-[30px] font-montserrat font-black text-3xl">
          MedConnect
        </h1>
      </header>

      <main className="flex justify-center mb-[15px] overflow-y-auto">
        <ul className="flex flex-wrap justify-center items-start gap-x-3 gap-y-5 w-full md:w-[85%] lg:w-[60%] pt-[30px]">

          {menuItems.map((item) => (
            <li
              key={item.id}
              className="w-[42%] md:w-[25%] aspect-square"
            >
              <button
                type="button"
                onClick={() => navigate(item.path)}
                className={`flex flex-col w-full aspect-square justify-start items-center px-[15px] pt-[15px] md:pt-[30px] rounded-[25px] bg-[#C8E7FC] font-roboto font-medium text-base md:text-xl text-[#0D4764] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 ${
                  item.isLongText ? 'gap-1 md:gap-2' : 'gap-1 md:gap-6'
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="min-h-0 max-h-[50%] md:h-[65%]"
                />
                <span className="text-center leadig-tight">
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