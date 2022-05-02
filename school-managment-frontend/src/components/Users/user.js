const User = (props) => {
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        {/* <th scope="row">1</th> */}
                        <td>{props.firstName}</td>
                        <td>{props.lastName}</td>
                        <td>{props.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default User