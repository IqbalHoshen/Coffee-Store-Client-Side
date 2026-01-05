import bannerImg from "../assets/images/more/3.png";
const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="max-w-2xl mr-12 space-y-2">
        <h1 className="text-[55px] text-white">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="ralewayText text-lg text-white">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-5 bg-secondary text-2xl text-[#242222]"
          type="button"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
