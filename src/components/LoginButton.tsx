import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



type Props = {
  email: string,
  password: string
}

function LoginButton(props: Props) {
    const Navigate = useNavigate();
    const [loginText, setLoginText] = useState("Sign in");


    const handleLogIn = async () => {
      if (!props.email || !props.password) {
        toast("Please fill out all necessary fields", { type: "error" });
        return;
      }
  
      try {
        await signInWithEmailAndPassword(auth, props.email, props.password);
        setLoginText("Signing in...");
        setTimeout(() => {
          setLoginText("Sign In");
          toast("Sign up successful", { type: "success" });
        }, 2500);
        setTimeout(() => {
          Navigate("/home");
        }, 3500);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast(`${error.code}. Either your email or password is incorrect. Check them or Sign up.`, { type: "error" })
      }
    }



  return (
    <>
        <div className="mt-4">
            <button 
              type="button" 
              className="bg-blue-gradient2 text-white w-[150px]" 
              onClick={handleLogIn}>
                {loginText}
            </button>
        </div>
    </>
  )
}

export default LoginButton