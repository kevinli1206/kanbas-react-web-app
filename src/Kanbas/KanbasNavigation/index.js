import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox",
    "History", "Studio", "Commons", "Help"];
  const linksToIconsMap = {
    Account: <MdOutlineAccountCircle className="fs-1 text wd-account-link-color"/>,
    Dashboard: <RiDashboard3Line className="fs-1 text wd-sidebar-link-color" />,
    Courses: <FaBook className="fs-1 text wd-sidebar-link-color" />,
    Calendar: <BsCalendar2Week className="fs-1 text wd-sidebar-link-color" />,
    Inbox: <FaInbox className="fs-1 text wd-sidebar-link-color" />,
    History: <FaClock className="fs-1 text wd-sidebar-link-color" />,
    Studio: <FaDesktop className="fs-1 text wd-sidebar-link-color" />,
    Commons: <FaArrowAltCircleRight className="fs-1 text wd-sidebar-link-color" />,
    Help: <FaQuestionCircle className="fs-1 text wd-sidebar-link-color"/>
  };

  const { pathname } = useLocation();
  return (
    <div className="wd-sidebar">
      <div className="wd-table-header">
        <img src="../images/northeastern.png" class="wd-header-image" alt="..."/>
      </div>
      <div className="wd-sidebar-list">
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item text-center p-2
             ${pathname.includes(link) && "active"}`}
          >
            {linksToIconsMap[link]}
            <br />
            {link}
          </Link>
        ))}
      </div>
    </div>

  );
}
export default KanbasNavigation;