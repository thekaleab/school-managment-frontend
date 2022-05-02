import { useRef } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import * as Constant from "../../containers/urls"
import jwt_decode from "jwt-decode";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const myForm = useRef()
    const navigate = useNavigate()

    const onSumbit = () => {
        const form = myForm.current;
        const data = {
            email: form['email'].value,
            password: form['password'].value
        }
        axios.post("http://localhost:8080/api/v1/authenticate", data).then(x => {
            localStorage.setItem("access token", x.data.accessToken)
            console.log(x.data)
            if (x.data.role[0].name == "PROFESSOR") {
                navigate("/professor")
            }
            else if (x.data.role[0].name == "ADMIN") {
                navigate("/admin")
            }
            else if (x.data.role[0].name == "STUDENT") {
                navigate("/student")
            }
        }).catch(y => console.log(y))

        // console.log(localStorage.getItem("access"))
        // console.log(jwt_decode(localStorage.getItem("access")))
    }


    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Addis Ababa School</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="container-sm">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <form ref={myForm}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" label={'email'} name={'email'} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" >Password</label>
                        <input type="text" className="form-control" label={'password'} name={'password'} />
                    </div>
                    <button type="button" className="btn btn-primary mb-3" onClick={onSumbit}>Login</button>
                </form>
            </div>
            <div>
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


        </div>
    )

}
export default Login