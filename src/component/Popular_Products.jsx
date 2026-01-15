import Multi_Title from "./Multi_Title";
import buttonIcon from "../assets/images/icons/Vector.svg";
import { Link, useLoaderData } from "react-router";
import { useState } from "react";
import CoffeeCard from "./Coffee_Card";
import bgLeftImg from "../assets/images/more/4.png";
import bgRightImg from "../assets/images/more/5.png";

const titleString = {
  subText: "--- Sip & Savor ---",
  titleText: "Our Popular Products",
};

const Popular_Products = () => {
  const data = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  const isShortData = data.length <= 6;

  const coffeeData = isShortData ? data : showAll ? data : data.slice(0, 6);
  return (
    <div className="relative bg-white overflow-hidden py-16">
      <img src={bgLeftImg} className="absolute top-16 left-0" alt="" />
      <img src={bgRightImg} className="absolute bottom-0 right-0" alt="" />
      <div className="relative flex flex-col justify-center text-center  max-w-[1320px] mx-auto ">
        <div>
          <Multi_Title titleString={titleString}></Multi_Title>

          <Link
            to="/add-coffee"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-secondary btn-outline btn-primary text-white text-2xl mt-6 text-shadow-lg/30"
          >
            <span> Add Coffee</span>
            <img src={buttonIcon} alt="Icon" className="mt-2" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12">
          {coffeeData.map((item) => (
            <CoffeeCard key={item._id} item={item}></CoffeeCard>
          ))}
        </div>
        {!isShortData && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-5 bg-secondary text-2xl text-[#242222]"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Popular_Products;
