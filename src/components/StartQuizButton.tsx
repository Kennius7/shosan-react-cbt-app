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
        <div className="mt-4">
            <button 
              type="button" 
              className="bg-primary text-white w-[150px]" 
              onClick={buttonLinkFunct}>
                {props.buttonText}
            </button>
        </div>
    </>
  )
}

export default StartQuizButton