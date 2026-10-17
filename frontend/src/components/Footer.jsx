import { useNavigate, useLocation } from 'react-router-dom';

import stats from '../assets/img/stats.png'
import contacts from '../assets/img/mail.png'
import home from '../assets/img/home.png'
import settings from '../assets/img/settings.png'
import profile from '../assets/img/profile.png'

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'stats', path: '/stats', icon: stats, label: 'Статистика' },
    { id: 'contacts', path: '/chat', icon: contacts, label: 'Контакты' },
    { id: 'home', path: '/home', icon: home, label: 'Главная' },
    { id: 'settings', path: '/settings', icon: settings, label: 'Настройки' },
    { id: 'profile', path: '/profile', icon: profile, label: 'Профиль' },
  ];


  return (
    <>
      <div className="absolute bottom-[12%] md:bottom-[8.8%] lg:bottom-[14.2%] left-[8.5%] md:left-[4%] w-[83%] md:w-[92%] h-[40px] bg-[linear-gradient(0deg,#FFFFFF_10%,#FFFFFF00_100%)] pointer-events-none" />


      <footer className="relative flex justify-center mt-auto mb-[18px] self-center h-[45px] w-[88%] md:w-[40%] border-2 border-[#72C5F7] rounded-[32px] py-1 bg-white">
        <ul className="flex justify-between items-center gap-2 lg:w-[75%]">

          {navItems.map((item) => {
            const isHome = item.id === 'home';
            let buttonBg = 'bg-[#72C5F7]';

            if (location.pathname === item.path) {
              buttonBg = 'bg-[#4FAEE6]';
            }

            return (
              <li
                key={item.id}
                className={isHome ? 'mx-3 md:mx-6' : ''}
              >
                <button
                  type="button"
                  onClick={() => navigate(item.path)}
                  className={`flex justify-center items-center h-[34px] aspect-square rounded-[50%] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${buttonBg}`}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="h-[75%]"
                  />
                </button>
              </li>
            );
          })}

        </ul>
      </footer>
    </>
  );
}