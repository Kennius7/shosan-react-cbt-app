import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";



export interface Props {
  linkVariable: number;
  buttonText: string;
}


function QuizReturnButton(props: Props) {
    const { setCurrentQuestion, setExamTimeLimit, allottedExamTime } = useContext(AppContext);
    const Navigate = useNavigate();
    
    const buttonLinkFunct = () => {
      setCurrentQuestion(0);
      setExamTimeLimit(allottedExamTime);
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

export default QuizReturnButton