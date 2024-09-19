import PropTypes from "prop-types";

const PopoverPanelContent = ({ icon: Icon, text }) => {
  return (
    <button className="flex w-full hover:bg-neutral-800/70 text-gray-200 items-center pl-3 gap-5 justify-start h-14">
      <Icon className="text-2xl" />
      <span className="text-lg font-semibold">{text}</span>
    </button>
  );
};

PopoverPanelContent.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default PopoverPanelContent;
