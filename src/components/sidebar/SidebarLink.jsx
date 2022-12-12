import { NavLink } from 'react-router-dom';

const SidebarLink = ({ path, icon, text }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? 'active' : 'link')}
    >
      <div className="text-xl flex items-center px-1 py-2">
        <span>{icon}</span>
        {text}
      </div>
    </NavLink>
  );
};
export default SidebarLink;
