import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import footerBgImage from "../assets/images/more/13.jpg";
import copyRightImage from "../assets/images/more/24.jpg";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="pt-20 pb-10"
      style={{ backgroundImage: `url(${footerBgImage})` }}
    >
      <div className="max-w-[1320px] mx-auto flex flex-row justify-between items-center gap-8">
        <div className="space-y-8 w-1/2">
          <figure className="w-20">
            <img src="/src/assets/images/more/logo1.png" alt="" />
          </figure>
          <h1 className="text-5xl text-primary">Espresso Emporium</h1>
          <p className="text-xl text-accent ralewayText">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-3">
            <FaFacebook color="#331A15" size={40} />
            <FaTwitter color="#331A15" size={40} />
            <FaInstagram color="#331A15" size={40} />
            <FaLinkedin color="#331A15" size={40} />
          </div>
          <h1 className="text-5xl text-primary">Get in Touch</h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <FaPhoneAlt color="#331A15" size={24} />
              <p className="ralewayText text-xl text-accent">
                +88 01533 333 333
              </p>
            </div>
            <div className="flex gap-5">
              <MdEmail color="#331A15" size={24} />
              <p className="ralewayText text-xl text-accent">info@gmail.com</p>
            </div>
            <div className="flex gap-5">
              <FaLocationDot color="#331A15" size={24} />
              <p className="ralewayText text-xl text-accent">
                72, Wall street, King Road, Dhaka{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="text-5xl text-primary">Connect with Us</h1>
          <input
            type="text"
            placeholder="Name"
            className="input w-xl input-accent text-accent text-[16px] border-0"
          />
          <input
            type="email"
            placeholder="Email"
            className="input w-xl border-0 input-accent text-[16px] text-accent"
          />
          <textarea
            className="textarea w-xl border-0 input-accent text-[16px] text-accent"
            placeholder="Message"
          ></textarea>
          <button className="btn btn-xl btn-outline border-4 rounded-3xl btn-primary w-56 text-2xl mt-4">
            Send Message
          </button>
        </div>
      </div>

      <div
        className="mt-10 h-14 flex justify-center items-center"
        style={{ backgroundImage: `url(${copyRightImage})` }}
      >
        <p className="text-xl text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
