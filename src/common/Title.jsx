import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <>
      <button className="title font-bold text-3xl relative whitespace-nowrap">
        {title}
      </button>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;
