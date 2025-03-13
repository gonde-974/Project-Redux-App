import { Outlet } from 'react-router-dom'
import './App.css'

import NavBarComponent from './components/NavBarComponent'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { restorUserAction } from './store/userSlice';

// Icons
import { SiRedux } from "react-icons/si";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let myUser = JSON.parse(localStorage.getItem('redux_user'))
    dispatch(restorUserAction(myUser))
  }, [])

  return (
    <>
      <div className="h-screen bg-neutral-800 flex flex-col">
        <NavBarComponent />
       
        <Outlet />
      </div>
    </>
  )
}

export default App
