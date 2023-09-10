import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AppContext } from "../context/AppContext";




function LoginButton() {
    const { setCurrentQuestion } = useContext(AppContext);
    const Navigate = useNavigate();
    
    const LoginFunct = () => {
      setCurrentQuestion(0);
      Navigate("/home");
    }

  return (
    <>
        <div className="mt-4">
            <button 
              type="button" 
              className="bg-primary text-white w-[150px]" 
              onClick={LoginFunct}>
                Login
            </button>
        </div>
    </>
  )
}

export default LoginButton