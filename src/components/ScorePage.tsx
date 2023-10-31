/* eslint-disable @typescript-eslint/ban-ts-comment */
import { auth } from "../../FirebaseConfig";
import logo from "../assets/Shosan-Acodemia-Logo-small2.png";
import { AppContext } from "../context/AppContext";
import ExitExamButton from "./ExitExamButton"
import { useContext } from 'react';


function ScorePage() {
    const homeLink = "/";
    // @ts-ignore
    const studentName = auth.currentUser?.displayName.split(" ")[0];
    const { scoreText } = useContext(AppContext);

    const printScore = () => {
        console.log("Print Score");
    }



  return (
    <>
        <div className="relative flex justify-center items-center overflow-hidden w-full h-[100vh]">
            <div className="flex justify-start items-center overflow-hidden w-full 
                md:mt-0 sm:-mt-[200px] xs:mt-0 xxs:-mt-[27%] -mt-[10%]">

                <div className="md:w-[50%] md:h-[50%] sm:w-[90%] sm:h-[90%] xs:w-[95%] xs:h-[95%] 
                    w-[98%] h-[98%] md:ml-0 sm:-ml-[200px] ml-0">
                    <img src={logo} alt="logo" className="w-full h-full opacity-20"/>
                </div>
                
            </div>
            <div className="flex flex-col justify-center items-center w-full absolute z-[2] 
                xs:top-[15%] top-[16%]">
                <div className="text-center font-poppins font-semibold sm:text-[40px] xs:text-[28px] 
                    xxs:text-[21px] text-[16px] xxs:mb-4 mb-2">
                    SHOSAN COMPUTER BASED TEST
                </div>

                <div className="text-center font-poppins sm:text-[20px] xs:text-[18px] xxs:text-[15px] 
                    text-[13px] italic sm:w-[50%] xs:w-[70%] xxs:w-[85%] w-[95%] mb-[30px]">
                    Your score sheet is presented below. 
                    Click on the Print button below to print your score sheet.
                </div>

                <div className="flex xs:flex-row flex-col justify-center items-center w-full xs:mb-[100px] xxs:mb-[140px] mb-[80px]">
                    <div className="text-center font-poppins font-semibold sm:text-[30px] 
                        xs:text-[27px] xxs:text-[22px] text-[16px]">
                        Hello {studentName},<br className="xs:hidden block" /> your score is&nbsp;
                    </div>
                    <div className={`font-poppins font-bold sm:text-[30px] xs:text-[27px] xxs:text-[45px] 
                        text-[20px] xxs:ml-0 ml-1
                        ${scoreText < 40 ? "text-red-600" : ""}
                        ${scoreText >= 40 && scoreText < 70 ? "text-yellow-600" : ""}
                        ${scoreText >= 70 ? "text-blue-600" : ""}`}>
                        {scoreText}
                    </div>
                </div>

                <div className="flex justify-center items-center w-full sm:mb-[30px] xs:mb-[50px] mb-[40px]">
                    <button 
                        type="button" 
                        onClick={printScore} 
                        className="bg-blue-gradient2 text-white xxs:text-[16px] text-[14px] 
                        sm:w-[30%] xs:w-[50%] xxs:w-[80%] w-[70%]">
                        PRINT EXAM SCORE
                    </button>
                </div>

                <div className="flex justify-center items-center w-full">
                    <ExitExamButton linkVariable={homeLink} buttonText="EXIT CBT"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ScorePage