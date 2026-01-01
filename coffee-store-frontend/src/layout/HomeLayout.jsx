import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import About_Quality from "../component/About_Quality";

const HomeLayout = () => {
  return (
    <div className="max-w-480 mx-auto">
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
        <About_Quality></About_Quality>
      </header>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomeLayout;
