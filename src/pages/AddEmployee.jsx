import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    section: "ส่วนอำนวยการ", // Default section value
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString().split("T")[0];

    // ปรับให้ได้เวลาในเขตเวลาของประเทศไทย (GMT+7)
    const thaiTimeOptions = { timeZone: "Asia/Bangkok", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" };
    const formattedTime = new Intl.DateTimeFormat("th-TH", thaiTimeOptions).format(new Date());

    const employeeData = {
      name: employee.name,
      date: currentDate,
      time: formattedTime,
      section: employee.section,
    };

    try {
      const response = await fetch("https://calm-gold-fish-gear.cyclic.app/employees", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(employeeData),
      });

      const responseData = await response.json();
      console.log(responseData);

      alert("Save successfully");
      navigate("/"); // หรือ navigate("/employee/list") ตามที่คุณต้องการ

    } catch (error) {
      console.error(error);
    }
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


