import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const Studentss = (props) => {
    const navigate = useNavigate()

    const myForm = useRef()

    const onSubmit = (e)=>{
        e.preventDefault()
        const form = myForm.current
        const data = {
            firstName : props.firstName,
            finalResults : form['grade'].value
        }
        axios.interceptors.request.use(
            config => {
                
                const token = localStorage.getItem("access token")
                if(token!=null){
                    config.headers['Authorization'] = 'Bearer ' + token
                    config.headers['Content-Type'] = 'application/json';
                    config.headers.common['Access-Control-Allow-Origin'] = '*'
                }
                return config

            },
            error =>{
                Promise.reject(error)
            }
        )
        axios.put("http://localhost:8080/api/v1/grades", data).then(x => console.log("success")).catch(x => console.error(x))
        navigate("/list-students")

    }

    return (

        // <h1>{props.userlist[0]}</h1>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Publish Grades</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        {/* <th scope="row">1</th> */}
                        <td>{props.firstName}</td>
                        <td>{props.lastName}</td>
                        <td>{props.email}</td>
                        <td>
                            <form ref={myForm}>
                                <input type= "text" name = {'grade'} label = {'grade'}/>
                                <label><button onClick={onSubmit}>Insert grade</button></label>
                            </form>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default Studentss