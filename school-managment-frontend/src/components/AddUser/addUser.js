import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
const AddUser = () => {

    const [role, setRole] = useState(1)
    const myForm = useRef()
    const navigate = useNavigate();

    const onSubmit = ()=>{
        const form = myForm.current
        const data = {
            firstName :form['firstName'].value,
            lastName : form['lastName'].value,
            email : form['email'].value,
            password : form['password'].value,
            roles : ({role}.role=='1') ? [{
                roleId : 1,
                name : "STUDENT"
            }] : [{
                roleId : 2,
                name : "PROFESSOR"
            }]
        }
        axios.post("http://localhost:8080/api/v1/users",data).then(x=>console.log("success")).catch(x=>console.log(x))
        navigate("/add-user")
    }
    return (

        <div className="container-sm">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <form ref={myForm}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">First Name</label>
                    <input type="text" className="form-control" label = {'firstName'} name = {'firstName'}/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                    <input type="text" className="form-control" label = {'lastName'} name = {'lastName'} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="text" className="form-control" label = {'email'} name = {'email'}/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="text" className="form-control" label = {'password'} name = {'password'}/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Role</label>
                    <select className="form-select" aria-label="Default select example" value={role} onChange={(e)=>{
                        const selectedRole = e.target.value
                        setRole(selectedRole)
                    }}>
                        <option value="1">STUDENT</option>
                        <option value="2">PROFESSOR</option>
                    </select>
                </div>
                <button type="button" className="btn btn-primary" onClick={onSubmit}>Add User</button>
            </form>
        </div>


    )

}
export default AddUser;