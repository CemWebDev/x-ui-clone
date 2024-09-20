import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ size, variant, children, className, ...props }) => {
  const buttonClass = classNames(
    {
      "px-4 h-8 text-sm": size === "small",
      "px-4 h-9 text-sm": size === "normal",
      "p-4 h-14 w-full xl:w-[90%] w-[52px] xl:w-auto text-lg": size === "large",
      "bg-blue-500 hover:bg-blue-600 text-white": variant === "primary",
      "text-black bg-white hover:bg-gray-200": variant === "white",
      "bg-transparent border border-gray-200": variant === "follow-outline",
      "flex items-center justify-center rounded-full font-semibold transition-colors": true,
    },
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "large"]),
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "white"]),
  className: PropTypes.string,
};

Button.defaultProps = {
  size: "normal",
  variant: "primary",
  className: "",
};

export default Button;
