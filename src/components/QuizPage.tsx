import BackButton from "./BackButton";
import Button from "./Button";
import OptionButton from "./OptionButton";
import ExamTimer from "./ExamTimer";
import { examData } from "./examQuestionData";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";



function QuizPage() {
    const backLink = -1;
    const scoreLink = "/score";
    const Navigate = useNavigate();

    const { 
        buttonColorA, 
        setButtonColorA, 
        buttonColorB, 
        setButtonColorB, 
        buttonColorC, 
        setButtonColorC, 
        buttonColorD, 
        setButtonColorD,
        scoreText,
        currentQuestion,
        setCurrentQuestion,
        seconds,
        minutes,
        hours,
        setAnswered,
    } = useContext(AppContext);

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
        setAnswered(true);
        setButtonColorA(false);
        setButtonColorB(false);
        setButtonColorC(false);
        setButtonColorD(false);
        if (currentQuestion > examData.length - 2) {
            Navigate("/score");
        }
        setCurrentQuestion(currentQuestion + 1);
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

                <div>
                    <div className="">
                        You have {hours} hours, {minutes} minutes and {seconds} seconds left 
                        before this test is terminated
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <BackButton 
                        linkVariable={backLink} 
                        buttonText="Back"/>

                    <Button 
                        linkVariable={scoreLink} 
                        buttonText="Check Score"/>
                </div>

            </div>
        </>
    )
}

export default QuizPage