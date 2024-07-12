import axios from "axios";

import React, { useEffect, useState } from "react";

const Contact = () => {
  const [id, setId] = useState();
  const [user, setuser] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [message, setMessage] = useState();
  const [btnchange, setBtnchange] = useState();

  useEffect(() => {
    axios
      .get("https://localhost:7053/api/Contact/GetAllContacts")
      .then((response) => {
        console.log(response.data); // Log the response data
        setuser(response.data); // Set the state with the array data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const AddContact = (e) => {
    if (btnchange === "submit") {
      axios
        .post("https://localhost:7053/api/Contact/AddContact", {
          id,
          name,
          email,
          mobile,
          message,
        })
        .then((result) => {
          console.log(result);
          alert("Data Added");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .put("https://localhost:7053/api/Contact/UpdateContact", {
          name,
          email,
          mobile,
          message,
          id,
        })
        .then((result) => {
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
      .delete("https://localhost:7053/api/Contact/DeleteContact?Id=" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })

      .catch((error) => {
        console.log(error);
      });
  };
  const EditData = (dataedit) => {
    setId(dataedit.id);
    setName(dataedit.Name);
    setEmail(dataedit.Email);
    setMobile(dataedit.Mobile);
    setMessage(dataedit.Message);
    setBtnchange("saveChange");
  };

  return (
    <>
      <div>
        <form className="row g-4" onSubmit={AddContact}>
          <div className="col-md-5">
            <label htmlFor="name" className="form-label">
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="name123"
              placeholder="Enter your name"
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="email" className="form-label">
              <strong>Email:</strong>
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email123"
              placeholder="Enter your email"
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="mobile" className="form-label">
              <strong>Mobile:</strong>
            </label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="col-md-5">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
              id="message123"
              placeholder="Enter your message.."
            />
          </div>

          <div className="col-5">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-5">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Message Number</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(user) &&
              user.map((val) => {
                return (
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.mobile}</td>
                    <td>{val.message}</td>
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
export default Contact;
