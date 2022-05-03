import axios from "axios"
import { useNavigate } from "react-router-dom"

const Coursee = (props)=>{
    const navigate = useNavigate()
    const onSubmit = ()=>{
        const data = {
            "courseName" : props.courseName,
            "courseCode" : props.courseCode 
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
        axios.post("http://localhost:8080/api/v1/courses/enroll", data).then(x => console.log("success")).catch(x => console.error(x))
        navigate("/student")

    }

    return (
        // <h1>{props.userlist[0]}</h1>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Course Code</th>
                        <th scope="col">Course Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        {/* <th scope="row">1</th> */}
                        <td>{props.courseCode}</td>
                        <td>{props.courseName}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default Coursee;