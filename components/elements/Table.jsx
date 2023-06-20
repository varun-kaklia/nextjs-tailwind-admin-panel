import classNames from 'classnames';
import React, { useState } from 'react';
import {FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight} from 'react-icons/fi'

const Table = ({ columns, data, status, placeHolderText, getId,setGetId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsLimit,setRowsLimit] = useState(10)
  const [search,setSearch] = useState('')

  // Calculate the number of pages based on the total number of items and the itemsPerPage prop
  const pageCount = Math.ceil(data&&data?.length / rowsLimit);

  // Calculate the index of the last item on the current page
  const lastIndex = currentPage * rowsLimit;

  // Calculate the index of the first item on the current page
  const firstIndex = lastIndex - rowsLimit;



  const filteredData = data && data?.filter((item) => {
    // Loop through each key in the item object
    for (const key in item) {
      // Check if the key is a string
      if (typeof item[key] === "string") {
        // Check if the search term is present in the key's value
        if (item[key].toLowerCase().includes(search.toLowerCase())) {
          // If a match is found, return true to include the item in the filteredData array
          return true;
        }
      }
    }
    // If no match is found in any key, return false to exclude the item from the filteredData array
    return false;
  });

  // Slice the data array to get the current page's data
  const currentData = filteredData && filteredData?.length > 0 && filteredData.slice(firstIndex, lastIndex);
  
  return (
    <>
      <div className='flex justify-between items-center pt-0 pb-3 w-full pl-3'>
      <Pagination setRowsLimit={setRowsLimit} status={status} pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <input
          className='p-2 border border-gray-500 2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-1/5 sm:w-1/5 w-1/5 rounded px-4 '
          placeholder={placeHolderText?placeHolderText:"Search"}
          onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <div className='overflow-x-auto'>
      <table className="w-full table-auto">
        <thead>
          <tr>
            {
              status !=="loading"?
              columns?.length>0?
              columns?.map((column, index) => (
              <th
                key={index}
                scope='col'
                className={classNames("tableHeading",column?.headerCss)}
              >
                {column?.name}
              </th>
            ))
            :
            <th
                scope='col'
                className={classNames("tableHeading")}
              >
                No Heading Available...
            </th>
            :
              <th
                scope='col'
                className={classNames("px-2 py-2 text-sm font-medium leading-4 tracking-wider text-gray-800 bg-gray-100 uppercase border-b-2 border-gray-200", 'animate-pulse')}
              >
                {
                  columns?.length>0?
                  <div className='flex justify-center item-center'>
                    {
                    columns?.map((x,index)=>
                    <div key={x?.id?x?.id:index} className='h-6 w-full rounded bg-gray-300 mx-1'></div>
                    )
                    }
                  </div>
                  :
                  <div className='h-6 w-full rounded-md bg-gray-300'></div>
                }
            </th>
            }
          </tr>
        </thead>
        <tbody  className="bg-white divide-y divide-gray-200">
          {
            status!=="loading"?

            filteredData && filteredData?.length > 0 ? (
              currentData?.map((row, index) => (
                <tr key={index}>
                  {/* <td className="px-6 py-4 text-sm whitespace-nowrap">
                    {index + 1}
                  </td> */}
                  {columns?.filter((i)=>i?.cellComponent!=="index").map((column, index) => (
                    <td
                      key={index}
                      className={classNames("tableCell px-1 py-4 text-sm whitespace-nowrap")}
                    >
                      <div title={row[column?.cellComponent]&&row[column?.cellComponent]} className={classNames("flex items-center",column?.cellCss)}>
                      {/* {row[column?.cellComponent]?row[column?.cellComponent]:column?.cellComponent()} */}
                      {typeof column?.cellComponent === "function" ? column?.cellComponent(row) : row[column?.cellComponent]}
                      </div>
                    </td>
                  ))}
                </tr>
              ))
            ) 
            : 
            (
              <tr>
                <td
                  colSpan={columns?.length + 1}
                  className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                >
                  No Data Available...
                </td>
              </tr>
            )
            :
            <>
            {
              [1,2,3,4,5]?.map((x)=>
            <tr
                key={x}
                scope='col'
                className={classNames("px-2 py-2 text-sm font-medium leading-4 tracking-wider text-gray-800 bg-gray-100 uppercase border-b-2 border-gray-200", 'animate-pulse')}
              >
                {
                  columns?.length>0?
                  columns?.map((x,index)=>
                  <td key={x?.id?x?.id:index} className='py-2 px-5'>
                    <div className='h-6 w-full rounded bg-gray-300 mx-1'></div>
                  </td>
                  )
                  :
                  <td className='py-2 px-5'>
                    <div className='h-6 w-full rounded bg-gray-300 mx-1'></div>
                  </td>
                }
            </tr>
              )
            }
            </>
          }
        </tbody>
      </table>
      </div>
      <div className='flex justify-end'>
          <TableButtons setRowsLimit={setRowsLimit} status={status} pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </>
  );
};

export const TableButtons = ({currentPage, setCurrentPage,pageCount})=>{
    const handlePrevClick = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
          onPaginate(currentPage - 1);
        }
      };
    
      const handleNextClick = () => {
        if (currentPage < pageCount) {
          setCurrentPage(currentPage + 1);
          onPaginate(currentPage + 1);
        }
      };
    
      const handleFirstPage = ()=>{
        if (currentPage > 1) {
          setCurrentPage(1);
          onPaginate(1);
        }
      }
    
      const handleLastPage = ({currentPage, setCurrentPage,pageCount})=>{
        if (currentPage < pageCount) {
          setCurrentPage(pageCount);
          onPaginate(pageCount);
        }
      }
    return(
        <>
              <button  onClick={handlePrevClick} disabled={currentPage === 1} className='bg-gray-200 hover:bg-gray-400 p-2 m-1'><FiChevronLeft/></button>
          <button onClick={handleFirstPage} className='bg-gray-200 hover:bg-gray-400 p-2 m-1'><FiChevronsLeft/></button>
          <button onClick={handleLastPage} className='bg-gray-200 hover:bg-gray-400 p-2 m-1'><FiChevronsRight/></button>
          <button  onClick={handleNextClick} disabled={currentPage === pageCount} className='bg-gray-200 hover:bg-gray-400 p-2 m-1'><FiChevronRight/></button>
        </>
    )
}

export const Pagination = ({status,setRowsLimit})=>{

  return(
    <div className='flex justify-start  w-full p-0.5'>
      {
        status!=="loading"?
          <>
          <div className='flex justify-center  items-center'>
            <select onChange={(e)=>setRowsLimit(e.target.value)} className='border ml-1 bg-white px-4 py-2 max-h-screen overflow-y-scroll rounded-lg'>
              <option className=' max-h-screen overflow-y-scroll' value={10}>10</option>
              <option className=' max-h-screen overflow-y-scroll' value={20}>20</option>
              <option className=' max-h-screen overflow-y-scroll' value={30}>30</option>
              <option className=' max-h-screen overflow-y-scroll' value={40}>40</option>
              <option className=' max-h-screen overflow-y-scroll' value={50}>50</option>
            </select>
            <span className='pl-2'>entries per page</span>
          </div>
          {/* <div>
            <span>1-{}</span>
          </div> */}

          </>
        :
        [1,2,3,4]?.map((x)=>
        <button key={x} className='bg-gray-200 hover:bg-gray-400 p-2 m-1 animate-pulse'></button>
        )
      }
    </div>
  )
}

export default Table;