import React from 'react'
import { Outlet } from "react-router-dom";
import { StudentList } from '../component/StudentList';
//  import RegisterForm from '../component/Registerform';



export const LayoutComponent = () => {
  return (
    <div>
      <StudentList/>
      <Outlet/>
      {/* <RegisterForm/>  */}
    </div>
  )
}
