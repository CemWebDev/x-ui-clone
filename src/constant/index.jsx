import {
  FaHouse,
  FaBell,
  FaEnvelope,
  FaSlash,
  FaXTwitter,
  FaRegBookmark,
  FaMoneyBill1,
} from "react-icons/fa6";
import {
  FaSearch,
  FaUser,
  FaMicrophone,
  FaCog,
  FaPaintBrush,
} from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { BsLightning } from "react-icons/bs";
import { PiDotsThreeCircle, PiPersonSimpleCircleLight } from "react-icons/pi";
import { RiFileListLine } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { RiBarChartFill } from "react-icons/ri";

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
