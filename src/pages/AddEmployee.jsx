import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    section: "ส่วนอำนวยการ", // Default section value
  });

  const [lastEmployeeId, setLastEmployeeId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the last employee ID from the server
    fetch("https://calm-gold-fish-gear.cyclic.app/employees")
      .then((res) => res.json())
      .then((data) => {
        const lastId = data.employee.length > 0 ? data.employee[data.employee.length - 1].id : 0;
        setLastEmployeeId(lastId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString().split("T")[0];
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    const newEmployeeId = lastEmployeeId + 1;

    const employeeData = {
      id: newEmployeeId,
      name: employee.name,
      date: currentDate,
      time: currentTime,
      section: employee.section,
    };

    fetch("https://calm-gold-fish-gear.cyclic.app/employees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(employeeData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Save successfully");
        navigate("/employee/list");
      })
      .catch((err) => {
        console.log(err);
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

