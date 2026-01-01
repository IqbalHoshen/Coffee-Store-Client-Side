import coffeeCup from "../assets/images/icons/1.png";
import quality from "../assets/images/icons/2.png";
import grades from "../assets/images/icons/3.png";
import roasting from "../assets/images/icons/4.png";
const About_Quality = () => {
  return (
    <div className="bg-[#ECEAE3] flex flex-col md:flex-row py-16 justify-center items-center gap-3">
      <div className="w-75.25 space-y-3">
        <figure>
          <img src={coffeeCup} alt="Image" />
        </figure>
        <div className=" items-center text-start">
          <h2 className="text-primary text-[35px]">Awesome Aroma</h2>
          <p className="ralewayText text-accent">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>
      <div className="w-75.25 space-y-3">
        <figure>
          <img src={quality} alt="Image" />
        </figure>
        <div className=" items-center text-start">
          <h2 className="text-primary text-[35px]">High Quality</h2>
          <p className="ralewayText text-accent">
            We served the coffee to you maintaining the best quality{" "}
          </p>
        </div>
      </div>
      <div className="w-75.25 space-y-3">
        <figure>
          <img src={grades} alt="Image" />
        </figure>
        <div className=" items-center text-start">
          <h2 className="text-primary text-[35px]">Pure Grades</h2>
          <p className="ralewayText text-accent">
            The coffee is made of the green coffee beans which you will love{" "}
          </p>
        </div>
      </div>
      <div className="w-75.25 space-y-3">
        <figure>
          <img src={roasting} alt="Image" />
        </figure>
        <div className=" items-center text-start">
          <h2 className="text-primary text-[35px]">Proper Roasting</h2>
          <p className="ralewayText text-accent">
            Your coffee is brewed by first roasting the green coffee beans{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About_Quality;
