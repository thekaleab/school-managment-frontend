import { useRef } from "react"

const Studentss = (props) => {

    const myForm = useRef()

    const onSubmit = (e)=>{
        e.preventDefault()
        const form = myForm.current
        const data = {
            finalResults : form['grade'].value
        }
        console.log(data)

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