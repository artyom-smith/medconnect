import React, { useState } from 'react';
import eyeIcon from '../assets/img/eye.png';

export default function Auth({ onLoginSuccess }) {
  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://medconnect-ssde.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      if (!response.ok) {
        const rawText = await response.text();

        try {
          const errorData = JSON.parse(rawText);
          setError(errorData.detail || 'Something went wrong');
        } catch {
          if (rawText.includes("Your space")) {
            setError('The server wakes up. Wait 30 seconds and try again.');
          } else {
            setError('Server error (code ' + response.status + ')');
          }
        }
      }

      const data = await response.json();
      console.log('Succeful login!', data);

      localStorage.setItem("access_token", data.session.access_token);

      onLoginSuccess(data.user);

    } catch (err) {
      setError('Не удалось связаться с сервером. Проверь, запущен ли FastAPI. Ошибка: ' + err.message);
    }
  }

  return (
    <>
      <h1 className="pb-[35px] text-3xl font-montserrat font-bold">Вход</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[15px] md:items-center">

      {error && <p className="absolute top-[25%] left-[50%] -translate-x-[50%] w-[80%] text-center text-red-500 font-roboto font-medium">{error}</p>}

        <input
          type="email"
          placeholder="Введите ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-[95%] md:w-[50%] border border-solid border-[#72C5F7] rounded-[32px] py-[10px] px-[15px] text-base font-roboto font-medium placeholder-black outline-none focus:border-[#0D1C2E] transition-all duration-300" />

        <div className="relative w-[95%] md:w-[50%] border border-solid border-[#72C5F7] rounded-[32px] py-[10px] px-[15px] transition-all duration-300 focus-within:border-[#0D1C2E]">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-[96%] text-base font-roboto font-medium placeholder-black outline-none" />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="w-[9%] md:w-[5%] lg:w-[4%] absolute z-[1] top-[50%] right-[5%] md:right-[3%] -translate-y-1/2">
            <img src={eyeIcon} className="w-[100%]" />
          </button>
        </div>

        <a href="#" className="font-roboto font-bold text-base text-[#0D1C2E]">Забыли пароль?</a>

        <button
          type="submit"
          className="self-center w-[80%] md:w-[35%] mt-6 shadow-[1.5px_5px_30px_rgba(0,58,107,0.25)] rounded-[32px] bg-[#72C5F7] py-[8px] text-xl font-roboto font-medium text-[#F4FFFD] transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
          Войти
        </button>
        <button
          type="button"
          className="self-center w-[80%] md:w-[35%] text-base font-roboto font-medium text-[#0D1C2E] transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
          Регистрация
        </button>
      </form>
    </>
  )
}