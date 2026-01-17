import Multi_Title from "./Multi_Title";
import coffeeImage1 from "../assets/images/cups/Rectangle 9.png";
import coffeeImage2 from "../assets/images/cups/Rectangle 10.png";
import coffeeImage3 from "../assets/images/cups/Rectangle 11.png";
import coffeeImage4 from "../assets/images/cups/Rectangle 12.png";
import coffeeImage5 from "../assets/images/cups/Rectangle 13.png";
import coffeeImage6 from "../assets/images/cups/Rectangle 14.png";
import coffeeImage7 from "../assets/images/cups/Rectangle 15.png";
import coffeeImage8 from "../assets/images/cups/Rectangle 16.png";

const titleString = {
  subText: "Follow Us Now",
  titleText: "Follow on Instagram",
};

const Follow_Instagram = () => {
  return (
    <div className="flex flex-col justify-center text-center  max-w-[1320px] mx-auto">
      <header>
        <Multi_Title titleString={titleString}></Multi_Title>
      </header>
      <main className="grid grid-cols-4 gap-5 my-16">
        <figure>
          <img src={coffeeImage1} alt="image" />
        </figure>
        <figure>
          <img src={coffeeImage2} alt="image" />
        </figure>
        <figure>
          <img src={coffeeImage3} alt="image" />
        </figure>
        <figure>
          <img src={coffeeImage4} alt="image" />
        </figure>
        <figure>
          <img src={coffeeImage5} alt="image" />
        </figure>
        <figure>
          <img src={coffeeImage6} alt="image" />
        </figure>
        <figure>
          <img src={coffeeImage7} alt="image" />
        </figure>
        <figure>
          <img src={coffeeImage8} alt="image" />
        </figure>
      </main>
    </div>
  );
};

export default Follow_Instagram;
