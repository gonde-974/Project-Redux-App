import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserProfilePage() {
  const { user } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    // Прикажи Toast известување
    toast.warning('Податоците ќе бидат избришани!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setTimeout(() => {
      // Пренасочување на register page
      navigate('/registerpage');
      
      // Бришење на податоците
      dispatch(logoutAction());
    }, 3000);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl flex flex-col md:flex-row items-center">
        
        {/* ToastContainer за да ги прикажува Toast пораките */}
        <ToastContainer />

        {/* User Image */}
        <img 
          src={user.image} 
          alt="" 
          className="w-48 h-48 rounded-full object-cover border-4 border-purple-500 shadow-md"
        />

        {/* User Details */}
        <div className="ml-0 md:ml-6 mt-4 md:mt-0 w-full">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-600">First Name:</td>
                <td className="py-2 text-gray-800">{user.firstName}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-600">Last Name:</td>
                <td className="py-2 text-gray-800">{user.lastName}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-600">Email:</td>
                <td className="py-2 text-gray-800">{user.email}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-600">Gender:</td>
                <td className="py-2 text-gray-800">{user.gender}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-gray-600">Birthday:</td>
                <td className="py-2 text-gray-800">{user.birthDate}</td>
              </tr>
            </tbody>
          </table>

          {/* Log Out Button */}
          <div className="flex justify-center mt-6">
            <button 
              onClick={handleLogout} 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
            >
              Log Out
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserProfilePage;
