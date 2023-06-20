import { HiOutlineViewGrid, HiUserAdd, HiUserGroup } from "react-icons/hi"

export const DASHBOARD_SIDEBAR_LINKS = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      path: ``,
      icon: <HiOutlineViewGrid />
    },
    {
      key: 'login',
      label: 'Login',
      path: '/Login',
      icon: <HiUserGroup />
    },
    {
      key: 'addemployee',
      label: 'Add Profiles',
      path: '/admin/addemployee',
      icon: <HiUserAdd />
    },
  ]
  
  
  export const DASHBOARD_SIDEBAR_SETTING_LINKS = [
    {
      id: 1,
      name: "My Profile",
      link: "myprofile",
      areaHidden: "",
    },
    {
      id: 2,
      name: "Roles & Permission",
      link: "rolesandpermission",
      areaHidden: "",
    },
  ]