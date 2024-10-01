import dunot from "../assets/images/donuts.svg";
import sandwish from "../assets/images/sandwish.svg";

const Newsletter = () => {
  return (
    <>
      <div className="bg-gray-950 mt-10 w-12/10 m-auto text-center lg:py-20 py-28 relative">
        <div className="text-white">
          <h1 className="text-2xl font-semibold">
            Subscribe to The Newsletter
          </h1>
          <p className="text-xl py-3">
            Join 10+ people to get notified about new posts, news and tips.
          </p>
        </div>

        <div className="text-white">
          <div className="my-4">
            <input
              type="text"
              placeholder="email address"
              className="w-1/3 py-2 ps-2 rounded-md border border-gray-700 focus:outline-red-500 bg-transparent focus:shadow-none"
            />
          </div>
          <div>
            <button className="bg-red-500 w-1/3 py-2 rounded-md hover:bg-red-400">
              sign up
            </button>
          </div>
          <span className="text-sm">Do not worry me donot spam!</span>
        </div>

        <div className="absolute right-4 top-4">
          <img src={dunot} alt="donut" />
        </div>

        <div className="absolute left-4 bottom-4">
          <img src={sandwish} alt="sandwish" />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
