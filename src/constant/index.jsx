import {
  FaHouse,
  FaBell,
  FaEnvelope,
  FaSlash,
  FaXTwitter,
  FaRegBookmark,
  FaMoneyBill1,
} from "react-icons/fa6";
import { FaSearch, FaUser, FaMicrophone, FaCog } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { BsLightning } from "react-icons/bs";
import { PiDotsThreeCircle } from "react-icons/pi";
import { RiFileListLine } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";

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
