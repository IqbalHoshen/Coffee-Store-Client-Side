import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ScrollToTop from "./ScrollToTop";

const CoffeeView = () => {
  return (
    <div>
      <ScrollToTop />
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default CoffeeView;
