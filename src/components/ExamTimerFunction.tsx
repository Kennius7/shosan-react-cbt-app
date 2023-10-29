import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";




function ExamTimerFunction() {
    const { 
        examTimeLimit, setExamTimeLimit, seconds, setSeconds, minutes, 
        setMinutes, hours, setHours, allottedExamTime
    } = useContext(AppContext);
    const [moreThanNineSeconds, setMoreThanNineSeconds] = useState(false);
    const [moreThanNineMinutes, setMoreThanNineMinutes] = useState(false);
    const Navigate = useNavigate()



    useEffect(() => {
        const setExamTimerInterval = setInterval(() => {
            setExamTimeLimit(() => examTimeLimit - 1);
        }, 1000);
        setSeconds(()=>Math.floor(examTimeLimit % 3600 % 60 ));
        setMinutes(()=>Math.floor(examTimeLimit % 3600 / 60));
        setHours(()=>Math.floor(examTimeLimit / 3600));
        if (minutes > 9) {
            setMoreThanNineMinutes(true);
        }
        if (seconds > 9) {
            setMoreThanNineSeconds(true);
        }
        if (minutes < 10) {
            setMoreThanNineMinutes(false);
        }
        if (seconds < 10) {
            setMoreThanNineSeconds(false);
        }
        if (examTimeLimit === 0) {
            Navigate("/score");
            setExamTimeLimit(allottedExamTime);
        }

        return () => {
            setTimeout(() => {
                clearInterval(setExamTimerInterval);
            }, 500);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [examTimeLimit])




    return (
        <>
            <div className="flex justify-center items-center text-yellow-600 font-semibold font-poppins 
                text-[20px]">
                <div>0{hours}</div>:
                <div className={`${moreThanNineMinutes ? "hidden" : "block"}`}>0</div>
                <div>{minutes}</div>:
                <div className={`${moreThanNineSeconds ? "hidden" : "block"}`}>0</div>
                <div>{seconds}</div>
            </div>
        </>
    )
}


export default ExamTimerFunction

