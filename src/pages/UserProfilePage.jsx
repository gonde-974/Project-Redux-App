import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../store/userSlice';
import { useNavigation } from 'react-router-dom';

function UserProfilePage() {
  const { user } = useSelector((state) => state.userStore);
  const dispatch =useDispatch();
  const navigate = useNavigation();

  function handleLogout(){
    dispatch(logoutAction())
    navigate('/registerpage')
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl flex flex-col md:flex-row items-center">
        
        {/* User Image */}
        <img 
          src={user.image} 
          alt="User" 
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
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
              Log Out
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserProfilePage;
