import BackButton from "./BackButton";
import StartQuizButton from "./StartQuizButton";
import { examData } from "./examQuestionData";


function HomePage() {
  const backLink = "/";
  const quizLink = "/quiz";

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full h-[100vh]">

        <div className="flex flex-col justify-center items-center md:mt-0 sm:mt-[10px] mt-0">

          <div className="font-poppins text-red-700 font-semibold md:text-[28px] sm:text-[24px] 
            xs:text-[22px] text-[18px]">
            READ BEFORE STARTING!
          </div>

          <div className="text-start text-primary italic md:w-[50%] sm:w-[62%] xs:w-[80%] xxs:w-[90%] w-[94%] 
            sm:mt-[50px] xs:mt-[20px] mt-[10px] md:text-[22px] sm:text-[18px] xs:text-[16px] text-[14px]">

            <span>
              PLEASE TAKE NOTE THAT CLICKING ON THE NEXT BUTTON OR THE SUBMIT BUTTON AFTER ANSWERING 
              THE LAST&nbsp; 
              <span className="text-red-700 font-semibold">(Number {examData.length})</span> 
              &nbsp;QUESTION WILL SIGNAL THE END OF THE TEST.
            </span>

            &nbsp;YOU CAN GO BACK TO PREVIOUS QUESTIONS ONLY IF YOU HAVE NOT DONE THE ABOVE.
            SO BE SURE BEFORE SUBMITING!

          </div>

          <div className="text-start md:w-[50%] sm:w-[62%] xs:w-[80%] xxs:w-[90%] w-[94%] md:mt-[50px] 
            sm:mt-[30px] xs:mt-[20px] mt-[20px] md:text-[22px] sm:text-[18px] xs:text-[16px] text-[14px]">
            <div>
              When you're ready to start, click on the&nbsp;
              <span className="text-red-700 font-semibold">Start Quiz</span>&nbsp;button right below. 
              The timer will start counting down immediately after.
            </div>
          </div>

        </div>

        <div className="flex justify-between items-center absolute z-1 md:bottom-10 sm:bottom-4 xs:bottom-20 
          xxs:bottom-36 bottom-20 md:w-[50%] sm:w-[62%] xs:w-[80%] xxs:w-[90%] w-[94%]">
          <BackButton
            linkVariable={backLink}
            buttonText="Back"/>

          <StartQuizButton 
            linkVariable={quizLink} 
            buttonText="Start Quiz"/>
        </div>

      </div>
    </>
  )
}

export default HomePage
