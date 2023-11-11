import { Link } from "react-router-dom";
import { React } from "react";
import "./index.css";
function Dashboard(  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  return (
    <div className="wd-dashboard">
      <div>
        <h2> Dashboard </h2>
        <hr class="wd-hr-line" />
      </div>
      <div class="wd-published-courses">
        <h3> Published Courses(7) </h3>
      </div>
      <hr class="wd-hr-line"></hr>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      <button onClick={addNewCourse}>
        Add
      </button>
      <button onClick={() => updateCourse(course._id)} >
        Update
      </button>

      <div className="">
        <div className="row row-cols-1 row-cols-md-3 g-4 wd-card-container">
          {courses.map((course) => (
            <div className="col">
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className=""
              >

                <div className="card h-100">
                  <a href="home.html">
                    <img src="../images/blue.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}>
                        Edit
                      </button>

                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}>
                        Delete
                      </button>

                      <h6 className="card-title">{course.name} {course.number}</h6>
                      <p className="card-text">
                        CS4550.12631.202410</p>
                      <p className="card-text">
                        202410_1 Fall 2023 Semester Full Term {course.startDate}</p>
                    </div>
                  </a>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

