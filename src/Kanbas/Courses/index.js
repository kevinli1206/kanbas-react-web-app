import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const URL = "http://localhost:4000/api/courses";
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  const { pathname } = useLocation();
  return (
    <div>
      <div class="wd-home-header">
      <FaGripLines className="text wd-sidebar-link-color" />
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
            <Link
            to={`/Kanbas/Dashboard`}
          >
            {course.number}
          </Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {pathname.substring(pathname.lastIndexOf('/') + 1)}
                </li>
          </ol>
        </nav>
      </div>
      <hr class="wd-hr-line"/>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
