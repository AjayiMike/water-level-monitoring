import { useHistory } from "react-router-dom";
const Signin = () => {
    const history = useHistory();
    const signInHandler = (e) => {
        
        e.preventDefault();
        history.push("/")
    }
    return(
        <div className = "w-full p-4">
            <h1 className = "text-2xl text-center text-purple-900 font-bold mt-16">Sign In to water level monitoring system app</h1>
            <form className = "mt-10 px-5" onSubmit = {signInHandler}>
                <div className = "mb-8">
                    <label htmlFor = "email" className = "block font-bold">Email</label>
                    <input className = "block border w-full p-2 border-gray-500 rounded" type = "email" id = "email" placeholder = "example@example.com"/>
                </div>
                <div className = "mb-8">
                    <label htmlFor = "password" className = "block font-bold">Password</label>
                    <input className = "block border w-full p-2 border-gray-500 rounded" type = "password" id = "password" placeholder = "your password"/>
                </div>
                <button type = "submit" className = "w-full bg-purple-900 p-3 rounded text-white font-bold">SIGN IN</button>
            </form>
        </div>
    )
}

export default Signin;