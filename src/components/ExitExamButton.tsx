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
        <div className="flex justify-center items-center w-full">
            <button 
              type="button" 
              className="bg-primary text-white xxs:text-[16px] text-[14px] sm:w-[30%] 
              xs:w-[50%] xxs:w-[80%] w-[70%]" 
              onClick={buttonLinkFunct}>
                {props.buttonText}
            </button>
        </div>
    </>
  )
}

export default ExitExamButton
