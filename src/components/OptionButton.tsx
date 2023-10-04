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
        setButtonColorA, 
        setButtonColorB, 
        setButtonColorC, 
        setButtonColorD,
        currentQuestion,
        examUtils, 
        setExamUtils,
    } = useContext(AppContext);


    const optionMapperA = () =>{
        examUtils.map((utils, id)=>{
            if (id === utils.id) {
                return setExamUtils([{id: currentQuestion + 1, answer: examData[currentQuestion].optionA, option: true}]);
            } else {
                return utils;
            }
        });
    }
    const optionMapperB = () =>{
        examUtils.map((utils, id)=>{
            if (id === utils.id) {
                return setExamUtils([{id: currentQuestion + 1, answer: examData[currentQuestion].optionB, option: true}]);
            } else {
                return utils;
            }
        });
    }
    const optionMapperC = () =>{
        examUtils.map((utils, id)=>{
            if (id === utils.id) {
                return setExamUtils([{id: currentQuestion + 1, answer: examData[currentQuestion].optionC, option: true}]);
            } else {
                return utils;
            }
        });
    }
    const optionMapperD = () =>{
        examUtils.map((utils, id)=>{
            if (id === utils.id) {
                return setExamUtils([{id: currentQuestion + 1, answer: examData[currentQuestion].optionD, option: true}]);
            } else {
                return utils;
            }
        });
    }


    const setButtonColorFunction = () => {
        props.setButtonColor(!props.buttonColor);

        if (props.buttonA) {
            optionMapperA();
            console.log(`Option Button's exam utils: ${examUtils}`);
            setButtonColorB(false);
            setButtonColorC(false);
            setButtonColorD(false);
        }
        if (props.buttonB) {
            optionMapperB();
            console.log(`Option Button's exam utils: ${examUtils}`);
            setButtonColorA(false);
            setButtonColorC(false);
            setButtonColorD(false);
        }
        if (props.buttonC) {
            optionMapperC();
            console.log(`Option Button's exam utils: ${examUtils}`);
            setButtonColorB(false);
            setButtonColorA(false);
            setButtonColorD(false);
        }
        if (props.buttonD) {
            optionMapperD();
            console.log(`Option Button's exam utils: ${examUtils}`);
            setButtonColorB(false);
            setButtonColorC(false);
            setButtonColorA(false);
        }

        console.log(`What option was selected?: ${examUtils[currentQuestion].answer}`);

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