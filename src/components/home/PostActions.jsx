import PropTypes from "prop-types";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { RiBarChartFill, RiShare2Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import { numberFormat } from "../../utils/format";
import { colors } from "../../constant";
import classNames from "classnames";

const IconWithCount = ({ icon: Icon, count, id }) => {
  return (
    <div className="flex items-center gap-0.5">
      <span
        className={classNames(
          "w-6 h-6 flex items-center justify-center rounded-full",
          
        )}
      >
        <Icon />
      </span>
      {numberFormat(count)}
    </div>
  );
};

IconWithCount.propTypes = {
  icon: PropTypes.elementType.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

const PostActions = ({ likes, retweets, comments, views, id }) => {
  return (
    <>
      <IconWithCount icon={FaRegComment} count={comments} id={id} />
      <IconWithCount icon={BiRepost} count={retweets} id={id} />
      <IconWithCount icon={CiHeart} count={likes} id={id} />
      <IconWithCount icon={RiBarChartFill} count={views} id={id} />
      <div className="flex items-center gap-1">
        <span className="hidden sm:block">
          <FaRegBookmark />
        </span>
        <RiShare2Line />
      </div>
    </>
  );
};

PostActions.propTypes = {
  likes: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default PostActions;
