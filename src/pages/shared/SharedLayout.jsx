import { Outlet } from 'react-router-dom';

import Sidebar from '../../components/sidebar/Sidebar';

const SharedLayout = () => {
  return (
    <section className="w-full h-auto bg-background flex">
      <aside className="w-64 h-screen bg-grey py-6 fixed top-0 left-0 z-10 overflow-x-hidden">
        <Sidebar />
      </aside>
      <main className="w-full py-6 pl-72 pr-6 text-neutral">
        <Outlet />
      </main>
    </section>
  );
};
export default SharedLayout;
