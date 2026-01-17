import { Link } from "react-router";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { FaArrowLeft } from "react-icons/fa";

const Error404 = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className=" max-w-[1320px] mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <div>
            <Link
              to="/"
              className="btn btn-xl rounded-3xl btn-primary btn-ghost text-3xl my-10"
            >
              <FaArrowLeft size={24} color="primary" />
              <span>Back to home</span>
            </Link>
          </div>
          <figure className="bg-amber-300">
            <img src="/404.gif" alt="Error" />
          </figure>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Error404;
