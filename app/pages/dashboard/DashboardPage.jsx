"use client"
import BarChart from '@/components/BarChart'
import Cards from '@/components/Cards'
import DataTable from '@/components/DataTable'
import LineChart from '@/components/LineChart'
import React, { useEffect, useState } from 'react'

const cardsData = [
  {
    heading:'Primary Card',
    linkTitle:'View Details',
    bgColor:'bg-customBlue'
  },
  {
    heading:'Warning Card',
    linkTitle:'View Details',
    bgColor:'bg-[#ffc107]'
  },
  {
    heading:'Success Card',
    linkTitle:'View Details',
    bgColor:'bg-[#198754]'
  },
  {
    heading:'Danger Card',
    linkTitle:'View Details',
    bgColor:'bg-[#dc3545]'
  },
]


const DashboardPage = () => {
  const [tableData,setTableData] = useState('')

  const callApi = async()=>{
    const req = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await req.json()
    if(res){
      setTableData(res)
    }
  }

  useEffect(()=>{
    document.title="Dashboard"
    callApi()
  },[])

  return (
    <div className='w-full h-full p-2'>
      <h1 className='text-4xl font-bold'>Dashboard</h1>
      <h3 className='text-base py-2 px-0.5 font-normal text-gray-600'>Dashboard</h3>
      <div  className='grid grid-cols-4 gap-7'>
      {
        cardsData?.map((x,index)=>(
          <Cards key={index} cardData={x}/>
        ))
      }
      </div>
      <div className='grid grid-cols-2 gap-7 py-4'>
        <LineChart/>
        <BarChart/>
      </div>
      <div className='grid grid-cols-1 gap-7 py-4'>
        <DataTable tableData={tableData}/>
      </div>
    </div>
  )
}

export default DashboardPage