import React from 'react'
import Table from './elements/Table'
import { DataTableLogo } from './Logo'

const DataTable = ({tableData}) => {
    const columns = [
        {
            name: 'Name',
            cellComponent: 'name',
            headerCss: 'text-left'
        },
        {
            name: 'Username',
            cellComponent: 'username',
            headerCss: 'text-left'
        },
        {
            name: 'Email',
            cellComponent: 'email',
            headerCss: 'text-left'
        },
        {
            name: 'Phone',
            cellComponent: 'phone',
            headerCss: 'text-left'
        },
        {
            name: 'Website',
            cellComponent: 'website',
            headerCss: 'text-left'
        },
    ]
  return (
    <div className='w-full h-full object-contain  border border-gray-500 rounded-lg'>
    <h1 className='bg-gray-200 flex justify-start items-center p-2 rounded-t-lg '>
    <DataTableLogo/>
    DataTable Example</h1>
    <div className='p-2 border-t border-gray-500'>
        <Table columns={columns} data={tableData}/>
    </div>
    </div>
  )
}

export default DataTable