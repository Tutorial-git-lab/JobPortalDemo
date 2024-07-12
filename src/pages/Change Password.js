import axios from "axios";
import React, { useEffect, useState } from "react";
import {} from "react-router-dom";
const ChangePassword = () => {
  const [id, setId] = useState();
  const [user, setUser] = useState();
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewpassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [btnChange, setBtnChange] = useState();

  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const AddChangePassword = (e) => {
    if (btnChange === "submit") {
      axios
        .post("", {
          id,
          currentPassword,
          newPassword,
          confirmPassword,
        })
        .then((result) => {
          console.log(result);
          alert("data added");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .put("", {
          id,
          currentPassword,
          newPassword,
          confirmPassword,
        })
        .then((result) => {
          console.log(result);
          alert("Data Added");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    debugger;
    e.preventDefault();
  };

  const DeleteData = (id) => {
    axios
      .delete("" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const EditData = (dataEdit) => {
    setId(dataEdit.id);
    setCurrentPassword(dataEdit.currentPassword);
    setNewpassword(dataEdit.newPassword);
    setConfirmPassword(dataEdit.confirmPassword);
    setBtnChange("saveChange");
  };

  return (
    <>
      <div className="d-flex align-item-center justify-content-center w-80 vh-40 ">
        <div className="form_container rounded bg-white w-80 my-1">
          <div className="row">
            <div className="d-flex justify-content-center ">
              <h5 className="text-center mb-0 p-1 ">Change Password</h5>
            </div>

            <div className="col-12 d-flex-col p-3 ">
              <div className="form-group d-flex mb-3 my-1 row">
                <label
                  htmlFor="currentPassword"
                  className="form-label col-5 text-end"
                >
                  <strong>Current Password:</strong>
                </label>
                <input
                  type="password"
                  className="col-5"
                  placeholder="Enter current password"
                />
              </div>
              <div className="form-group d-flex mb-3 my-1 row">
                <label
                  htmlFor="newPassword"
                  className="form-label col-5 text-end"
                >
                  <strong>New Password:</strong>
                </label>
                <input
                  type="password"
                  className="col-5"
                  placeholder="Enter new password"
                />
              </div>
              <div className="form-group d-flex mb-3 my-1 row">
                <label
                  htmlFor="confirm-password"
                  className="form-label col-5 text-end"
                >
                  <strong>Confirm Password:</strong>
                </label>
                <input
                  type="password"
                  className="col-5"
                  placeholder="Enter confi-password"
                />
              </div>

              <div className="text-center p-2">
                <button type="submit" className="btn btn-success">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Current Password</th>
              <th>New Password</th>
              <th>Confirm Password</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(user) &&
              user.map((val) => {
                return (
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.currentPassword}</td>
                    <td>{val.newPassword}</td>
                    <td>{val.confirmPassword}</td>
                    <td>
                      <button
                        className="bg-primary rounded-3 mb-1"
                        onClick={(e) => EditData(val)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-primary rounded-3"
                        onClick={() => DeleteData(val.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ChangePassword;
