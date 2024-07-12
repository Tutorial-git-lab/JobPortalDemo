import React from "react";

export default function AssignRole() {
  return (
    <>
      <div className="d-flex align-item-center justify-content-center w-80 vh-40 ">
        <div className="form_container rounded bg-white w-80 my-1">
          <div className="row">
            <div className="d-flex justify-content-center ">
              <h5 className="text-center mb-2 my-1 ">Assign Role</h5>
            </div>

            <div className="col-12 d-flex-col p-2 ">
              <div className="form-group d-flex p-3 row">
                <label htmlFor="username" className="form-label col-4 text-end">
                  <strong>User Name:</strong>
                </label>
                <select name="select" id="selectId" className="col-7">
                  <option value="0">anildhakad872@gmail.com</option>
                  <option value="1">sunildhakad8712@gmail.com</option>
                  <option value="2">hariomdhakad74@gmail.com</option>
                  <option value="3">krishnadhakad7847@gmail.com</option>
                  <option value="4">Bhavishyadhakad747@gmail.com</option>
                </select>
              </div>
              <div className="form-group d-flex p-3 row">
                <label
                  htmlFor="assignrole"
                  className="form-label col-4 text-end"
                >
                  <strong>Role:</strong>
                </label>
                <select name="select" id="selectId" className="col-6">
                  <option value="4">Select Role</option>
                  <option value="0">Admin</option>
                  <option value="1">Employeer</option>
                  <option value="2">Employee</option>
                </select>
              </div>
              <div className="text-center p-2">
                <button className="btn btn-success" type="button">
                  Assign Role
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
