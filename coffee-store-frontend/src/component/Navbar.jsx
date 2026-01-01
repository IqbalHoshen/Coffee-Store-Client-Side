import navImage from "../assets/images/more/15.jpg";
import navCup from "../assets/images/more/logo1.png";
const Navbar = () => {
  return (
    <div className="navbar " style={{ backgroundImage: `url(${navImage})` }}>
      <div className="flex items-center gap-2">
        <img src={navCup} alt="CupIcon" className="w-[75px] h-[90px]" />
        <p className="text-white font-normal text-6xl">Espresso Emporium</p>
      </div>
    </div>
  );
};

export default Navbar;
