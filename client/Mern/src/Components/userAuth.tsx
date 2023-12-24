import { useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import type { RootState } from '../store';
import { logout } from '../features/User/userSlice';

const UserAuthComponent = () => {
  const { name } = useSelector((state: RootState) => state.userInfo.value);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();


  const logoutUser = async()=>{
    try{
      await fetch('http://localhost:3000/api/user/logout',{
         method: 'POST'
       })
      
    }catch(error){
      console.error(error);
    }
   }


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = async() => {
   
    setShowMenu(false);
    dispatch(logout());
    await logoutUser();
  };

  const handleEditProfile = () => {
    // Implement edit profile functionality here
    setShowMenu(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div onClick={toggleMenu} className="focus:outline-none">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer">
            {name ? name[0].toUpperCase() : ''}
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              onClick={handleEditProfile}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAuthComponent;
