import { Link } from 'react-router-dom';
import {
  MdDashboard,
  MdArticle,
  MdCategory,
  MdPermMedia,
  MdCreate,
} from 'react-icons/md';

import SidebarLink from './SidebarLink';
import SidebarFooter from './SidebarFooter';

import blurgaLogo from '../../assets/blurga-logo.svg';

const Sidebar = () => {
  return (
    <nav className="w-full h-full">
      <div className="w-full text-center">
        <Link>
          <img src={blurgaLogo} alt="logo" className="w-11 h-6 mx-auto" />
          <h3 className="text-neutral text-3xl font-medium">Blurga</h3>
        </Link>
      </div>

      <div className="mt-12">
        <SidebarLink
          path="/"
          text="Dashboard"
          icon={<MdDashboard size={20} />}
        />

        <SidebarLink
          path="/posts"
          text="Posts"
          icon={<MdArticle size={20} />}
        />

        <SidebarLink
          path="/categories"
          text="Categories"
          icon={<MdCategory size={20} />}
        />

        <SidebarLink
          path="/media"
          text="Media"
          icon={<MdPermMedia size={20} />}
        />

        <SidebarLink
          path="/create"
          text="Create Post"
          icon={<MdCreate size={20} />}
        />
      </div>

      <SidebarFooter />
    </nav>
  );
};
export default Sidebar;
