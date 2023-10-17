import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import { FaPlus, FaEllipsisV, FaSortDown, FaEdit, FaCheckCircle } from "react-icons/fa";
import db from "../../Database";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="wd-assignments">
      <div class="wd-assignments-search float-start w-25">
        <input type="text" class="form-control" id="assignment-search" placeholder="Search for Assignment" />
      </div>
      <div class="wd-assignments-buttons float-end">
        <button type="button" class="btn btn-secondary btn-sm">
          <FaPlus className="text" />Group</button>
        <button type="button" class="btn btn-danger btn-sm">
          <FaPlus className="text" />Assignment</button>
        <button type="button" class="btn btn-secondary btn-sm">
          <FaEllipsisV className="text" />
        </button>
      </div>
      <div class="wd-assignments-hr">
        <hr />
      </div>
      <div className="wd-modules-list-items">
        <ul class="list-group list-group-horizontal wd-modules-list">
          <li class="list-group-item list-group-item-secondary rounded-0">
            <div class="float-start">
              <FaEllipsisV className="text" />
              <FaEllipsisV className="text pe-2" />
              <FaSortDown className="text pe-1" />
              Assignments
            </div>
            <div class="float-end">
              <button type="button" class="btn btn-secondary btn-sm rounded-pill">
                <FaPlus className="text" />40% of Total</button>
              <FaPlus className="text" />
              <FaEllipsisV className="text" />
            </div>
          </li>
        </ul>
        {courseAssignments.map((assignment) => (
          <div className="list-group">
            <ul class="list-group list-group-horizontal wd-modules-list">
              <li class="list-group-item rounded-0 wd-green-left-border">
                <div class="float-start">
                  <FaEllipsisV className="text" />
                  <FaEllipsisV className="text pe-2" />
                  <FaEdit className="text wd-link" />
                </div>
                <div class="float-end">
                  <FaCheckCircle className="text wd-link wd-check-mark" />
                  <FaEllipsisV className="text ps-2" />
                </div>
                <div class="wd-assignments-text">
                  <div className="wd-link-bold">
                    <Link
                      key={assignment._id}
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      className="">
                      {assignment.title}
                    </Link>
                  </div>
                  <p> Week 0 - SETUP<br />
                    Due Sep 18, 2022</p>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;