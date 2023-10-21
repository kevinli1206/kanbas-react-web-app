import React from "react";
import { useParams } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa"
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div class="d-none d-sm-none d-md-block d-xs-none">
      <div className="wd-modules">
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
          <ul className="list-group list-group-horizontal wd-modules-list mb-5">
            <li className="list-group-item">
              <input value={module.name} className="me-2"
                onChange={(e) => 
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
              />
              <button className="btn btn-success"
                onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                Add
              </button>
              <button className="btn btn-primary"
                onClick={() => dispatch(updateModule(module))}>
                Update
              </button>
              <br />
              <br />
              <textarea value={module.description}
                onChange={(e) => 
                  dispatch(setModule({ ...module, description: e.target.value }))
                }
              />
            </li>
          </ul>
          {modules.map((module, index) => (
            <ul className="list-group list-group-horizontal wd-modules-list mb-5">
              <li key={index} className="list-group-item list-group-item-secondary">
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>

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

