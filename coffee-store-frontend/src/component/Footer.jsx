import footerBgImage from "../assets/images/more/13.jpg";
const Footer = () => {
  return (
    <div
      className="pt-20 pb-10"
      style={{ backgroundImage: `url(${footerBgImage})` }}
    >
      <div className="max-w-[1320px] mx-auto flex flex-row justify-between">
        <div>
          <figure className="w-20">
            <img src="/src/assets/images/more/logo1.png" alt="" />
          </figure>
          <h1 className="text-5xl text-primary">Espresso Emporium</h1>
        </div>
        <div>hi</div>
      </div>
    </div>
  );
};

export default Footer;
