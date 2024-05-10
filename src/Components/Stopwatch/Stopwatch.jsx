

import './Stopwatch.css';
import { useState, useEffect } from 'react';


const Stopwatch = ()=>{

    const[time, setTime] = useState(0);
    const[timerOn, setTimerOn] = useState(false);

    const formatTime = (seconds) => {
        if (seconds === 0) {
            return '0:00';
        }

        const minutes = Math.floor(seconds / 60);
        const remainingSecs = seconds % 60;

       
        const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const displaySeconds = remainingSecs < 10 ? `0${remainingSecs}` : remainingSecs;

        return `${displayMinutes}:${displaySeconds}`;
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

            <h4 className='timer'>Time: {formatTime(time)}</h4>

            <div className="btns">
                <button className="startBtn" onClick={handleStart}>
                    {timerOn?"Stop":"Start"}</button>
                <button className="resetBtn" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch;