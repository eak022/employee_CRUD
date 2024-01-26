import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    section: "ส่วนอำนวยการ", // Default section value
  });
  const [localTime, setLocalTime] = useState(""); // State to hold the local time
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://calm-gold-fish-gear.cyclic.app/localTime")
      .then((res) => res.json())
      .then((data) => {
        setLocalTime(data.localTime);
      })
      .catch((error) => {
        console.error("Error fetching local time:", error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use localTime when submitting the form
    const currentDate = new Date().toISOString();
    const formattedTime = localTime; // Use the local time fetched from the backend

    const newEmployee = {
      ...employee,
      id: 0, // You may want to adjust this based on your backend logic
      date: currentDate,
      time: formattedTime,
    };

    // The rest of your code for submitting the form

    // For testing purposes, log the newEmployee data
    console.log(newEmployee);

    // Clear the form or navigate to another page as needed
    setEmployee({
      name: "",
      section: "ส่วนอำนวยการ",
    });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Add new Employee</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        required
                        name="name"
                        id="name"
                        value={employee.name}
                        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="section">Section</label>
                      <input
                        type="text"
                        required
                        name="section"
                        id="section"
                        value={employee.section}
                        onChange={(e) => setEmployee({ ...employee, section: e.target.value })}
                        className="form-control"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="localTime">Local Time</label>
                      <input
                        type="text"
                        name="localTime"
                        id="localTime"
                        value={localTime}
                        className="form-control"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/employee/list" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
