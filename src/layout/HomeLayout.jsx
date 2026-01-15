import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import About_Quality from "../component/About_Quality";
import Follow_Instagram from "../component/Follow_Instagram";

const HomeLayout = () => {
  return (
    <div className="max-w-480 mx-auto">
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
        <About_Quality></About_Quality>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <section>
        <Follow_Instagram></Follow_Instagram>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
