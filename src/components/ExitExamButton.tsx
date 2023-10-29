import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AppContext } from "../context/AppContext";



export interface Props {
  linkVariable: string;
  buttonText: string;
}


function ExitExamButton(props: Props) {
    const { setCurrentQuestion, setExamTimeLimit, allottedExamTime } = useContext(AppContext);
    const Navigate = useNavigate();
    
    const buttonLinkFunct = () => {
      setCurrentQuestion(0);
      setExamTimeLimit(allottedExamTime);
      Navigate(props.linkVariable);
    }

  return (
    <>
        <div className="flex justify-center items-center w-full mt-4">
            <button 
              type="button" 
              className="bg-primary text-white w-[30%]" 
              onClick={buttonLinkFunct}>
                {props.buttonText}
            </button>
        </div>
    </>
  )
}

export default ExitExamButton
