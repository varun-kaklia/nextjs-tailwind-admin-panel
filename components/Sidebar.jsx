import React from 'react'
// import logo from '../../assets/logo.png'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS } from '@/constants/Index'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-900 hover:no-underline active:bg-neutral-900 rounded-sm text-base'


const SideBar = ({ showSideBar, setShowSideBar }) => {

	const router = useRouter()
	const {pathname} = router
	
	return (
		<div className={`flex flex-col h-screen transition-all overflow-y-scroll no-scrollbar delay-150 duration-150 z-50 bg-primary ${showSideBar ? " translate-x-0 w-72 p-3 transition-all duration-100 delay-100  " : " -translate-x-60 transition-all p-0 duration-100 w-0 delay-100"} inset-y-0 left-0 absolute lg:relative text-white`} style={{backgroundColor:'#000'}}>

			<div className='flex items-center p-2 justify-center gap-2 border-b bg-primary border-white px-1 lg:py-3 py-2'>
				<a href="/admin" className='cursor-pointer'>
					<h1 className='text-2xl font-medium text-white'>Admin Panel</h1>
				</a>
			</div>
			<div className={`flex flex-1 flex-col ${showSideBar ? "py-1" : "hidden"} py-1`}>
				{DASHBOARD_SIDEBAR_LINKS?.map((item, index) =>

					<Link href={item?.path} key={index} className={`flex items-center cursor-pointer my-1 px-1 py-2 rounded ${pathname === item.path ? "bg-[#374768]" : "bg-transparent hover:bg-white delay-100 duration-100 hover:text-primary "} `} >
						<span className='text-xl px-2'>
							{item.icon}
						</span>
						<span className='text-md px-2 font-light' >
							{item.label}
						</span>
					</Link>
				)}
			</div>
				<div className='w-full flex flex-col  gap-0.5 pt-2 border-t border-white'>
					<div
						onClick={(e) => {
							e.preventDefault()
							localStorage.removeItem('Login')
							localStorage.removeItem('LoginToken')
						}}
						className={classNames(linkClass, 'cursor-pointer text-red-500 hover:bg-white delay-100 duration-100 hover:text-red-500 p-2')}>
						<span className="text-xl" >
							<HiOutlineLogout />
						</span>
						Logout
					</div>
				</div>
			{/* <div className=''>Sidebar</div> */}
		</div>
	)
}


export default SideBar