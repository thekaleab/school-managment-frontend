import { Routes, Route } from "react-router-dom"
import AddGrade from "../components/AddGrades/addGrades"
import AddUser from "../components/AddUser/addUser"
import Login from "../components/Login/login"
import Dashboard from "../content/Dashboard"
const PageRouter = () => {
   return (
      <div>
         <Routes>
            <Route path="/login" element = {<Login />} />
            <Route path="/add-user" element = {<AddUser />} />
            <Route path="/add-grades" element = {<AddGrade />} />
       </Routes>
      </div>

   )

}

export default PageRouter