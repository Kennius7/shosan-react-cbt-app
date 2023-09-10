import ExamTimerFunction from "./ExamTimerFunction";



function ExamTimer() {

  return (
    <>
        <div className="flex justify-center items-center border-[2px] border-yellow-600 
            hover:border-blue-600 bg-primary duration-1000 rounded-[50%] w-[160px] h-[160px]">
            <div className="flex flex-col justify-center items-center w-full">
                <ExamTimerFunction/>
            </div>
        </div>
    </>
  )
}

export default ExamTimer