import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/DashboardPage";
// import Layout from "./pages/dashboard";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Login/>
      {/* <Layout component={<Dashboard/>}/> */}
    </div>
  )
}
