import { Outlet } from 'react-router-dom';

import Sidebar from '../../components/sidebar/Sidebar';

const SharedLayout = () => {
  return (
    <section className="w-full h-auto bg-background flex">
      <aside className="w-64 h-screen bg-grey fixed py-6">
        <Sidebar />
      </aside>
      <main className="w-full h-screen">
        <Outlet />
      </main>
    </section>
  );
};
export default SharedLayout;
