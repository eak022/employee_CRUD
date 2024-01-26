import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

app.post('/employees', (req, res) => {
  const lastEmployeeId = employeeData.employee.length > 0 ? employeeData.employee[employeeData.employee.length - 1].id : 0;
  const newEmployeeId = lastEmployeeId + 1;

  const newEmployee = req.body;
  newEmployee.id = newEmployeeId;
  newEmployee.date = new Date().toISOString().split('T')[0]; // Add the current date
  newEmployee.time = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }); // Add the current time

  // Set the section to "ส่วนอำนวยการ" if not provided
  newEmployee.section = newEmployee.section || "ส่วนอำนวยการ";

  employeeData.employee.push(newEmployee);

  // ... (save data to the employee.json file or database)

  res.json(newEmployee); // Send the data of the newly added employee
});

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


