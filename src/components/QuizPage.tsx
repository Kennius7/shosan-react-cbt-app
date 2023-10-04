import QuizReturnButton from "./QuizReturnButton";
import CheckScoreButton from "./CheckScoreButton";
import OptionButton from "./OptionButton";
import ExamTimer from "./ExamTimer";
import { examData } from "./examQuestionData";
import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function QuizPage() {
    const backLink = -1;
    const scoreLink = "/score";
    const Navigate = useNavigate();

    const { 
        buttonColorA, setButtonColorA, buttonColorB, setButtonColorB, buttonColorC, setButtonColorC, 
        buttonColorD, setButtonColorD, scoreText, currentQuestion, setCurrentQuestion, seconds,
        minutes, hours, setAnswered, examUtils, setExamUtils, examOptionsData
    } = useContext(AppContext);

    useEffect(() => {
        setExamUtils([examOptionsData]);
        console.log(examUtils);
        console.log(currentQuestion);
        setButtonColorA(false);
        setButtonColorB(false);
        setButtonColorC(false);
        setButtonColorD(false);
        }, [])

    const prevQuestion = () => {
        setButtonColorA(false);
        setButtonColorB(false);
        setButtonColorC(false);
        setButtonColorD(false);
        if (currentQuestion < 1) {
            Navigate("/home");
        }
        setCurrentQuestion(currentQuestion - 1);
        toast("Previous Question", { type: "success" });
    }

    const nextQuestion = () => {
        console.log(`Next Button's current question: ${currentQuestion}`);
        console.log(`Next Button's exam utils: ${examUtils}`);
        setAnswered(true);
        setButtonColorA(false);
        setButtonColorB(false);
        setButtonColorC(false);
        setButtonColorD(false);
        if (currentQuestion > examData.length - 2) {
            Navigate("/score");
        }
        if (!examUtils[currentQuestion].option) {
            toast("Please choose an answer!", {type: "error"});
            return
        }
        console.log(examUtils[currentQuestion].answer);
        setCurrentQuestion(currentQuestion + 1);
        
        
        
        toast("Next Question", { type: "info" });
    }

    return (
        <>
            <div className="flex flex-col justify-start items-center w-[98vw]">

                <div className="flex justify-between items-start w-full mt-[10px]">

                    <div className="flex justify-start items-center w-[30%]">
                        <ExamTimer/>
                    </div>

                    <div className="w-[70%]">
                        <h1>Test Questions</h1>
                        <h2>Current Affairs/General Knowledge</h2>
                    </div>

                </div>

                <div className="w-[40%] mt-0">Score Text: {scoreText}</div>

                <div className="flex flex-col justify-center items-center w-full mt-4">

                    <div className="text-start text-[20px] font-semibold w-[40%]">
                        {examData[currentQuestion]?.question}
                    </div>

                    <div className="flex flex-col justify-center items-center font-semibold w-[40%] mt-[20px]">
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

                    <div className="w-[40%]">
                        <p className="font-poppins text-[14px] italic tracking-tight w-full">
                            You have
                            &nbsp;<span>{hours}</span>&nbsp;hours, 
                            &nbsp;<span>{minutes}</span>&nbsp;minutes and 
                            &nbsp;<span>{seconds}</span>&nbsp;seconds left.
                        </p>
                    </div>

                    <div className="flex justify-around items-center mt-10 w-[40%]">
                        <div className="w-[32%]">
                            <button 
                                type="button" 
                                className="quizNavButton w-full text-red-400"
                                onClick={prevQuestion}>Previous</button>
                        </div>
                        <div className="w-[32%]">
                            <button 
                                type="button"
                                className="quizNavButton w-full text-green-500">Submit</button>
                        </div>
                        <div className="w-[32%]">
                            <button 
                                type="button"
                                className="quizNavButton w-full text-blue-400" 
                                onClick={nextQuestion}>Next</button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <QuizReturnButton 
                        linkVariable={backLink} 
                        buttonText="Back"/>

                    <CheckScoreButton 
                        linkVariable={scoreLink} 
                        buttonText="Check Score"/>
                </div>

            </div>
        </>
    )
}

export default QuizPage