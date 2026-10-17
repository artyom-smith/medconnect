import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute.jsx";
import MainLayout from "./MainLayout.jsx";

import Auth from "./pages/Auth.jsx";
import Home from "./pages/Home.jsx";
import Welcome from "./pages/Welcome.jsx";


export default function MyApp() {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("access_token"));
  const navigate = useNavigate();

  const handleStart = () => {
    if (isAuth) {
      navigate("/home");
    } else {
      navigate("/auth");
    }
  };


  return (
    <Routes>
      <Route path="/" element={
        <div className="flex flex-col justify-between md:justify-center md:gap-20 items-center h-screen bg-mainbg py-[50px]">
          <Welcome onStart={handleStart} />
        </div>
      } />;

      <Route path="/auth" element={
        <div className="flex flex-col justify-center h-screen box-border bg-[#00B8F1] pt-[60px] px-[30px] pb-[30px]">
          <div className="flex flex-col gap-[15%] md:gap-[30%] h-[100%] box-border rounded-[32px] px-[30px] py-[25%] md:pt-8 shadow-[1.5px_5px_15px_rgba(0,58,107,1.5)] bg-white">
            <Auth onLoginSuccess={(userData) => {
              setUser(userData);
              setIsAuth(true);
              setTimeout(() => {
                navigate("/home");
              }, 0);
            }} />
          </div>
        </div>
        } />

      <Route element={<ProtectedRoute isAuth={isAuth}/>}>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}