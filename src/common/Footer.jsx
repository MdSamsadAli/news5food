import { Link } from "react-router-dom";
import { adImg } from "../assets/data";
import logo from "../assets/images/footer-logo.svg";
import Icon from "../components/Icon";

const Footer = () => {
  return (
    <>
      <div className="flex">
        {adImg.map((img, key) => (
          <div key={key} className="overflow-hidden h-40 w-full">
            <img
              src={img.img}
              alt="img"
              className="w-full h-full hover:scale-105 transition-all ease-in-out object-cover"
            />
          </div>
        ))}
      </div>

      <div className="footer bg-gray-950 py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <img src={logo} alt="img" />
          </div>

          <div className="flex lg:flex-row flex-col text-white gap-4 lg:footer-links my-5 text-xl">
            <Link>Fast Food</Link>
            <Link>Salades</Link>
            <Link>Dishes</Link>
            <Link>Ice Cream</Link>
            <Link>Drinks</Link>
          </div>

          <div className="flex text-white gap-4 mt-4 text-xl">
            <Icon />
          </div>

          <div className="mt-5 text-white text-center">
            <p>
              News5Food &copy; ALl rights reserved.
              <Link
                className="ml-2 cursor-pointer hover:text-rose-500"
                to="https://www.youtube.com/@shamskhus5063"
                target="_blank"
              >
                Shamskhus
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
