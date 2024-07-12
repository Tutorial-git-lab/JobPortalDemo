import { Outlet } from "react-router-dom";
import Logout from "./Logout";
import FindCandidates from "./FindCandidates";
import PostNewJob from "./PostNewJob";
import PostedJob from "./PostedJob";
import ProfileMatch from "./ProfileMatch";
import ChangePassword from "./Change Password";
import AppliedJob from "./AppliedJob";
import MyInbox from "./MyInbox";
import Sent from "./Sent";
import { useState } from "react";
import MyAccount from "./MyAccount";

const CompanyLayout = () => {
  const [activeKey, setActiveKey] = useState("postedjob");

  const renderComponent = () => {
    switch (activeKey) {
      case "findcandidate":
        return <FindCandidates />;
      case "postnewjob":
        return <PostNewJob />;
      case "postedjob":
        return <PostedJob />;
      case "companyaccount":
        return <MyAccount />;
      case "profilematch":
        return <ProfileMatch />;
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
    //         <Link to="findcandidate">Find Candidates</Link>
    //         <Link to="postnewjob">Post New Job</Link>
    //         <Link to="postedjob">Posted Jobs</Link>
    //         <Link to="companyaccount">Account</Link>
    //         <Link to="profilematch">Profile Match</Link>
    //         <Link to="appliedjob">Applied Jobs</Link>
    //         <Link to="changepassword">Change Password</Link>
    //         <Link to="myinbox">My Inbox</Link>
    //         <Link to="sent">Sent</Link>
    //         <Link to="logout">LogOut</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <>
    <>
      <div>
        <div className="container-fluid p-3 border">
          <div className="row">
            <div className="container align-item-center justify-content-center w-80 vh-80 border">
              <div className="row">
                <div className="col-3 d-flex-col bg-white my-1 border border-top-0">
                  <div className="text-center border my-1 bg-success ">
                    <h5>Welcome</h5>
                    <h6>Shivansh Solutions</h6>
                  </div>

                  <div className="my-3 me-3   ">
                    <div
                      className={`text-center ms-3 me-5 my-2 border  ${
                        activeKey === "findcandidate"
                          ? "bg-info "
                          : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("findcandidate")}>
                        Find Candidates
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2 border  ${
                        activeKey === "postnewjob" ? "bg-info " : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("postnewjob")}>
                        Post New Job
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2 border  ${
                        activeKey === "postedjob" ? "bg-info " : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("postedjob")}>
                        Posted Jobs
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2 border  ${
                        activeKey === "companyaccount"
                          ? "bg-info "
                          : "bg-warning"
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("companyaccount")}
                      >
                        My Account
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2 border  ${
                        activeKey === "profilematch" ? "bg-info " : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("profilematch")}>
                        Profile Match
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2 border  ${
                        activeKey === "appliedjob" ? "bg-info " : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("appliedjob")}>
                        Applied Jobs
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2 border  ${
                        activeKey === "changepassword"
                          ? "bg-info "
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
                    <div className="container bg-danger mx-1 my-1">
                      <h6 className="text-center text-white">
                        Find Students here within a second!!
                      </h6>
                    </div>
                    <div className="container row ">
                      <div className="col-5 d-flex-col my-1 ms-3 me-2 p-1">
                        <div className="d-flex mt-1 ">
                          <label
                            htmlFor="qualification"
                            className="label-control col-6 text-end"
                          >
                            <strong>Qualification:</strong>
                          </label>
                          <select name="Select" id="">
                            <option value="0">MBA</option>
                            <option value="1">MCA</option>
                            <option value="2">BCA</option>
                            <option value="3">B.Tech</option>
                            <option value="4">B.Com</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6 d-flex-col my-1  p-1">
                        <div>
                          <label htmlFor="name" className="label-control ms-3">
                            <strong>Skill:</strong>
                          </label>
                          <select name="select" id="">
                            <option value="0">ASP.Net</option>
                            <option value="1">React Js</option>
                            <option value="2">Angular</option>
                            <option value="3">JavaScript</option>
                            <option value="4">.Net</option>
                          </select>
                          <form class="d-flex mt-1" role="search">
                            <button class="btn btn-success ms-5" type="submit">
                              Search
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="container my-1">{renderComponent()}</div>
                  </div>
                </div>
                <div className="col-3 d-flex-col bg-white my-1 border ">
                  <div
                    className={`text-center ms-3 me-5 my-2 border  ${
                      activeKey === "myinbox" ? "bg-info " : "bg-warning"
                    }`}
                  >
                    <a href="/" onClick={() => setActiveKey("myinbox")}>
                      My Inbox
                    </a>
                  </div>
                  <div
                    className={`text-center ms-3 me-5 my-2 border  ${
                      activeKey === "sent" ? "bg-info " : "bg-warning"
                    }`}
                  >
                    <a href="#" onClick={() => setActiveKey("sent")}>
                      Sent
                    </a>
                  </div>
                  <div
                    className={`text-center ms-3 me-5 my-2 border  ${
                      activeKey === "logout" ? "bg-info " : "bg-warning"
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

export default CompanyLayout;
