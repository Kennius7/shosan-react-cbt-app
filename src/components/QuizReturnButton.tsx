import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";



export interface Props {
  linkVariable: number;
  buttonText: string;
}


function QuizReturnButton(props: Props) {
    const { setCurrentQuestion, setExamTimeLimit, setCheckQuizPage } = useContext(AppContext);
    const Navigate = useNavigate();
    
    const buttonLinkFunct = () => {
      setCheckQuizPage(false);
      setCurrentQuestion(0);
      setExamTimeLimit(1000);
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