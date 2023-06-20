"use client"
import Header from '@/components/Header'
import SideBar from '@/components/Sidebar'
import React, {useState } from 'react'

const Dashboard = ({component}) => {
//   const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState(true)

  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen">
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="flex flex-col flex-1 w-full h-full">
        <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div className="flex-1 min-h-0 overflow-auto no-scrollbar p-2">
          {component}
        </div>
      </div>
    </div>
  )
}

export default Dashboard