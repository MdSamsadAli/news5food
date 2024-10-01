import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Icon = () => {
  return (
    <>
      <div className="social-icon">
        <FaFacebookF />
      </div>

      <div className="social-icon">
        <FaXTwitter />
      </div>

      <div className="social-icon">
        <FaInstagram />
      </div>

      <div className="social-icon">
        <FaYoutube />
      </div>
    </>
  );
};

export default Icon;
