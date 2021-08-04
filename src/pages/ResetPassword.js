import {useEffect} from "react"
import {useHistory} from "react-router-dom"
const ResetPassword = () => {
    const history = useHistory();

    useEffect(() => {
        const logedin = sessionStorage.getItem("LOGED_IN");
        if(logedin !== "true") {
            
            history.replace("/signin")
        }
        // eslint-disable-next-line
    }, [])

    return(
        <div className = "w-full p-4">
            <i className="fas fa-long-arrow-alt-left text-2xl font-bold text-purple-900" onClick = {() => history.goBack()}></i>

            <h1 className = "text-2xl text-center text-purple-900 font-bold mt-10 px-5">Change Authentication Password</h1>
            <form className = "mt-10 px-5">
                <div className = "mb-8">
                    <label htmlFor = "oldPassword" className = "block font-bold">Old</label>
                    <input className = "block border w-full p-2 border-gray-500 rounded" type = "text" id = "oldPssword" placeholder = "Old Password"/>
                </div>
                <div className = "mb-8">
                    <label htmlFor = "newPassword" className = "block font-bold">New</label>
                    <input className = "block border w-full p-2 border-gray-500 rounded" type = "text" id = "newPassword" placeholder = "New password"/>
                </div>
                <button type = "submit" className = "w-full bg-purple-900 p-3 rounded text-white font-bold">SUBMIT</button>
            </form>
        </div>
    )
}

export default ResetPassword;