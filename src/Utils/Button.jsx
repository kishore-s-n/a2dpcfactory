import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button className='bg-white/10 backdrop-blur-md border-white/30 shadow-lg  py-3 px-5 rounded-full'>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
