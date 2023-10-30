import ExamTimerFunction from "./ExamTimerFunction";


function ExamTimer() {

  return (
    <>
        <div className="flex justify-center items-center border-[2px] border-yellow-600 
            hover:border-blue-600 bg-primary duration-1000 rounded-[50%] sm:w-[140px] sm:h-[140px] 
            xs:w-[100px] xs:h-[100px] xxs:w-[90px] xxs:h-[90px] w-[70px] h-[70px]">
            <div className="flex flex-col justify-center items-center w-full">
                <ExamTimerFunction/>
            </div>
        </div>
    </>
  )
}

export default ExamTimer