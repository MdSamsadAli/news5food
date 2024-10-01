import { BiComment, BiTime } from "react-icons/bi";
import { products } from "../assets/data";
import Title from "../common/Title";

const TastDishes = () => {
  return (
    <>
      <div className="w-10/12 m-auto">
        <div className="text-center mt-10 mb-4">
          <Title title={"Tasty Dishes"} />
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
          {products.map((val, key) => (
            <div className="py-4" key={key}>
              <div className="border rounded-xl overflow-hidden">
                <div className="h-40 overflow-hidden">
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
                  <p className="text-xl text-gray-900 font-semibold capitalize limit-2">
                    {val.title}
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TastDishes;
