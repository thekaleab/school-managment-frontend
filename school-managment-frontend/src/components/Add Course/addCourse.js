import axios from "axios"
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

const AddCourse = ()=>{
    const myForm = useRef()
    const navigate = useNavigate()
    const onSubmit = ()=>{
        const form = myForm.current
        const data = {
            courseName: form['courseName'].value,
            courseCode : form['courseCode'].value,
            professor : form['professor'].value
        }
        console.log(data) 
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
        axios.post("http://localhost:8080/api/v1/courses", data).then(x => console.log("success")).catch(x => console.error(x))
        navigate("/admin")

    }
    const onClick = () => {
        localStorage.removeItem("access token")
    }
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Addis Ababa School</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <li><Link to="/home" className="nav-link active">Home</Link></li>
                        </li>
                        <li className="nav-item">
                            <li><Link to="/home" className="nav-link active">About Us</Link></li>
                        </li>
                        <li className="nav-item">
                            <li><Link to="/" onClick={onClick} className="nav-link active">Logout</Link></li>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <div className="container-sm">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <form ref={myForm}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Course Name</label>
                        <input type="text" className="form-control" label={'courseName'} name={'courseName'} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Course Code</label>
                        <input type="text" className="form-control" label={'courseCode'} name={'courseCode'} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Professor Name</label>
                        <input type="text" className="form-control" label={'professor'} name={'professor'} />
                    </div>
                    
                    {/* <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Role</label>
                        <select className="form-select" aria-label="Default select example" value={role} onChange={(e) => {
                            const selectedRole = e.target.value
                            setRole(selectedRole)
                        }}>
                            <option value="1">STUDENT</option>
                            <option value="2">PROFESSOR</option>
                        </select>
                    </div> */}
                    <button type="button" className="btn btn-primary" onClick={onSubmit}>Add User</button>
                </form>
            </div>
            <div></div>


            <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              

        <footer>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <h3>Site Map</h3>
                                <ul className="list-unstyled three-column">
                                    <li>Home</li>
                                    <li>Services</li>
                                    <li>About</li>
                                    <li>Code</li>
                                    <li>Design</li>
                                    <li>Host</li>
                                    <li>Contact</li>
                                    <li>Company</li>
                                </ul>
                                <ul className="list-unstyled socila-list">
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <h3>latest Articles</h3>
                                <div className="media">
                                    <a href="#" className="pull-left">
                                        <img src="http://placehold.it/64x64" alt="" className="media-object" />
                                    </a>
                                    <div className="media-body">
                                        <h4 className="media-heading">Programming</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>

                                <div className="media">
                                    <a href="#" className="pull-left">
                                        <img src="http://placehold.it/64x64" alt="" className="media-object" />
                                    </a>

                                </div>

                                <div className="media">
                                    <a href="#" className="pull-left">
                                        <img src="http://placehold.it/64x64" alt="" className="media-object" />
                                    </a>

                                </div>

                            </div>

                            <div className="col-lg-4">
                                <h3>Our Work</h3>
                                <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                                <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                                <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                                <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                            </div>

                        </div>
                    </div>

                </footer>
        </div>
    )

}
export default AddCourse