import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import AdminLayout from "./pages/AdminLayout";
import About from "./pages/About";
import Career from "./pages/Career";
import Services from "./pages/Services";
import CompanyLayout from "./pages/CompanyLayout";
import JobseekerLayout from "./pages/JobseekerLayout";
import Header from "./Header";
import Header2 from "./pages/Header2";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobMatch from "./pages/JobMatch";
import ChangePassword from "./pages/Change Password";
import MyInbox from "./pages/MyInbox";
import Sent from "./pages/Sent";
import Logout from "./pages/Logout";
import FindJob from "./pages/FindJob";
import FindCandidates from "./pages/FindCandidates";
import PostNewJob from "./pages/PostNewJob";
import PostedJob from "./pages/PostedJob";
import ProfileMatch from "./pages/ProfileMatch";
import MyAccount from "./pages/MyAccount";
import AppliedJob from "./pages/AppliedJob";
import JobSeekerReport from "./pages/JobSeekerReport";
import CompanyReport from "./pages/CompanyReport";
import FeedBackReport from "./pages/FeedBackReport";
import JobSeekerRegistration from "./pages/JobSeekerRegister";
import CompanyRegister from "./pages/CompanyRegister";
import AssignRole from "./pages/AssignRole";
import ChangeRole from "./pages/ChangeRole";
import Login1 from "./pages/Login1";
import SearchBox from "./pages/SearchBox";
import JobSeekerAccount from "./pages/JobSeekerAccount";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <div className="container-fluid p-3 border">
        <BrowserRouter>
          <div className="container-fluid  my-2 border">
            <div className="row">
              <div className="col-4 d-flex-col border">
                <Header />
              </div>
              <div className="col-8 d-flex-col border">
                <Header2 />
              </div>
            </div>
          </div>

          <div className="col-12 d-flex-col border">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="career" element={<Career />} />
                <Route path="login1" element={<Login1 />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NoPage />} />
              </Route>

              <Route path="/admin" element={<AdminLayout />}>
                <Route path="jobseekerreport" element={<JobSeekerReport />} />
                <Route path="companyreport" element={<CompanyReport />} />
                <Route path="feedbackreport" element={<FeedBackReport />} />
                <Route path="assignrole" element={<AssignRole />} />
                <Route path="changerole" element={<ChangeRole />} />
                <Route path="logout" element={<Logout />} />
              </Route>

              <Route path="/company" element={<CompanyLayout />}>
                <Route path="findcandidate" element={<FindCandidates />} />
                <Route path="postnewjob" element={<PostNewJob />} />
                <Route path="postedjob" element={<PostedJob />} />
                <Route path="companyaccount" element={<MyAccount />} />
                <Route path="profilematch" element={<ProfileMatch />} />
                <Route path="appliedjob" element={<AppliedJob />} />
                <Route path="changepassword" element={<ChangePassword />} />
                <Route path="myinbox" element={<MyInbox />} />
                <Route path="sent" element={<Sent />} />
                <Route path="logout" element={<Logout />} />
              </Route>

              <Route path="/jobseeker" element={<JobseekerLayout />}>
                <Route path="findjob" element={<FindJob />} />
                <Route path="jobseekeraccount" element={<JobSeekerAccount />} />
                <Route path="jobmatch" element={<JobMatch />} />
                <Route path="appliedjob" element={<AppliedJob />} />
                <Route path="changepassword" element={<ChangePassword />} />
                <Route path="myinbox" element={<MyInbox />} />
                <Route path="sent" element={<Sent />} />
                <Route path="logout" element={<Logout />} />
              </Route>

              <Route
                path="jobseeekerregister"
                element={<JobSeekerRegistration />}
              ></Route>
              <Route
                path="companyRegister"
                element={<CompanyRegister />}
              ></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="searchbox" element={<SearchBox />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
