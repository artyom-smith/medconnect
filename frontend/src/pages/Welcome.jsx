import logo from "../assets/img/start.png"

export default function Welcome({ onStart }) {
  return (
    <>
      <div className="flex-1 flex items-center justify-center md:flex-none md:w-screen">
        <img
          src={logo}
          alt="Logo"
          className="w-[80%] md:max-w-[550px] object-contain"/>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="w-[60%] md:w-[350px] shadow-[1.5px_5px_30px_rgba(0,58,107,0.25)] rounded-[32px] bg-skyblue py-[15px] text-2xl font-roboto font-medium text-[#F4FFFD] transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
        Start
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-roboto text-center text-xs text-[#F4FFFD]/50 font-light tracking-wide w-full max-w-[90%] select-none">

        <div>© {new Date().getFullYear()} MedConnect — P. Zhigalova | A. Kuznetsov</div>
        <div className="text-[10px] mt-0.5 text-[#F4FFFD]/40">All rights reserved</div>

      </div>
    </>
  );
}