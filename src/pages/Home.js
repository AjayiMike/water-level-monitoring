import {useState, useEffect} from "react"
import LiquidChart from 'react-liquidchart'
import { useHistory } from "react-router-dom";

const stops = [
    <stop key={1} stopColor="rgba(156, 163, 175)" offset="5%" />,
    <stop key={2} stopColor="rgba(156, 163, 175)" offset="50%" />,
    <stop key={3} stopColor="rgba(156, 163, 175)" offset="85%" />
];

const Home = () => {
    const history = useHistory()

    // eslint-disable-next-line
    const [waterLevel, setWaterLevel] = useState(49.514)

    useEffect(() => {
        const logedin = sessionStorage.getItem("LOGED_IN");
        if(logedin !== "true") {
            
            history.replace("/signin")
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className="w-full">
            <div className="flex justify-between items-center bg-purple-900 p-4">
                <h1 className="text-xl mr-10 font-bold text-white">Water Level Monitoring &amp; Control</h1>
                <i className="fas fa-cogs text-2xl text-white" onClick = {() => history.push("/settings")}></i>
            </div>
            <div className = "text-2xl font-bold mt-5 flex justify-evenly">
                <h2 className = "">Pump Status:</h2>
                <h2 className = "text-red-700">OFF</h2>
            </div>
            <div style={{
                width: '100%',
                height: '400px',
            }}className = "px-4">
                <LiquidChart
                    responsive
                    legend="Water Level"
                    value={waterLevel}
                    showDecimal
                    amplitude={4}
                    frequency={2}
                    animationTime={2000}
                    animationWavesTime={2250}
                    gradient={{
                        type: 1,
                        x1: 0,
                        x2: 0,
                        y1: 100,
                        y2: 0,
                        stops,
                    }}
                    postfix="%"
                    legendFontSize={0.1}
                    outerStyle={{fill: 'rgba(91, 33, 182)'}}
                    dryStyle={{fill: 'rgb(156, 163, 175)'}}
                    wetStyle={{fill: 'rgb(76, 29, 149)'}}
                />
            </div>
            <div className = "px-4 flex justify-between items-center">
                <p className = "font-2xl font-bold">CONTROL PUMP</p>
                <button className = "border-2 rounded-full border-purple-900 p-2 text-purple-900 font-bold">TURN ON</button>
            </div>
        </div>
    )
}

export default Home;