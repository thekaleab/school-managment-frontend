import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "./footer.css"
const Home = () => {

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
                                <Link to="/login" className="nav-link active">Login</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div>
                <div className="container">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.</p>
                </div>


                <div className="container px-4">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="p-3 border bg-light">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                                    not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                                    not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.</p></div>
                        </div>
                    </div>
                </div>
                <div>

                </div>

            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
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

export default Home