import React from 'react';
import { NavLink } from 'react-router-dom';

// Icons
import { SiRedux } from "react-icons/si";

function NavBarComponent() {
  const user = localStorage.getItem('redux_user'); // Добиј податоци од localStorage
  
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <SiRedux className="text-purple-500 text-3xl" />
          <h4 className="text-lg font-semibold">Redux App</h4>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-gray-300 hover:text-white transition duration-300 ${isActive ? 'border-b-2 border-purple-500' : ''}`
              }
            >
              Home
            </NavLink>
          </li>

          {user ? ( // Проверува дали user постои
            <li>
              <NavLink 
                to="/userprofilepage" 
                className={({ isActive }) => 
                  `text-gray-300 hover:text-white transition duration-300 ${isActive ? 'border-b-2 border-purple-500' : ''}`
                }
              >
                Profile
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink 
                to="/registerpage" 
                className={({ isActive }) => 
                  `text-gray-300 hover:text-white transition duration-300 ${isActive ? 'border-b-2 border-purple-500' : ''}`
                }
              >
                Register
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBarComponent;
