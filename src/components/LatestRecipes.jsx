import { BiComment, BiTime } from "react-icons/bi";
import { products } from "../assets/data";
import { IoIosArrowForward } from "react-icons/io";
import AboutMe from "./AboutMe";

const LatestRecipes = () => {
  return (
    <>
      <div className="w-10/12 m-auto">
        <div className="lg:flex gap-5 pt-10 mt-5">
          <div className="lg:w-2/3">
            <div className="pb-4">
              <button className="font-bold text-3xl whitespace-nowrap">
                Latest Recipes
              </button>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {products.map((val, key) => (
                <div className="py-4" key={key}>
                  <div className="lg:flex border rounded-xl overflow-hidden">
                    <div className="h-72 w-96 overflow-hidden rounded-xl">
                      <img
                        src={val.img}
                        alt="img"
                        className="overflow-hidden rounded-xl w-full h-full hover:scale-105 transition-all duration-300 ease-in-out"
                      />
                    </div>

                    <div className="lg:p-5 lg:w-10/12 py-5 px-2">
                      <p className="text-sm text-rose-600 font-semibold capitalize">
                        {val.category}
                      </p>
                      <p className="text-2xl py-2 text-gray-900 font-semibold capitalize">
                        {val.title}
                      </p>

                      <p className="text-base text-gray-900 py-2 capitalize">
                        {val.description}
                      </p>

                      <div className="text-sm flex gap-4 text-gray-950 mt-2">
                        <p className="flex items-center gpa-1">
                          <BiTime />
                          {val.time}
                        </p>
                        <p className="flex items-center gpa-1">
                          <BiComment />
                          {val.comments}
                        </p>

                        <p className="flex items-center cursor-pointer text-rose-600 hover:text-gray-700 gpa-1">
                          {val.btn}
                          <IoIosArrowForward />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-0">
              <AboutMe />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestRecipes;
