import logo from "../assets/Shosan-Acodemia-Logo-small2.png";
import { AppContext } from "../context/AppContext";
import ExitExamButton from "./ExitExamButton"
import { useContext } from 'react';


function ScorePage() {
    const homeLink = "/";
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
                xs:top-[15%] top-[8%]">
                <div className="text-center font-poppins font-semibold text-[40px] mb-4">
                    SHOSAN COMPUTER BASED TEST
                </div>

                <div className="text-center font-poppins text-[20px] italic w-[50%] mb-[30px]">
                    Your score sheet is presented below. 
                    Click on the Print button below to print your score sheet.
                </div>

                <div className="text-center font-poppins font-semibold text-[30px] mb-[100px]">
                    Your score is: {scoreText}
                </div>

                <div className="flex justify-center items-center w-full mb-[30px]">
                    <button 
                        type="button" 
                        onClick={printScore} 
                        className="bg-blue-gradient2 text-white w-[30%]">
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