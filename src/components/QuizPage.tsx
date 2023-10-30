import { OptionButton, ExamTimer } from "../components";
import { examData } from "./examQuestionData";
import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function QuizPage() {
    const Navigate = useNavigate();
    const { 
        buttonColorA, setButtonColorA, buttonColorB, setButtonColorB, buttonColorC, setButtonColorC, 
        buttonColorD, setButtonColorD, setScoreText, currentQuestion, setCurrentQuestion, seconds,
        minutes, hours, setAnswered, scoreDataArray, answered
    } = useContext(AppContext);

    useEffect(() => {
        setButtonColorA(false);
        setButtonColorB(false);
        setButtonColorC(false);
        setButtonColorD(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const sumArrayItems = (array: Array<number>) => {
        if (!Array.isArray(array) || array.length === 0) {
            return 7;
        }

        return array.reduce((a, b) => a + b, 0);
    }

    const prevQuestion = () => {
        setButtonColorA(false);
        setButtonColorB(false);
        setButtonColorC(false);
        setButtonColorD(false);
        if (currentQuestion < 1) {
            Navigate("/home");
        }
        setCurrentQuestion(currentQuestion - 1);
    }

    const nextQuestion = () => {
        if (currentQuestion > examData.length - 2) {
            Navigate("/score");
        }
        if (!answered) {
            toast("Please choose an answer!", {type: "error"});
            return
        }

        console.log(`Next Button's current question: ${currentQuestion}`);
        setButtonColorA(false);
        setButtonColorB(false);
        setButtonColorC(false);
        setButtonColorD(false);
        setScoreText(sumArrayItems(scoreDataArray));
        setCurrentQuestion(currentQuestion + 1);
        setAnswered(false);
    }

    const handleSubmit = () => {
        Navigate("/score");
    }

    return (
        <>
            <div className="flex flex-col justify-start items-center w-[98vw]">

                <div className="flex justify-between items-start w-full sm:mt-[10px] mt-[20px]">

                    <div className="flex justify-start items-center xs:w-[30%] w-[25%]">
                        <ExamTimer/>
                    </div>

                    <div className="flex flex-col justify-center items-start xs:w-[70%] w-[75%] xs:ml-0 
                        xxs:ml-2 ml-4">
                        <div className="font-poppins font-bold sm:text-[40px] xs:text-[30px] xxs:text-[24px] 
                            text-[20px]">
                            Test Questions
                        </div>
                        <div className="font-poppins sm:text-[24px] xs:text-[18px] xxs:text-[14px] text-[12px] 
                            underline">
                            Current Affairs & General Knowledge
                        </div>
                    </div>

                </div>

                {/* <div className="w-[40%] mt-0">Score Text: {scoreText}</div> */}

                <div className="flex flex-col justify-center items-center w-full mt-[70px]">

                    <div className="text-start font-semibold sm:text-[20px] xs:text-[18px] xxs:text-[16px] 
                        text-[14px] md:w-[40%] sm:w-[60%] xs:w-[84%] xxs:w-[94%] w-[96%]">
                        {examData[currentQuestion]?.question}
                    </div>

                    <div className="flex flex-col justify-center items-center font-semibold md:w-[40%] 
                        sm:w-[60%] xs:w-[84%] xxs:w-[94%] w-[96%] sm:mt-[20px] xs:mt-[30px] mt-[20px]">
                        <OptionButton 
                            setButtonColor={setButtonColorA} 
                            buttonColor={buttonColorA} 
                            optionText={examData[currentQuestion]?.optionA} buttonA />
                        <OptionButton 
                            setButtonColor={setButtonColorB} 
                            buttonColor={buttonColorB} 
                            optionText={examData[currentQuestion]?.optionB} buttonB />
                        <OptionButton 
                            setButtonColor={setButtonColorC} 
                            buttonColor={buttonColorC} 
                            optionText={examData[currentQuestion]?.optionC} buttonC />
                        <OptionButton 
                            setButtonColor={setButtonColorD} 
                            buttonColor={buttonColorD} 
                            optionText={examData[currentQuestion]?.optionD} buttonD />
                    </div>

                    <div className="md:w-[40%] sm:w-[60%] xs:w-[84%] xxs:w-[94%] w-[96%]">
                        <p className="font-poppins xs:text-[14px] xxs:text-[13px] text-[10px] italic 
                            tracking-tight w-full">
                            You have
                            &nbsp;<span>{hours}</span>&nbsp;hours, 
                            &nbsp;<span>{minutes}</span>&nbsp;minutes and 
                            &nbsp;<span>{seconds}</span>&nbsp;seconds left.
                        </p>
                    </div>

                    <div className="flex justify-around items-center sm:mt-10 xs:mt-20 mt-10 md:w-[40%] 
                        sm:w-[60%] xs:w-[84%] xxs:w-[94%] w-[96%]">
                        <div className="w-[32%]">
                            <button 
                                type="button" 
                                className="quizNavButton w-full text-red-400 sm:text-[17px] xxs:text-[15px] 
                                text-[13px]"
                                onClick={prevQuestion}>
                                Previous
                            </button>
                        </div>
                        <div className={`w-[32%] ${currentQuestion === examData.length - 1 
                            ? "visible" : "invisible"}`}>
                            <button 
                                type="button"
                                onClick={handleSubmit}
                                className="quizNavButton w-full text-green-500 sm:text-[17px] xxs:text-[15px] 
                                text-[13px]">
                                Submit
                            </button>
                        </div>
                        <div className="w-[32%]">
                            <button 
                                type="button"
                                className="quizNavButton w-full text-blue-400 sm:text-[17px] xxs:text-[15px] 
                                text-[13px]" 
                                onClick={nextQuestion}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default QuizPage