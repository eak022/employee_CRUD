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

    const currentDate = new Date().toISOString().split("T")[0];

    const thaiTimeOptions = { timeZone: "Asia/Bangkok", hour12: false, hour: "numeric", minute: "numeric", second: "numeric" };
    const formattedTime = new Intl.DateTimeFormat("en-US", thaiTimeOptions).format(new Date(employee.time));

    const employeeData = {
      name: employee.name,
      date: currentDate,
      time: formattedTime, // เปลี่ยนรูปแบบเวลาเป็น string ที่ถูกต้องตาม timezone
      section: employee.section,
    };

  return (
    <div>
      {/* ... (previous JSX code) */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
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

