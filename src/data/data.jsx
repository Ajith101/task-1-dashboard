import { FaPuzzlePiece, FaQuestion } from "react-icons/fa";
import { MdDashboard, MdOutlineContactMail } from "react-icons/md";
import { BsFlower2 } from "react-icons/bs";

export const navigationLinks = [
  {
    title: "Dashboard",
    link: "/",
    icon: <MdDashboard size={25} />,
  },
  {
    title: "Perks",
    link: "/perks",
    icon: <BsFlower2 size={25} />,
  },
  {
    title: "Addons",
    link: "/addons",
    icon: <FaPuzzlePiece size={25} />,
  },
  {
    title: "FAQ",
    link: "/faq",
    icon: <FaQuestion size={25} />,
  },
  {
    title: "Support",
    link: "/support",
    icon: <MdOutlineContactMail size={25} />,
  },
];

export const planInfo = [
  {
    name: "Basic",
    rate: 89.99,
    discount: 9.99,
    description: {
      user: "upto 25 users",
      storage: "Upto 25gb storage",
      support: "Email support",
    },
    bg: "bg-yellow-600/30",
  },
  {
    name: "Standard",
    rate: 189.99,
    discount: 99.99,
    description: {
      user: "upto 50 users",
      storage: "Upto 60gb storage",
      support: "Email+chat support",
    },
    bg: "bg-red-600/30",
  },
  {
    name: "Premium",
    rate: 389.99,
    discount: 199.99,
    description: {
      user: "upto 75 users",
      storage: "Upto 100gb storage",
      support: "Email+chat+whatsApp support",
    },
    bg: "bg-violet-500/60",
  },
];

export const planInfoTwo = [
  {
    title: "Free Starter",
    text: "The quickest and easiest way to try products with the basic functionalities",
    description: {
      user: "upto 8 users",
      storage: "Upto 3gb storage",
      support: "Email support",
    },
    bg: "bg-green-300",
    features:
      "Basic Documents, Task flow,Voting, Accounting, Banking, Notes, Investor, Director and team",
    btnText: "Get Started",
    heading: "Free forever",
  },
  {
    title: "Enterprise Plan",
    text: "Effortless and customize and fine-tone services as your needs shift,ensure the prefect tools for success",
    description: {
      user: "upto 50 users",
      storage: "Upto 60gb storage",
      support: "Email+chat support",
    },
    bg: "bg-blue-300",
    btnText: "Get Contact",
    heading: "Let's connect",
  },
];
