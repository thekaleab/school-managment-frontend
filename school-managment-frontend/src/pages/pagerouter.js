import { Routes, Route } from "react-router-dom"
import AddCourse from "../components/Add Course/addCourse"
import AddGrade from "../components/AddGrades/addGrades"
import AddUser from "../components/AddUser/addUser"
import Admin from "../components/Admin/admin"
import Courses from "../components/Courses/courses"
import EnrolledCourses from "../components/Courses/enrolledCourses"
import Header from "../components/Home/Header"
import Home from "../components/Home/Home"
import Login from "../components/Login/login"
import ListOfStudents from "../components/Professor/ListOfStudents"
import Professor from "../components/Professor/proffesor"
import Student from "../components/Student/student"
import Users from "../components/Users/users"
import Dashboard from "../content/Dashboard"
const PageRouter = () => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Header />} /> */}

            <Route path="/login" element={<Login />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/add-grades" element={<AddGrade />} />
            <Route path="/add-courses" element={<AddCourse />} />

            <Route path="/list-users" element={<Users />} />
            <Route path="/list-courses" element={<Courses />} />
            <Route path="/list-students" element={<ListOfStudents />} />
            <Route path="/enrolled-courses" element={<EnrolledCourses />} />

            <Route path="/student" element={<Student />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/professor" element={<Professor />} />

            

         </Routes>
      </div>

   )

}

export default PageRouter