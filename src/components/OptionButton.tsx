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
    optionSelect?: string,
}

function OptionButton(props: Props) {
    const {  
        setButtonColorA, setButtonColorB, setButtonColorC, setButtonColorD,
        currentQuestion, scoreDataArray, setScoreDataArray, setAnswered, answered
    } = useContext(AppContext);


    const removeLastArrayEntry = () => {
        const newArray = [...scoreDataArray];
        newArray.pop();
        setScoreDataArray(newArray);
    }

    const scoreUpdaterA = () => {
        if (examData[currentQuestion].optionA === examData[currentQuestion].correctAnswer) {
            setScoreDataArray([...scoreDataArray, 10])
        } else { setScoreDataArray([...scoreDataArray, 0]) }
        setAnswered(true);
    }

    const scoreUpdaterB = () => {
        if (examData[currentQuestion].optionB === examData[currentQuestion].correctAnswer) {
            setScoreDataArray([...scoreDataArray, 10])
        } else { setScoreDataArray([...scoreDataArray, 0]) }
        setAnswered(true);
    }

    const scoreUpdaterC = () => {
        if (examData[currentQuestion].optionC === examData[currentQuestion].correctAnswer) {
            setScoreDataArray([...scoreDataArray, 10])
        } else { setScoreDataArray([...scoreDataArray, 0]) }
        setAnswered(true);
    }

    const scoreUpdaterD = () => {
        if (examData[currentQuestion].optionD === examData[currentQuestion].correctAnswer) {
            setScoreDataArray([...scoreDataArray, 10])
        } else { setScoreDataArray([...scoreDataArray, 0]) }
        setAnswered(true);
    }



    const optionMapperA = () =>{
        !answered 
            ? scoreUpdaterA() 
            : removeLastArrayEntry(); scoreUpdaterA();
    }
    const optionMapperB = () =>{
        !answered 
            ? scoreUpdaterB() 
            : removeLastArrayEntry(); scoreUpdaterB();
    }
    const optionMapperC = () =>{
        !answered 
            ? scoreUpdaterC() 
            : removeLastArrayEntry(); scoreUpdaterC();
    }
    const optionMapperD = () =>{
        !answered 
            ? scoreUpdaterD() 
            : removeLastArrayEntry(); scoreUpdaterD();
    }


    const setButtonColorFunction = () => {
        props.setButtonColor(!props.buttonColor);

        if (props.buttonA) {
            optionMapperA();
            setButtonColorB(false);
            setButtonColorC(false);
            setButtonColorD(false);
        }
        if (props.buttonB) {
            optionMapperB();
            setButtonColorA(false);
            setButtonColorC(false);
            setButtonColorD(false);
        }
        if (props.buttonC) {
            optionMapperC();
            setButtonColorB(false);
            setButtonColorA(false);
            setButtonColorD(false);
        }
        if (props.buttonD) {
            optionMapperD();
            setButtonColorB(false);
            setButtonColorC(false);
            setButtonColorA(false);
        }

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