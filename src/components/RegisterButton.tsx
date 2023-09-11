import { useNavigate } from "react-router-dom";
// import { useContext } from 'react';
// import { AppContext } from "../context/AppContext";




function RegisterButton() {
    // const { setCurrentQuestion } = useContext(AppContext);
    const Navigate = useNavigate();
    
    const RegisterFunct = () => {
      Navigate("/");
    }

  return (
    <>
        <div className="mt-4">
            <button 
              type="button" 
              className="bg-blue-gradient3 text-white w-[150px]" 
              onClick={RegisterFunct}>
                Sign Up
            </button>
        </div>
    </>
  )
}

export default RegisterButton