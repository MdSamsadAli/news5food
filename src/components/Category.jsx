import { Link } from "react-router-dom";
import { products } from "../assets/data";

const Category = () => {
  return (
    <>
      <div className="w-10/12 m-auto my-14">
        <ul className="lg:flex justify-between">
          {products.map((cat, key) => (
            <div className="flex flex-col items-center" key={key}>
              <div className="cat_img-wrap rounded-full p-4 bg-red-100">
                <img src={cat.cat_img} alt="catimg" className="w-full" />
              </div>
              <li className="font-semibold capitalize py-3">
                <Link>{cat.category}</Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Category;
