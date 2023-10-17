import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { FaCheckCircle, FaEllipsisV, FaPlus, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Saving assignment");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div class="wd-assignments">
      <div class="wd-assignments-buttons float-end">
        <FaCheckCircle className="text wd-check-mark" />
        Published
        <button type="button" class="btn btn-secondary btn-sm">
          <FaEllipsisV className="text" />
        </button>
      </div>
      <div class="wd-assignments-hr">
        <hr />
      </div>
      <div class="wd-edit-assignments">
        <div class="mb-3">
          <label for="assignment-name" class="form-label">Assignment name</label>
          <input type="text" class="form-control" id="assignment-name" value={assignment.title} />
        </div>
        <div class="mb-3">
          <textarea class="form-control" id="assignment-description" rows="5">

            This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.
          </textarea>
        </div>
        <div class="assignment-forms">
          <div class="mb-3 row">
            <label for="assignment-points" class="col-sm-2 col-form-label">
              Points</label>
            <div class="col-sm-10 ps-5">
              <input type="text" class="form-control" id="assignment-points" value="100" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="assignment-group" class="col-sm-2 col-form-label">
              Assignment Group</label>
            <div class="col-sm-10 ps-5">
              <select id="assignment-group" class="form-select">
                <option selected>Assignments</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="assignment-grade-as" class="col-sm-2 col-form-label">
              Display Grade as</label>
            <div class="col-sm-10 ps-5">
              <select id="assignment-grade-as" class="form-select">
                <option selected>Percentage</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="assignment-do-not-count" class="col-sm-2 col-form-label">
            </label>
            <div class="col-sm-10 ps-5">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="assignment-do-not-count" />
                <label class="form-check-label" for="assignment-do-not-count">
                  Do not count this assignment towards the final grade</label>
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="assignment-submission-type" class="col-sm-2 col-form-label">
              Submission Type</label>
            <div class="col-sm-10 ps-5">
              <div class="border">
                <div class="wd-submission-type">
                  <select id="assignment-submission-type" class="form-select m-2">
                    <option selected>Online</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <h6 class="m-2">
                    Online Entry Options
                  </h6>
                  <div class="form-check m-2">
                    <input class="form-check-input" type="checkbox"
                      id="assignment-online-entry-options" checked />
                    <label class="form-check-label" for="assignment-online-entry-options">
                      Text Entry</label>
                  </div>
                  <div class="form-check m-2">
                    <input class="form-check-input" type="checkbox"
                      id="assignment-online-entry-options" checked />
                    <label class="form-check-label" for="assignment-online-entry-options">
                      Website URL</label>
                  </div>
                  <div class="form-check m-2">
                    <input class="form-check-input" type="checkbox"
                      id="assignment-online-entry-options" checked />
                    <label class="form-check-label" for="assignment-online-entry-options">
                      Media Recordings</label>
                  </div>
                  <div class="form-check m-2">
                    <input class="form-check-input" type="checkbox"
                      id="assignment-online-entry-options" />
                    <label class="form-check-label" for="assignment-online-entry-options">
                      Student Annotation</label>
                  </div>
                  <div class="form-check m-2">
                    <input class="form-check-input" type="checkbox"
                      id="assignment-online-entry-options" />
                    <label class="form-check-label" for="assignment-online-entry-options">
                      File Uploads</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="assignment-assign" class="col-sm-2 col-form-label">
              Assign</label>
            <div class="col-sm-10 ps-5">
              <div class="border">
                <div class="wd-submission-type">
                  <h6 class="m-2">
                    Assign to
                  </h6>
                  <div class="border m-2">
                    <button type="button" class="btn btn-secondary btn-sm m-2">
                      Everyone
                      <FaTimes className="text" />
                    </button>
                  </div>
                  <h6 class="m-2">
                    Due
                  </h6>
                  <input type="date" class="form-control m-2" id="assignment-due" value="2023-09-18" />
                  <div class="mb-3 row">
                    <div class="col-sm-6">
                      <h6 class="m-2">
                        Available from
                      </h6>
                      <input type="date" class="form-control m-2" id="assignment-available-from" value="2023-09-06" />
                    </div>
                    <div class="col-sm-6">
                      <h6 class="m-2">
                        Until
                      </h6>
                      <input type="date" class="form-control m-2" id="assignment-until" />
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-secondary wd-full-button-width">
                <FaPlus className="text" />
                Add
              </button>
            </div>
          </div>
        </div>
        <div class="wd-edit-footer">
          <hr />
          <div class="float-start">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="assignment-notify" />
              <label class="form-check-label" for="assignment-notify">
                Notify users that this content has changed</label>
            </div>
          </div>
          <div class="float-end">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
              Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-success me-2">
              Save
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
export default AssignmentEditor;
