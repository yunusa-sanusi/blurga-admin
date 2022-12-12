import { Outlet } from 'react-router-dom';

const AuthShareLayout = () => {
  return (
    <main className="w-full py-8 bg-background text-neutral">
      <Outlet />
    </main>
  );
};
export default AuthShareLayout;
