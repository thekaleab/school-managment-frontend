import { Routes, Route } from "react-router-dom"
import AddGrade from "../components/AddGrades/addGrades"
import AddUser from "../components/AddUser/addUser"
import Admin from "../components/Admin/admin"
import Login from "../components/Login/login"
import Professor from "../components/Professor/proffesor"
import Student from "../components/Student/student"
import Dashboard from "../content/Dashboard"
const PageRouter = () => {
   return (
      <div>
         <Routes>
            <Route path="/login" element = {<Login />} />
            <Route path="/add-user" element = {<AddUser />} />
            <Route path="/add-grades" element = {<AddGrade />} />

            <Route path="/student" element = {<Student />} />
            <Route path="/admin" element = {<Admin />} />
            <Route path="/professor" element = {<Professor />} />
            
       </Routes>
      </div>

   )

}

export default PageRouter