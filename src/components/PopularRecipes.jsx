import { BiComment, BiTime } from "react-icons/bi";
import { products } from "../assets/data";
import Title from "../common/Title";

const PopularRecipes = () => {
  return (
    <>
      <div className="bg-gray-950 pb-10">
        <div className="w-10/12 m-auto">
          <div className="flex justify-center flex-col items-center text-white pt-10 pb-4">
            <Title title="Popular Recipes" />
          </div>

          <div className="lg:flex gap-5">
            <div className="lg:w-1/2 mb-4 lg:mb-0">
              {products.slice(0, 1).map((val, key) => (
                <div className="" key={key}>
                  <div className="border rounded-xl overflow-hidden">
                    <div className="h-96 overflow-hidden">
                      <img
                        src={val.img}
                        alt="img"
                        className="rounded-xl w-full h-full hover:scale-105 transition-all duration-300 ease-in-out"
                      />
                    </div>

                    <div className="p-5">
                      <p className="text-sm text-rose-600 font-semibold capitalize">
                        {val.category}
                      </p>
                      <p className="text-2xl text-white font-semibold mt-3">
                        {val.title}
                      </p>
                      <p className="my-3 text-white font-semibold">
                        {val.description}
                      </p>
                      <div className="text-sm flex gap-4 text-white mt-2">
                        <p className="flex items-center gpa-1">
                          <BiTime />
                          {val.time}
                        </p>
                        <p className="flex items-center gpa-1">
                          <BiComment />
                          {val.comments}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-1/2">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                {products.slice(1, 5).map((val, key) => (
                  <div className="" key={key}>
                    <div className="border rounded-xl overflow-hidden">
                      <div className="h-36 overflow-hidden">
                        <img
                          src={val.img}
                          alt="img"
                          className="rounded-xl w-full h-full hover:scale-105 transition-all duration-300 ease-in-out"
                        />
                      </div>

                      <div className="p-5">
                        <p className="text-sm text-rose-600 font-semibold capitalize">
                          {val.category}
                        </p>
                        <p className="text-2xl text-white limit-2 font-semibold capitalize">
                          {val.title}
                        </p>
                        <div className="text-sm flex gap-4 text-white mt-2">
                          <p className="flex items-center gpa-1">
                            <BiTime />
                            {val.time}
                          </p>
                          <p className="flex items-center gpa-1">
                            <BiComment />
                            {val.comments}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularRecipes;
