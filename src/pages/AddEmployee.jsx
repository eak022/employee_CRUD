import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    section: "ส่วนอำนวยการ", // Default section value
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const lastEmployeeId = employeeData.employee.length > 0 ? employeeData.employee[employeeData.employee.length - 1].id : 0;
    const newEmployeeId = lastEmployeeId + 1;

    const newEmployee = {
      id: newEmployeeId,
      name: employee.name,
      section: employee.section,
      date: new Date().toISOString().split('T')[0], // Add the current date
      time: new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }), // Add the current time
    };

    // Set the section to "ส่วนอำนวยการ" if not provided
    newEmployee.section = newEmployee.section || "ส่วนอำนวยการ";

    employeeData.employee.push(newEmployee);

    // ... (save data to the employee.json file or database)

    // Redirect to the employee list page after submission
    navigate("/employee/list");
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
                        disabled // Make it disabled
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
