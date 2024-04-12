import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider }  from 'react-redux'
import { createStore } from 'redux';

// import App from './App.jsx'
import './index.css'
import App from './App'
import accessStudentReducer from './reducers/studentreducer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
import { LayoutComponent } from './Layout/LayoutComponent';
import RegisterForm from './component/Registerform'
import { StudentList } from './component/StudentList';
// import App from './App.jsx'

const router = createBrowserRouter([
   {
     path: "/",
     children: [,
       {
         path: "/RegisterForm",
         element: <RegisterForm/>,
       },
       {
         path: "/",
         element: <StudentList/>,
       },
     ],
   },
 ]);

const store = createStore(accessStudentReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store} > 
    <RouterProvider router={router} />
   {/* <App/> */}
   </Provider>
   
)

