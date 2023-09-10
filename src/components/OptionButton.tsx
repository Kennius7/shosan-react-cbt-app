import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { examData } from "./examQuestionData";



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
        setButtonColorA, 
        setButtonColorB, 
        setButtonColorC, 
        setButtonColorD,
        scoreText,
        setScoreText,
        currentQuestion,
        scoreAdded,
        setScoreAdded,
        answered,
        setAnswered,
    } = useContext(AppContext);

    const setButtonColorFunction = () => {
        props.setButtonColor(!props.buttonColor);
        
        

        if (!answered && !scoreAdded && props.optionText === examData[currentQuestion].correctAnswer) {
            setScoreText(scoreText + 10);
            setScoreAdded(true);
            setAnswered(false);
        }

        if (answered && scoreAdded && props.optionText !== examData[currentQuestion].correctAnswer) {
            setScoreText(scoreText - 10);
            setScoreAdded(false);
            setAnswered(true);
        }

        if (props.buttonA) {
            setButtonColorB(false);
            setButtonColorC(false);
            setButtonColorD(false);
        }
        if (props.buttonB) {
            setButtonColorA(false);
            setButtonColorC(false);
            setButtonColorD(false);
        }
        if (props.buttonC) {
            setButtonColorB(false);
            setButtonColorA(false);
            setButtonColorD(false);
        }
        if (props.buttonD) {
            setButtonColorB(false);
            setButtonColorC(false);
            setButtonColorA(false);
        }

        console.log(`Was the score added? ${scoreAdded}`);
        console.log(`What is the score? ${scoreText}`);
        
    }

    // useEffect(() => {
    //     if (props.buttonColor === buttonColorA) {
    //         setButtonColorB(false);
    //         setButtonColorC(false);
    //         setButtonColorD(false);
    //     }
    //     if (props.buttonColor === buttonColorB) {
    //         setButtonColorA(false);
    //         setButtonColorC(false);
    //         setButtonColorD(false);
    //     }
    //     if (props.buttonColor === buttonColorC) {
    //         setButtonColorB(false);
    //         setButtonColorA(false);
    //         setButtonColorD(false);
    //     }
    //     if (props.buttonColor === buttonColorD) {
    //         setButtonColorB(false);
    //         setButtonColorC(false);
    //         setButtonColorA(false);
    //     }
    
    // }, [buttonColorA, buttonColorB, buttonColorC, buttonColorD])



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