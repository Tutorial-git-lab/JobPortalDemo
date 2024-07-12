import React from "react";
import Login from "./Login";
import SearchBox from "./SearchBox";

const Home = () => {
  return (
    <>
      <div className="container-fluid my-0 ">
        <div className="row">
          <div className="col-8 d-flex-col ">
            <img
              src="logo/online-job-portal.jpg"
              alt=""
              height={320}
              width={700}
            />
            <div className="container-fluid">
              <SearchBox />
            </div>
          </div>

          <Login />
        </div>
      </div>
    </>
  );
};
export default Home;
