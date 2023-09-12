import BackButton from "./BackButton";
import StartQuizButton from "./StartQuizButton";


function HomePage() {
  const backLink = -1;
  const quizLink = "/quiz";

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full h-[100vh]">

        <div className="flex flex-col justify-center items-center">

          <div className="text-[28px] font-poppins text-primary font-semibold">
            NOTE OF WARNING!
          </div>

          <div className="text-start text-primary italic w-[50%] mt-[50px] text-[22px]">

            <span>
              PLEASE TAKE NOTE THAT CLICKING ON THE NEXT BUTTON AFTER ANSWERING THE LAST&nbsp; 
              <span className="text-blue-600">(Number 10)</span> 
              &nbsp;QUESTION WILL SIGNAL THE END OF YOUR EXAM!
            </span>

            &nbsp;YOU CAN GO BACK TO PREVIOUS QUESTIONS ONLY IF YOU HAVE NOT DONE THE ABOVE.
            So think thoroughly before submitting!

          </div>

          <div className="text-start w-[50%] mt-[50px] text-[22px]">
            <h6>
              When you're ready to start your exam, click on the Start Quiz
              Button below right. Your exam questions will load after clicking the button.
            </h6>
          </div>

        </div>

        <div className="flex justify-between items-center absolute z-1 bottom-2 w-[70%]">
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
