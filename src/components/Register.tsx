import { useNavigate } from "react-router-dom";
import logo from "../assets/Shosan-Acodemia-Logo-small2.png";
import RegisterButton from "./RegisterButton";

//todo Database for user login will be MongoDB
//! Database for user login will be MongoDB
//* Database for user login will be MongoDB
//? Database for user login will be MongoDB
// Database for user login will be MongoDB


function Register() {
    const Navigate = useNavigate();

    return (
        <>
            <div className="relative flex justify-center items-center overflow-hidden w-full h-[100vh]">
                
                <div className="flex justify-start items-center w-full">
                    <div className="w-[700px] h-[700px] mt-[50px]">
                        <img src={logo} alt="logo" className="w-full h-full opacity-20"/>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full absolute z-[2] top-[15%]">

                    <div className="font-poppins flex flex-col justify-center items-center">
                        <h1 className="text-[45px] font-bold text-center tracking-tight">
                            Shosan Computer Based Test
                        </h1>
                        <h3 className="text-[26px] font-semibold text-center tracking-tight mt-[20px]">
                            Welcome to your Computer Based Test
                        </h3>
                    </div>

                    <div className="font-bold font-poppins text-[30px] my-[50px] text-white navText3">
                        Sign Up
                    </div>

                    <div className="flex justify-center items-center w-full">

                        <form 
                            name="cbtForm" 
                            className="flex flex-col justify-center items-center w-[30%]">

                            <div className="mb-2 w-full">
                                <input 
                                    type="text" 
                                    placeholder="Full Name" 
                                    name="fullName" 
                                    className="w-full text-[16px]"/>
                            </div>
                            <div className="mb-2 w-full">
                                <input 
                                    type="email" 
                                    placeholder="Email address" 
                                    name="emailForm" 
                                    className="w-full text-[16px]"/>
                            </div>
                            <div className="mb-3 w-full">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    name="passwordForm" 
                                    className="w-full text-[16px]"/>
                            </div>

                            <div className="text-[16px]">
                                Have an account already, then&nbsp;
                                <span onClick={()=>Navigate("/")} 
                                    className="text-yellow-800 font-semibold cursor-pointer">
                                    sign in here.
                                </span>
                            </div>

                            <div className="mt-[20px]">
                                <RegisterButton />
                            </div>

                        </form>

                    </div>

                </div>



            </div>
        </>
    )
}

export default Register