import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import User from "./user"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"

import Studentss from "./Studentss"

const ListOfStudents = () => {
    const navigate = useNavigate()
    const onClick = () => {
        localStorage.removeItem("access token")
    }
    const [course, setCourse] = useState([])
    const intercept = () => {
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem("access token")
                if (token != null) {
                    config.headers['Authorization'] = 'Bearer ' + token
                    config.headers['Content-Type'] = 'application/json';
                    config.headers.common['Access-Control-Allow-Origin'] = '*'
                }
                return config

            },
            error => {
                Promise.reject(error)
            }
        )
    }

    const courseList = course.map(x => {
        return <Studentss
            firstName={x.firstName}
            lastName={x.lastName}
            email={x.email} />
    })



    const lists = () => {
        axios.get("http://localhost:8080/api/v1/users/students").then(x => setCourse(x.data)).catch(x => console.error(x))
    }
    useEffect(() => intercept(), [])
    useEffect(() => lists(), [])


    return (
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

            {/* <div>
                {<User list = {user}/>}
            </div> */}


            {courseList}



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
export default ListOfStudents;