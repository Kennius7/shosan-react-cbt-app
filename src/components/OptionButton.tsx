import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { examData } from './examQuestionData';



type Props = {
    optionText: string,
    buttonColor: boolean,
    setButtonColor: React.Dispatch<React.SetStateAction<boolean>>
    buttonA?: boolean,
    buttonB?: boolean,
    buttonC?: boolean,
    buttonD?: boolean,
}

function OptionButton(props: Props) {
    const {  
        setButtonColorA, setButtonColorB, setButtonColorC, setButtonColorD,
        currentQuestion, scoreDataArray, setScoreDataArray, setAnswered, answered
    } = useContext(AppContext);


    const scoreUpdaterA = () => {
        if (examData[currentQuestion].optionA === examData[currentQuestion].correctAnswer && !answered) {
            setScoreDataArray([...scoreDataArray, 10]);
            setAnswered(true);
        }
        if (examData[currentQuestion].optionA !== examData[currentQuestion].correctAnswer && !answered) {
            setScoreDataArray([...scoreDataArray, 0]);
            setAnswered(true);
        }
        if (examData[currentQuestion].optionA !== examData[currentQuestion].correctAnswer && answered) {
            const newArray = [...scoreDataArray];
            newArray[currentQuestion] = 0;
            setScoreDataArray(newArray);
        }
        if (examData[currentQuestion].optionA === examData[currentQuestion].correctAnswer && answered) {
            const newArray = [...scoreDataArray];
            newArray[currentQuestion] = 10;
            setScoreDataArray(newArray);
        }
    }
    const scoreUpdaterB = () => {
        if (examData[currentQuestion].optionB === examData[currentQuestion].correctAnswer && !answered) {
            setScoreDataArray([...scoreDataArray, 10]);
            setAnswered(true);
        }
        if (examData[currentQuestion].optionB !== examData[currentQuestion].correctAnswer && !answered) {
            setScoreDataArray([...scoreDataArray, 0]);
            setAnswered(true);
        }
        if (examData[currentQuestion].optionB !== examData[currentQuestion].correctAnswer && answered) {
            const newArray = [...scoreDataArray];
            newArray[currentQuestion] = 0;
            setScoreDataArray(newArray);
        }
        if (examData[currentQuestion].optionB === examData[currentQuestion].correctAnswer && answered) {
            const newArray = [...scoreDataArray];
            newArray[currentQuestion] = 10;
            setScoreDataArray(newArray);
        }
    }
    const scoreUpdaterC = () => {
        if (examData[currentQuestion].optionC === examData[currentQuestion].correctAnswer && !answered) {
            setScoreDataArray([...scoreDataArray, 10]);
            setAnswered(true);
        }
        if (examData[currentQuestion].optionC !== examData[currentQuestion].correctAnswer && !answered) {
            setScoreDataArray([...scoreDataArray, 0]);
            setAnswered(true);
        }
        if (examData[currentQuestion].optionC !== examData[currentQuestion].correctAnswer && answered) {
            const newArray = [...scoreDataArray];
            newArray[currentQuestion] = 0;
            setScoreDataArray(newArray);
        }
        if (examData[currentQuestion].optionC === examData[currentQuestion].correctAnswer && answered) {
            const newArray = [...scoreDataArray];
            newArray[currentQuestion] = 10;
            setScoreDataArray(newArray);
        }
    }
    const scoreUpdaterD = () => {
        if (examData[currentQuestion].optionD === examData[currentQuestion].correctAnswer && !answered) {
            setScoreDataArray([...scoreDataArray, 10]);
            setAnswered(true);
        }
        if (examData[currentQuestion].optionD !== examData[currentQuestion].correctAnswer && !answered) {
            setScoreDataArray([...scoreDataArray, 0]);
            setAnswered(true);
        }
        if (examData[currentQuestion].optionD !== examData[currentQuestion].correctAnswer && answered) {
            const newArray = [...scoreDataArray];
            newArray[currentQuestion] = 0;
            setScoreDataArray(newArray);
        }
        if (examData[currentQuestion].optionD === examData[currentQuestion].correctAnswer && answered) {
            const newArray = [...scoreDataArray];
            newArray[currentQuestion] = 10;
            setScoreDataArray(newArray);
        }
    }


    const setButtonColorFunction = () => {
        props.setButtonColor(!props.buttonColor);

        if (props.buttonA) {
            scoreUpdaterA();
            setButtonColorB(false);
            setButtonColorC(false);
            setButtonColorD(false);
        }
        if (props.buttonB) {
            scoreUpdaterB();
            setButtonColorA(false);
            setButtonColorC(false);
            setButtonColorD(false);
        }
        if (props.buttonC) {
            scoreUpdaterC();
            setButtonColorB(false);
            setButtonColorA(false);
            setButtonColorD(false);
        }
        if (props.buttonD) {
            scoreUpdaterD();
            setButtonColorB(false);
            setButtonColorC(false);
            setButtonColorA(false);
        }

        console.log(scoreDataArray);
    }


  return (
    <>
        <div 
            onClick={setButtonColorFunction} 
            className={`${props.buttonColor ? "bg-yellow-700" : "bg-blue-300"} 
                hover:bg-yellow-700 duration-500 px-4 py-2 rounded-[8px] cursor-pointer text-[14px] 
                w-full m-2`}>
            {props.optionText}
        </div>
    </>
  )
}

export default OptionButton