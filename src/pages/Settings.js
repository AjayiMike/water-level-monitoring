import {useEffect} from "react"
import { useHistory } from "react-router-dom";
const Settings = () => {
    const history = useHistory();

    useEffect(() => {
        const logedin = sessionStorage.getItem("LOGED_IN");
        if(logedin !== "true") {
            
            history.replace("/signin")
        }
        // eslint-disable-next-line
    }, [])

    return(
        <div className = "w-full">
            <div className = "flex justify-between items-center font-bold p-4 text-2xl bg-purple-900 p-4 text-white">
                <i className="fas fa-long-arrow-alt-left" onClick = {() => history.goBack()}></i>
                <h1 className = "">Settings</h1>
            </div>
            <div className = "mt-16 p-4">
                <div classsName = "mb-4">
                    <h3 className = "text-2xl text-center text-purple-900 mb-4">Current Threshold Level</h3>
                    <div className = "flex justify-between py-2 text-bold text-xl border-b-4 mb-4">
                        <p className = "">Min</p>
                        <p className = "font-bold text-purple-900">20.4%</p>
                    </div>
                    <div className = "flex justify-between py-2 text-bold text-xl border-b-4 mb-4">
                        <p className = "">Min</p>
                        <p className = "font-bold text-purple-900">95.8%</p>
                    </div>
                </div>
                <div className = "flex justify-between items-end py-2 text-bold text-xl border-b-4 mb-4">
                    <p className = "">Set New Threshold Level</p>
                    <button className = "border border-purple-900 p-1 px-4 text-purple-900 rounded" onClick = {() => history.push("/threshold")}>Edit</button>
                </div>
                <div className = "flex justify-between items-end py-2 text-bold text-xl border-b-4 mb-4">
                    <p className = "">Password</p>
                    <button className = "border border-purple-900 p-1 px-4 text-purple-900 rounded" onClick = {() => history.push("/reset-password")}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Settings;