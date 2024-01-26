import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

app.post('/employees', (req, res) => {
  const lastEmployeeId = employeeData.employee.length > 0 ? employeeData.employee[employeeData.employee.length - 1].id : 0;
  const newEmployeeId = lastEmployeeId + 1;

  const newEmployee = req.body;
  const handleSubmit = (e) => {
  e.preventDefault();

  const currentDate = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Bangkok", // Set the timezone to Thailand (GMT+7)
    dateStyle: "short",
  });

  const currentTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Bangkok", // Set the timezone to Thailand (GMT+7)
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const employeeData = {
    name: employee.name,
    date: currentDate,
    time: currentTime,
    section: employee.section,
  };

  // ... rest of the code remains the same
};
  return (
    <div>
      {/* ... (previous JSX code) */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit" onClick={handleSubmit}>
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
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


