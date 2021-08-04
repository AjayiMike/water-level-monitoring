import {useEffect} from "react"
import {useHistory} from "react-router-dom"
const SetThresholdLevel = () => {
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
            <h1 className = "text-2xl text-center text-purple-900 font-bold mt-10">Set Threshold Level</h1>
            <form className = "mt-10 px-5">
                <div className = "mb-8">
                    <label htmlFor = "min" className = "block font-bold mb-2">Min</label>
                    <input className = "block border w-full p-2 border-gray-500 rounded" type = "number" id = "min" placeholder = "minimum water level"/>
                </div>
                <div className = "mb-8">
                    <label htmlFor = "max" className = "block font-bold mb-2">Max</label>
                    <input className = "block border w-full p-2 border-gray-500 rounded" type = "number" id = "max" placeholder = "maximum water level"/>
                </div>
                <button type = "submit" className = "w-full bg-purple-900 p-3 rounded text-white font-bold">SAVE</button>
            </form>
        </div>
    )
}

export default SetThresholdLevel;