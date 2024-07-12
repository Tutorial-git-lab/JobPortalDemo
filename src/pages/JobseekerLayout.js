import React from "react";
import FindJob from "./FindJob";
import JobMatch from "./JobMatch";
import AppliedJob from "./AppliedJob";
import ChangePassword from "./Change Password";
import Logout from "./Logout";
import MyInbox from "./MyInbox";
import Sent from "./Sent";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import JobSeekerAccount from "./JobSeekerAccount";

const JobseekerLayout = () => {
  const [activeKey, setActiveKey] = useState("changepassword");
  const renderComponent = () => {
    switch (activeKey) {
      case "findjob":
        return <FindJob />;
      case "jobseekeraccount":
        return <JobSeekerAccount />;
      case "jobmatch":
        return <JobMatch />;
      case "appliedjob":
        return <AppliedJob />;
      case "changepassword":
        return <ChangePassword />;
      case "myinbox":
        return <MyInbox />;
      case "sent":
        return <Sent />;
      case "logout":
        return <Logout />;
      default:
        break;
    }
  };
  return (
    // <>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="findjob">Find Job</Link>
    //         <Link to="jobseekeraccount">My Account</Link>
    //         <Link to="jobmatch">Job Match</Link>
    //         <Link to="appliedjob">Applied Job</Link>
    //         <Link to="changepassword">Change Password</Link>
    //         <Link to="myinbox">My Inbox</Link>
    //         <Link to="sent">Sent</Link>
    //         <Link to="logout">Logout</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Outlet />
    // </>
    <>
      <div>
        <div className="container-fluid p-3 border">
          <div className="row">
            <div className="container align-item-center justify-content-center w-80 vh-80 border">
              <div className="row">
                <div className="col-3 d-flex-col bg-white ">
                  <div className="text-center my-1">
                    <h5 className="text-success">Welcome Anil</h5>
                  </div>
                  <div className="container my-1 text-center">
                    <img
                      className="img-fluid"
                      src="My-self Photo (2).jpg"
                      alt=""
                      width="100px"
                      height="100px"
                    />
                  </div>

                  <div className="container-fluid">
                    <div class="input-group">
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="inputGroupFileAddon04"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                  <div className="my-1 me-3 ">
                    <div
                      className={`text-center ms-3 me-5 my-2 border ${
                        activeKey === "findjob" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("findjob")}>
                        Find Job
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2 border ${
                        activeKey === "jobseekeraccount"
                          ? "bg-info"
                          : "bg-warning"
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("jobseekeraccount")}
                      >
                        My Account
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2 border ${
                        activeKey === "jobmatch" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("jobmatch")}>
                        Job Matches
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2 border ${
                        activeKey === "appliedjob" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("appliedjob")}>
                        Applied Job
                      </a>
                    </div>

                    <div
                      className={`text-center ms-3 me-5 my-2 border ${
                        activeKey === "changepassword"
                          ? "bg-info"
                          : "bg-warning"
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("changepassword")}
                      >
                        Change Password
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-flex-col border">
                  <div className="row">
                    <div className="container bg-danger my-1">
                      <h6 className="text-center text-white  my-3">
                        Find Job here within a second!!
                      </h6>
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-6 d-flex-col my-3 ms-0 p-2 ">
                          <div className="mb-3">
                            <div className="d-flex">
                              <label
                                htmlFor="name"
                                className="label-control col-4 text-end"
                              >
                                <strong>Name:</strong>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-6 d-flex-col my-3 p-2">
                          <div>
                            <label
                              htmlFor="name"
                              className="label-control ms-3"
                            >
                              <strong>Skill:</strong>
                            </label>
                            <select name="select" id="select">
                              <option value="0">ASP.Net</option>
                              <option value="1">React Js</option>
                              <option value="2">Angular</option>
                              <option value="3">JavaScript</option>
                              <option value="4">.Net</option>
                            </select>
                            <form class="d-flex my-2 ms-5" role="search">
                              <button class="btn btn-success" type="submit">
                                Search
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container ">{renderComponent()}</div>
                  </div>
                </div>
                <div className="col-3 d-flex-col bg-white border">
                  <div
                    className={`text-center ms-3 me-5 my-2 border ${
                      activeKey === "myinbox" ? "bg-info" : "bg-warning"
                    }`}
                  >
                    <a href="#" onClick={() => setActiveKey("myinbox")}>
                      My Inbox
                    </a>
                  </div>
                  <div
                    className={`text-center ms-3 me-5 my-2 border ${
                      activeKey === "sent" ? "bg-info" : "bg-warning"
                    }`}
                  >
                    <a href="#" onClick={() => setActiveKey("sent")}>
                      My Sent
                    </a>
                  </div>
                  <div
                    className={`text-center ms-3 me-5 my-2 border ${
                      activeKey === "logout" ? "bg-info" : "bg-warning"
                    }`}
                  >
                    <a href="/" onClick={() => setActiveKey("/")}>
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default JobseekerLayout;
