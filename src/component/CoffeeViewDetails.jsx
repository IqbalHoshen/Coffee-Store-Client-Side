import { useLoaderData } from "react-router";
import bgImage from "../assets/images/more/11.png";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const textStyle1 = "font-semibold text-xl text-accent ";
const textStyle2 = "text-xl text-[#5C5B5B] ";

const CoffeeViewDetails = () => {
  const coffeeData = useLoaderData();
  const { name, price, supplier, url, tasts, category, details } = coffeeData;
  return (
    <div>
      <div
        className="pt-8 pb-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className=" max-w-[1320px] mx-auto ">
          <Link
            to="/"
            className="btn btn-xl rounded-3xl btn-primary btn-ghost text-3xl mb-10"
          >
            <FaArrowLeft size={24} color="primary" />
            <span>Back to home</span>
          </Link>
          <div className=" bg-[#F4F3F0]  py-12 px-20">
            <div className="flex flex-row  p-10 ">
              <figure className="w-1/2 flex justify-center items-center">
                <img src={url} alt={name} className=" w-[350px] h-[450px] " />
              </figure>

              <div className="flex flex-1 justify-between items-center ml-10 w-1/2">
                <div className="space-y-2 text-start ralewayText">
                  <h1 className="mb-6 text-5xl text-primary">Niceties</h1>
                  <p>
                    <span className={textStyle1}>Name:</span>{" "}
                    <span className={textStyle2}>{name}</span>
                  </p>
                  <p>
                    <span className={textStyle1}>Price:</span>{" "}
                    <span className={textStyle2}>{price}</span>
                  </p>
                  <p>
                    <span className={textStyle1}>Supplier:</span>{" "}
                    <span className={textStyle2}>{supplier} </span>
                  </p>
                  <p>
                    <span className={textStyle1}>Tasts:</span>{" "}
                    <span className={textStyle2}>{tasts} </span>
                  </p>
                  <p>
                    <span className={textStyle1}>Category:</span>{" "}
                    <span className={textStyle2}>{category} </span>
                  </p>
                  <p>
                    <span className={textStyle1}>Details:</span>{" "}
                    <span className={textStyle2}>{details} </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeViewDetails;
