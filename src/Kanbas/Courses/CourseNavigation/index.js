import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes",
    "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files",
    "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports (EAB Navigate)", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="wd-account-option">
      <div className="wd-account-lists" >
        {links.map((link, index) => (
          <li>
            <Link
              key={index}
              to={`/Kanbas/Courses/${courseId}/${link}`}
              className={`list-group-item ${pathname.includes(link) && "active"}`}
            >
              {link}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}

export default CourseNavigation;

