import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

import { signOutUser } from '../../utils/firebase/auth';
import defaultImage from '../../assets/default-image.jpg';

const SidebarFooter = () => {
  const navigate = useNavigate();

  const handleSignOutButton = () => {
    signOutUser();
    navigate('/login');
  };

  return (
    <div className="w-full flex justify-between items-center px-4 absolute bottom-4">
      <div className="flex item-center">
        <img
          src={defaultImage}
          alt="profile"
          className="w-11 h-10 rounded-lg mr-2"
        />
        <div className="leading-none">
          <h6 className="text-neutral text-sm">John Doe</h6>
          <small className="text-neutral opacity-50">admin</small>
        </div>
      </div>
      <button
        className="pointer text-neutral opacity-50 hover:opacity-100"
        onClick={handleSignOutButton}
      >
        <MdLogout size={24} />
      </button>
    </div>
  );
};
export default SidebarFooter;
