/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";




type Props = {
  name: string,
  email: string,
  password: string
}


function RegisterButton(props: Props) {
    // const { setCurrentQuestion } = useContext(AppContext);
    const Navigate = useNavigate();
    const [signUpText, setSignUpText] = useState("Sign Up");
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&]/;
    const toastNetworkError = "auth/network-request-failed";
    const appNetworkErrorText = "There was a network error. Check your network.";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validatePassword = (regex: any, password: string) => {
        const hasRegex = regex.test(password);
        return hasRegex;
    }

    const SignUpTimeOut = () => {
      setTimeout(() => {
          setSignUpText("Sign Up");
      }, 3000);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toastErrorMessageFunction = (error: any) => {
    if (error.code === toastNetworkError) {
      return appNetworkErrorText;
    }
    else return "Unknown error."
  }

    const handleRegister = async () => {
      // Navigate("/");
      setSignUpText("Signing Up...");

      if (!props.name || !props.email || !props.password) {
          toast("Please fill out all necessary fields", { type: "error" });
          SignUpTimeOut();
          return
      }
      if (props.password.length < 8) {
          toast("Password must be at least 8 characters", { type: "error" });
          SignUpTimeOut();
          return
      }
      if (!validatePassword(lowerCaseRegex, props.password)) {
          toast("Password must have small letters", { type: "error" });
          SignUpTimeOut();
          return
      }
      if (!validatePassword(upperCaseRegex, props.password)) {
          toast("Password must have capital letters", { type: "error" });
          SignUpTimeOut();
          return
      }
      if (!validatePassword(numberRegex, props.password)) {
          toast("Password must have numbers", { type: "error" });
          SignUpTimeOut();
          return
      }
      if (!validatePassword(specialCharRegex, props.password)) {
          toast("Password must have special characters", { type: "error" });
          SignUpTimeOut();
          return
      }


      try {
          await createUserWithEmailAndPassword(auth, props.email, props.password);
          signInWithEmailAndPassword(auth, props.email, props.password);
          // @ts-ignore
          updateProfile(auth.currentUser, { displayName: props.name });
          setTimeout(() => {
              setSignUpText("Sign Up");
              toast("Sign up successful", { type: "success" });
          }, 3000);
          setTimeout(() => {
              Navigate("/home");
          }, 3500);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
          toast(`${toastErrorMessageFunction(error)}`, { type: "error" });
          SignUpTimeOut();
      }
    }

  return (
    <>
        <div className="mt-4">
            <button 
              type="button" 
              className="bg-blue-gradient3 text-white w-[150px]" 
              onClick={handleRegister}>
                {signUpText}
            </button>
        </div>
    </>
  )
}

export default RegisterButton