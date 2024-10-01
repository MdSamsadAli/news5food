import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import aboutme from "./../assets/images/post-author.webp";

const AboutMe = () => {
  return (
    <>
      <div className="border rounded-xl overflow-hidden p-5">
        <div className="text-center">
          <h1 className="text-xl pb-5 font-semibold">About Me</h1>
          <div className="overflow-hidden rounded-xl">
            <img
              src={aboutme}
              alt="igm"
              className="rounded-xl w-full h-full hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-xl pb-5 font-semibold text-black py-2">
            Amir Nisi
          </h1>
          <p className="text-base text-gray-400">
            Cooking Chef with 6+ years of experience eager to create unique
            recipes follow me for more.
          </p>

          <div className="flex gap-2 mt-3 justify-center">
            <FaXTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
