import React from 'react'
import Sidebar from "../components/DashbordComponents.jsx/Sidebar";

const Layout = ({children}) => {
  return (
    <div>
      <div className="flex">
      <div className="w-1/5">
        <Sidebar></Sidebar>
      </div>

      <div className="w-3/4">{children}</div>
    </div>

    </div>
  )
}

export default Layout
