import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const SharedLayout = () => {
  return (
    <section className="w-full h-auto bg-background flex">
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </section>
  );
};
export default SharedLayout;
