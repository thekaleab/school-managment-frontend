
const Course = (props)=>{
    return (
        // <h1>{props.userlist[0]}</h1>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Course Code</th>
                        <th scope="col">Course Name</th>
                        <th scope="col">Professor</th>
                        <th scope="col">Apply</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        {/* <th scope="row">1</th> */}
                        <td>{props.courseCode}</td>
                        <td>{props.courseName}</td>
                        <td>{props.professor}</td>
                        <td> <button>Apply</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default Course;