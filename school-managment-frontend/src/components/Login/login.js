import { useRef } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import * as Constant from "../../containers/urls"
import jwt_decode from "jwt-decode";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const myForm= useRef()
    const navigate = useNavigate()

    const onSumbit = ()=>{
        const form = myForm.current;
        const data = {
            email : form['email'].value,
            password : form['password'].value
        }
        axios.post("http://localhost:8080/api/v1/authenticate", data).then(x=>{
            localStorage.setItem("access token", x.data.accessToken)
            console.log(x.data)
            if(x.data.role[0].name=="PROFESSOR"){
                navigate("/professor")
            }
            else if(x.data.role[0].name=="ADMIN"){
                navigate("/admin")
            }
            else if(x.data.role[0].name=="STUDENT"){
                navigate("/student")
            }
        }).catch(y=>console.log(y))
        
        // console.log(localStorage.getItem("access"))
        // console.log(jwt_decode(localStorage.getItem("access")))
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
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" label = {'email'} name = {'email'}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" >Password</label>
                    <input type="text" className="form-control" label = {'password'} name = {'password'}/>
                </div>
                <button type="button" className="btn btn-primary mb-3" onClick={onSumbit}>Login</button>
            </form>
        </div>
    )

}
export default Login