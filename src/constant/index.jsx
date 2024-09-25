import {
  FaHouse,
  FaBell,
  FaEnvelope,
  FaSlash,
  FaXTwitter,
  FaRegBookmark,
  FaMoneyBill1,
  FaEarthAfrica,
  FaUserPlus,
  FaListUl,
  FaBan,
  FaChartLine,
  FaCode,
  FaFlag,
  FaCommentDots,
} from "react-icons/fa6";
import {
  FaSearch,
  FaUser,
  FaMicrophone,
  FaCog,
  FaPaintBrush,
  FaRegSmile,
  FaAt,
  FaQuestionCircle,
  FaVolumeMute,
} from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { BsLightning } from "react-icons/bs";
import { PiDotsThreeCircle, PiPersonSimpleCircleLight } from "react-icons/pi";
import { RiFileListLine, RiListOrdered2 } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { RiBarChartFill } from "react-icons/ri";
import { CiImageOn, CiLocationOn } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { LuCalendarClock, LuBadgeCheck } from "react-icons/lu";
import { FiUserCheck } from "react-icons/fi";
export const sidebarLinks = [
  {
    id: 1,
    icon: FaHouse,
    text: "Home",
    path: "/",
  },
  {
    id: 2,
    icon: FaSearch,
    text: "Explore",
    path: "/explore",
  },
  {
    id: 3,
    icon: FaBell,
    text: "Notifications",
    notification: 3,
    path: "/notifications",
  },
  {
    id: 4,
    icon: FaEnvelope,
    text: "Messages",
  },
  {
    id: 5,
    icon: FaSlash,
    text: "Grok",
  },
  {
    id: 6,
    icon: FaRegBookmark,
    text: "Bookmarks",
  },
  {
    id: 6,
    icon: IoPeople,
    text: "Communities",
  },
  {
    id: 7,
    icon: FaXTwitter,
    text: "Premium",
  },
  {
    id: 8,
    icon: BsLightning,
    text: "Verified Orgs",
  },
  {
    id: 9,
    icon: FaUser,
    text: "Profile",
  },
  {
    id: 10,
    icon: PiDotsThreeCircle,
    text: "More",
  },
];

export const morePopoverLinks = [
  {
    id: 1,
    icon: RiFileListLine,
    text: "Lists",
  },
  {
    id: 2,
    icon: FaRegBookmark,
    text: "Bookmarks",
  },
  {
    id: 3,
    icon: FaMoneyBill1,
    text: "Monetization",
  },
  {
    id: 4,
    icon: BsBoxArrowUpRight,
    text: "Ads",
  },
  {
    id: 5,
    icon: MdBusinessCenter,
    text: "Jobs",
  },
  {
    id: 6,
    icon: FaMicrophone,
    text: "Create your Space",
  },
  {
    id: 7,
    icon: FaCog,
    text: "Settings and Privacy",
    path: "/settings",
  },
];

export const trendTopics = [
  {
    id: 1,
    category: "Sports · Trending",
    title: "Ferdi Kadıoğlu",
    posts: 6865,
  },
  {
    id: 2,
    category: "Turkish Super Lig · Trending",
    title: "Muslera",
    posts: 5149,
  },
  {
    id: 3,
    category: "Technology · Trending",
    title: "iPhone 15 Release",
    posts: 8920,
  },
  {
    id: 4,
    category: "Music · Trending",
    title: "Taylor Swift's New Album",
    posts: 10234,
  },
  { id: 5, category: "Movies · Trending", title: "Dune Part Two", posts: 7890 },
  {
    id: 6,
    category: "Politics · Trending",
    title: "Climate Change Summit",
    posts: 4521,
  },
  {
    id: 7,
    category: "Fashion · Trending",
    title: "Paris Fashion Week",
    posts: 6432,
  },
  {
    id: 8,
    category: "Health · Trending",
    title: "Mediterranean Diet Benefits",
    posts: 3840,
  },
  {
    id: 9,
    category: "Gaming · Trending",
    title: "Elden Ring DLC",
    posts: 7329,
  },
  {
    id: 10,
    category: "Finance · Trending",
    title: "Bitcoin Price Surge",
    posts: 9587,
  },
];

export const whoToFollow = [
  {
    id: 1,
    username: "cemwebdev.com",
    fullName: "CemWebDev",
    avatar:
      "https://fastly.picsum.photos/id/830/100/100.jpg?hmac=OR3tgiXGeiyB2_hcTonA43nlYWGy8qXPBuKWIu114so",
  },
  {
    id: 2,
    username: "cemwebdev.com",
    fullName: "CemWebDev",
    avatar:
      "https://fastly.picsum.photos/id/823/100/100.jpg?hmac=rrXXdm-D50pC_p2q92_pCEdzuWbfC4iUTbZ-VyD-rUk",
    verified: true,
  },
  {
    id: 3,
    username: "cemwebdev.com",
    fullName: "CemWebDev",
    avatar:
      "https://fastly.picsum.photos/id/156/100/100.jpg?hmac=W2gdtalDBjTq0AEJwUyKNN0QwlSCOL1RnR0XS3G_uAE",
  },
];

export const trendsFooterLinks = [
  {
    id: 1,
    text: "Terms of Service",
    path: "/explore",
  },
  {
    id: 2,
    text: "Privacy Policy",
    path: "/",
  },
  {
    id: 3,
    text: "Cookie Policy",
    path: "/",
  },
  {
    id: 4,
    text: "Imprint",
    path: "/",
  },
  {
    id: 5,
    text: "Accessibility",
    path: "/",
  },
  {
    id: 6,
    text: "Ads info",
    path: "/",
  },
  {
    id: 7,
    text: "More...",
  },
];

export const footerPopoverLinks = [
  { id: 1, text: "About", path: "/" },
  { id: 2, text: "Download the X app", path: "/" },
  { id: 3, text: "X for business", path: "/" },
  { id: 4, text: "Developers", path: "/" },
];

export const settingsLinks = [
  { id: 1, text: "Your account", href: null },
  { id: 2, text: "Monetization", href: null },
  { id: 3, text: "Premium", href: null },
  { id: 4, text: "Creator Subscriptions", href: null },
  { id: 5, text: "Security and account access", href: null },
  { id: 6, text: "Privacy and safety", href: null },
  { id: 7, text: "Notifications", href: null },
  { id: 8, text: "Accessibility, display, and languages", href: "display" },
  { id: 9, text: "Additional resources", href: null },
  { id: 10, text: "Help Center", href: null },
];

export const displayLinks = [
  {
    id: 1,
    title: "Accessibility",
    subtitle:
      "Manage aspects of your X experience such as limiting color contrast and motion.",
    icon: IoEyeOff,
  },
  {
    id: 2,
    title: "Display",
    subtitle:
      "Manage your font size, color, and background. These settings affect all the X accounts on this browser.",
    icon: FaPaintBrush,
    path: "appearance",
  },
  {
    id: 3,
    title: "Languages",
    subtitle:
      "Manage which languages are used to personalize your X experience.",
    icon: BiWorld,
  },
  {
    id: 4,
    title: "Data usage",
    subtitle:
      "Limit how X uses some of your network data. These settings affect all the X accounts on this browser.",
    icon: RiBarChartFill,
  },
  {
    id: 5,
    title: "Keyboard shortcuts",
    subtitle: "Learn the available keyboard shortcuts for easier navigation.",
    icon: PiPersonSimpleCircleLight,
  },
];

export const colors = [
  {
    primary: "#3b82f6",
    secondary: "#8ecdf8",
  },
  {
    primary: "#ffd400",
    secondary: "#ffea80",
  },
  {
    primary: "#f91880",
    secondary: "#fc8cc0",
  },
  {
    primary: "#7856ff",
    secondary: "#bcabff",
  },
  {
    primary: "#ff7a00",
    secondary: "#ffbd80",
  },
  {
    primary: "#00ba7c",
    secondary: "#80ddbe",
  },
];

export const fontSizes = [14, 15, 16, 17, 18];

export const headerIcons = [
  { id: 1, icon: <CiImageOn /> },
  { id: 2, icon: <HiOutlineGif /> },
  { id: 3, icon: <RiListOrdered2 /> },
  { id: 4, icon: <FaRegSmile /> },
  { id: 5, icon: <LuCalendarClock /> },
  { id: 6, icon: <CiLocationOn /> },
];

export const replyPopover = [
  { id: 1, text: "Everyone", icon: FaEarthAfrica },
  { id: 2, text: "Accounts you follow", icon: FiUserCheck },
  { id: 3, text: "Verified accounts", icon: LuBadgeCheck },
  { id: 4, text: "Only accounts you mention", icon: FaAt },
];

export const mockPosts = [
  {
    username: "John Doe",
    handle: "@john_doe",
    content:
      "Morning coffee and a quick workout! ☕💪 #morningroutine #fitness",
      image: "https://picsum.photos/600/400?random=1",
    profileImage: "https://i.pravatar.cc/150?img=1",
    likes: 300,
    retweets: 150,
    comments: 29876,
    views: 1234569,
    time: "2h",
    verified: true,
  },
  {
    username: "Sarah Lee",
    handle: "@sarahlee",
    content: "Had an amazing weekend hike with friends! 🌲🏞️ #nature #hiking",
      image: "https://picsum.photos/600/400?random=2",
    profileImage: "https://i.pravatar.cc/150?img=2",
    likes: 2200,
    retweets: 320,
    comments: 150,
    views: 123333,
    time: "5h",
  },
  {
    username: "Mark Jacobs",
    handle: "@markj",
    content:
      "Just finished reading 'The Alchemist'. Highly recommend! 📖✨ #readinglist #bookworm",
      image: "https://picsum.photos/600/400?random=3",
    profileImage: "https://i.pravatar.cc/150?img=3",
    likes: 800,
    retweets: 120,
    comments: 12890,
    views: 12765234,
    time: "8h",
    verified: true,
  },
  {
    username: "Emily Clark",
    handle: "@emilyc",
    content: "Trying out a new pasta recipe tonight 🍝😋 #foodie #dinnerideas",
      image: "https://picsum.photos/600/400?random=4",
    profileImage: "https://i.pravatar.cc/150?img=4",
    likes: 1900,
    retweets: 240,
    comments: 110,
    views: 4532,
    time: "10h",
  },
  {
    username: "Daniel King",
    handle: "@danielking",
    content:
      "Caught a beautiful sunset at the beach today 🌅 #sunsetlovers #relax",
      image: "https://picsum.photos/600/400?random=5",
    profileImage: "https://i.pravatar.cc/150?img=5",
    likes: 1300,
    retweets: 170,
    comments: 90,
    views: 30567,
    time: "12h",
  },
];

export const postPopoverItems = (username) => [
  {
    id: 1,
    text: "Why this ad?",
    icon: FaQuestionCircle,
  },
  {
    id: 2,
    text: `Follow ${username}`,
    icon: FaUserPlus,
  },
  {
    id: 3,
    text: `Add/remove ${username} from Lists`,
    icon: FaListUl,
  },
  {
    id: 4,
    text: `Mute ${username}`,
    icon: FaVolumeMute,
  },
  {
    id: 5,
    text: `Block ${username}`,
    icon: FaBan,
  },
  {
    id: 6,
    text: "View post engagements",
    icon: FaChartLine,
  },
  {
    id: 7,
    text: "Embed post",
    icon: FaCode,
  },
  {
    id: 8,
    text: "Report ad",
    icon: FaFlag,
  },
  {
    id: 9,
    text: "Request Community Note",
    icon: FaCommentDots,
  },
];
