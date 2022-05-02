import { Link } from "react-router-dom";

const AddGrade = () => {
    const onClick = () => {
        localStorage.removeItem("access token")
    }

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
                                <li><Link to="/add-grades" className="nav-link active">Add Grades</Link></li>
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
                <form>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">First Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="text" className="form-control" />
                    </div>
                </form>
            </div>

        </div>

    )

}

export default AddGrade;