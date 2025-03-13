import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Page
import HomePage from './pages/HomePage.jsx'
import UserProfilePage from './pages/UserProfilePage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

//Router
const router = createBrowserRouter([
   {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>,
      },
      {
        path:'userprofilepage',
        element:<UserProfilePage />
      },
      {
        path:'registerpage',
        element:<RegisterPage/>
      }
    ]
   }
])

createRoot(document.getElementById('root')).render(

  // Provider Redux STEP.3
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>

  </StrictMode>,
)
