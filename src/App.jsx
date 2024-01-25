import "./App.css"
import {AddEmployee,EditEmployee,EmployeeDetail,EmployeeList} from "./pages"
import { BrowserRouter, Route,Routes } from "react-router-dom";

function App() {
 
  return (
    <div className="container">
      <h1>บันทึกเวลาเข้า-ออกใการปฏิบัติงานในหน่วยงาน </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employee/create" element={<AddEmployee />}></Route>
          <Route path="/employee/edit/:id" element={<EditEmployee />}></Route>
          <Route path="/employee/detail/:id" element={<EmployeeDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
