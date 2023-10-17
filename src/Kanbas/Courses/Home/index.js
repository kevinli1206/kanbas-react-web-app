import ModuleList from "../Modules/ModuleList";


function Home() {
  return (
    <div>
      <ModuleList />
      <div class="d-none d-xl-none d-xxl-block">
        <div class="wd-buttons-and-links">
          <div class="wd-header">
            <h4>Course Status</h4>
            <button type="button" class="btn btn-secondary btn-sm"> <i class="fas fa-ban"></i>Unpublish</button>
            <button type="button" class="btn btn-success btn-sm"><i class="fa fa-check-circle"
              aria-hidden="true"></i>Publish</button>
          </div>
          <div class="wd-button">
            <button type="button" class="btn btn-secondary btn-sm text-start"> <i
              class="fas fa-file-import"></i>Import
              Existing Content</button>
            <button type="button" class="btn btn-secondary btn-sm text-start"> <i
              class="fas fa-cloud-upload-alt"></i>Import from Commons</button>
            <button type="button" class="btn btn-secondary btn-sm text-start"> <i
              class="fas fa-bullseye"></i>Choose
              Home Page</button>
            <button type="button" class="btn btn-secondary btn-sm text-start"> <i
              class="fas fa-chart-bar"></i>View
              Course Stream</button>
            <button type="button" class="btn btn-secondary btn-sm text-start"> <i
              class="fas fa-bullhorn"></i>New
              Announcements</button>
            <button type="button" class="btn btn-secondary btn-sm text-start"> <i
              class="fas fa-chart-bar"></i>New
              Analytics</button>
            <button type="button" class="btn btn-secondary btn-sm text-start"> <i class="far fa-bell"></i>View
              Course
              Notifications</button>
          </div>
          <div class="wd-todo">
            <h6>To Do</h6>
            <hr />
            <a href="#">
              <i class="fas fa-exclamation"></i>
              Grade A1 - ENV + HTML
            </a>
            <p>
              100 points * Sep 18 at 11:59pm
            </p>

          </div>
          <div class="wd-todo">
            <div>
              <div class="float-start">
                <h6>Coming Up</h6>
              </div>
              <div class="float-end wd-link-small">
                <a href="#"><i class="far fa-calendar fa-xs"></i>View Calendar</a>
              </div>
            </div>
            <hr class="wd-hr-line" />
            <div class="wd-coming-up">
              <i class="far fa-calendar fa-xs"></i>
              <a href="#">
                Lecture
              </a>
              <p class="ps-3">
                CS4550.12631.202410<br />
                Sep 11 at 11:45am
              </p>
            </div>
            <div class="wd-coming-up">
              <i class="far fa-calendar fa-xs"></i>
              <a href="#">
                CS5610 06 SP23 Lecture
              </a>
              <p class="ps-3">
                CS4550.12631.202410<br />
                Sep 11 at 6pm
              </p>
            </div>
            <div class="wd-coming-up">
              <i class="far fa-calendar fa-xs"></i>
              <a href="#">
                CS5610 06 SP23 Lecture
              </a>
              <p class="ps-3">
                CS4550.12631.202410<br />
                Sep 11 at 6pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

