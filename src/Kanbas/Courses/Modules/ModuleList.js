import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa"
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter(
    (module) => module.course === courseId);
  return (
    <div class="d-none d-sm-none d-md-block d-xs-none">
      <div className="wd-moduleList">
        <div class="wd-modules-buttons">
          <button type="button" class="btn btn-secondary btn-sm">Collapse All</button>
          <button type="button" class="btn btn-secondary btn-sm">View Progress</button>
          <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <FaCheckCircle className="wd-check-mark" />
            Publish All
          </button>
          <button type="button" class="btn btn-danger btn-sm">
            <FaPlus className="text" />
            Modules
          </button>
          <button type="button" class="btn btn-secondary btn-sm">
            <FaEllipsisV className="text" />
          </button>
        </div>
        <div class="wd-modules-hr">
          <hr />
        </div>
        <br />
        <div class="wd-modules-list-items">
          {modules.map((module, index) => (
            <ul className="list-group list-group-horizontal wd-modules-list mb-5">
              <li key={index} className="list-group-item list-group-item-secondary">
                <h3>{module.name}</h3>
                <p>{module.description}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}


export default ModuleList;

