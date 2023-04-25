import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";
import { useScreenResize } from "../hooks/useScreenResize";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { FiEdit, FiPieChart } from "react-icons/fi";
import { BsKanban, BsBarChart } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { GiLouvrePyramid } from "react-icons/gi";
import {
  MdOutlineCancel,
  MdOutlineEventNote,
  MdOutlineQuestionAnswer,
} from "react-icons/md";
import CustomNavLink from "./Links/CustomLink";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "questions",
        icon: <MdOutlineQuestionAnswer />,
      },
      {
        name: "passage",
        icon: <MdOutlineEventNote />,
      },
    ],
  },
  {
    title: "Popular",
    links: [
      {
        name: "interviewcss",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "dota2",
        icon: <IoMdContacts />,
      },
      {
        name: "counter-strike",
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "kanban",
        icon: <BsKanban />,
      },
      {
        name: "editor",
        icon: <FiEdit />,
      },
      {
        name: "color-picker",
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "bar",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "pie",
        icon: <FiPieChart />,
      },
      {
        name: "financial",
        icon: <RiStockLine />,
      },
      {
        name: "color-mapping",
        icon: <BsBarChart />,
      },
      {
        name: "pyramid",
        icon: <GiLouvrePyramid />,
      },
      {
        name: "stacked",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  const { activeMenu, setActiveMenu, currentMode } = useStateContext();

  const { screenWidth } = useScreenResize();

  const handleCloseSideBar = () => {
    if (screenWidth) {
      if (activeMenu && screenWidth < 1280) {
        setActiveMenu(false);
      }
    }
  };

  useEffect(() => {
    if (screenWidth) {
      if (screenWidth < 1280) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    }
  }, [screenWidth, setActiveMenu]);


  return (
    <div className="ml-3 h-screen xl:overflow-hidden overflow-auto xl:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              Q <span>Questic</span>
            </Link>

            <button
              type="button"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className="rounded-full text-[#99abb4] dark:text-[#E5E7EB] text-2xl p-3 mt-4 mr-3 hover:drop-shadow-xl hover:bg-light-gray dark:hover:bg-slate-800 xl:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <CustomNavLink
                    to={`/${link.name}`}
                    key={link.name}
                    handleClick={handleCloseSideBar}
                  >
                    {link.icon} <span className="capitalize">{link.name}</span>
                  </CustomNavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
