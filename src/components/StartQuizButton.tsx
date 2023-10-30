import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AppContext } from "../context/AppContext";



export interface Props {
  linkVariable: string;
  buttonText: string;
}


function StartQuizButton(props: Props) {
    const { 
      setCurrentQuestion, setExamTimeLimit, allottedExamTime, setScoreText, 
      setScoreDataArray, setAnswered
    } = useContext(AppContext);
    const Navigate = useNavigate();
    
    const buttonLinkFunct = () => {
      setCurrentQuestion(0);
      setExamTimeLimit(allottedExamTime);
      setScoreText(0);
      setScoreDataArray([]);
      setAnswered(false);
      Navigate(props.linkVariable);
    }

  return (
    <>
        <div className="w-full flex justify-end">
            <button 
              type="button" 
              className="bg-primary text-white md:text-[16px] sm:text-[16px] xs:text-[16px] 
                text-[13px] md:w-[65%] sm:w-[60%] xs:w-[70%] xxs:w-[80%] w-[80%]" 
              onClick={buttonLinkFunct}>
                {props.buttonText}
            </button>
        </div>
    </>
  )
}

export default StartQuizButton