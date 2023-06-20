"use client"
import React, { Fragment, useLayoutEffect } from "react";
import {BiBell,BiPowerOff, BiSearch} from 'react-icons/bi'
import {HiBars3} from 'react-icons/hi2'
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";

const Header = ({setShowSideBar,showSideBar}) => {
    
  return (
    <div>
      <div className={` bg-gray-800 z-50 border-white  sticky inset-x-0 top-0  overflow-visible lg:border-white ${showSideBar? "lg:border-l-[0.5px] delay-200 duration-200":""}   w-full`}>
        <div className="bg-black h-16 px-4 flex items-center border-b border-gray-200 justify-between">
          <div className="">
            <HiBars3
              size={40}
              className="px-2 cursor-pointer text-white hover:text-sky-500"
              onClick={()=>setShowSideBar(!showSideBar)}
            />
          </div>
          <div className="flex items-center text-white">
              <div className="flex items-center justify-center">
                <input placeholder="search for ..." className="w-52 py-2.5 rounded-l-lg px-2 "
                />
                <BiSearch className="bg-customBlue border-0 rounded-r-lg h-full w-full px-2 py-2"/>
              </div>
            <Menu as="div" className="relative">
            <div>
              <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                <span className="sr-only">Menu</span>
                <div
                  className="h-10 w-10 rounded-full border border-neutral-900 bg-gray-700 bg-cover bg-no-repeat bg-center"
                //   style={{ backgroundImage: `url(${loginData?.profile})` }}
                >
                  <span className="sr-only">Admin</span>
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        window.location('/admin/adminprofile')
                      }}
                      className={classNames(
                        active && 'bg-gray-100',
                        'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                      )}
                    >
                      Profile
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        window.location('/admin/updatepassword')
                      }}
                      className={classNames(
                        active && 'bg-gray-100',
                        'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                      )}
                    >
                      Update password
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                    href={'/login'}
                      className={classNames(
                        active && 'bg-gray-100',
                        'active:bg-gray-200 flex items-center rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                      )}
                    >
                    <span><BiPowerOff className="text-red-500" size={20}/></span>  Sign out
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
