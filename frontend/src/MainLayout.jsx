import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="flex flex-col justify-center h-screen box-border bg-mainbg pt-[60px] px-[30px] pb-[30px]">
      <div className="flex flex-col h-[100%] box-border rounded-[32px] shadow-[1.5px_5px_15px_rgba(0,58,107,1.5)] bg-white">

        <Outlet />

      </div>
    </div>
  );
}