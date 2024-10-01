import Category from "../components/Category";
import FastFood from "../components/FastFood";
import LatestRecipes from "../components/LatestRecipes";
import Newsletter from "../components/Newsletter";
import PopularRecipes from "../components/PopularRecipes";
import Recipes from "../components/Recipes";
import TastDishes from "../components/TastyDishes";

const Home = () => {
  return (
    <>
      <Recipes />
      <Category />
      <PopularRecipes />
      <FastFood />
      <TastDishes />
      <Newsletter />
      <LatestRecipes />
    </>
  );
};

export default Home;
