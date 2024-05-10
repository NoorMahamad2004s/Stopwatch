

import './Stopwatch.css';
import { useState, useEffect } from 'react';


const Stopwatch = ()=>{

    const[time, setTime] = useState(0);
    const[timerOn, setTimerOn] = useState(false);

    const formatTime = (seconds)=>{
        const minutes = Math.floor(seconds/60);
        const remainingSecs = seconds%60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSecs).padStart(2, '0');

        return `Time: ${formattedMinutes}:${formattedSeconds}`;
    }


    useEffect(()=>{

        let myTimer;
        if(timerOn){
            myTimer = setInterval(()=>setTime(time+1),1000);
        }

        return ()=>clearInterval(myTimer);

    },[timerOn,time]);





    const handleStart = ()=>{
        setTimerOn(!timerOn)
    }

    const handleReset = ()=>{
        setTime(0);
        setTimerOn(false)
    }



    return (
        
        <div className="container">
            <h2 className="heading">Stopwatch</h2>

            <h4 className='timer'>{formatTime(time)}</h4>

            <div className="btns">
                <button className="startBtn" onClick={handleStart}>
                    {timerOn?"Stop":"Start"}</button>
                <button className="resetBtn" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch;