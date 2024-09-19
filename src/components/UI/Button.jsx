import PropTypes from "prop-types";
import classNames from "classnames";
import { FaFeather } from "react-icons/fa";

const Button = ({ size, children }) => {
  const buttonClass = classNames({
    "p-3 h-9": size === "normal",
    "p-4 h-[52px] w-full xl:w-[90%] w-[52px] xl:w-auto text-lg":
      size === "large",
    "bg-blue-500 flex items-center justify-center text-white rounded-full hover:bg-blue-600 transition-colors": true,
  });

  return (
    <button className={buttonClass}>
      <FaFeather className="block xl:hidden" />
      <span className="hidden xl:block">{children}</span>
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["normal", "large"]),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  size: "normal",
};

export default Button;
