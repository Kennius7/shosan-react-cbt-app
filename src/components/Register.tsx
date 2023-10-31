import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Shosan-Acodemia-Logo-small2.png";
import RegisterButton from "./RegisterButton";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";


//todo Database for user login was not MongoDB, sorry... Maybe in another project.
//! Database for user login was not MongoDB, sorry... Maybe in another project.
//* Database for user login was not MongoDB, sorry... Maybe in another project.
//? Database for user login was not MongoDB, sorry... Maybe in another project.
// Database for user login was not MongoDB, sorry... Maybe in another project.


function Register() {
    const Navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <>
            <div className="relative flex justify-center items-center overflow-hidden w-full h-[100vh]">
                
                <div className="flex justify-start items-center overflow-hidden w-full 
                    md:mt-0 sm:-mt-[200px] xs:mt-0 xxs:-mt-[27%] -mt-[10%]">

                    <div className="md:w-[50%] md:h-[50%] sm:w-[90%] sm:h-[90%] xs:w-[95%] xs:h-[95%] 
                        w-[98%] h-[98%] md:ml-0 sm:-ml-[200px] ml-0">
                        <img src={logo} alt="logo" className="w-full h-full opacity-20"/>
                    </div>
                    
                </div>

                <div className="flex flex-col justify-center items-center w-full absolute z-[2] 
                    md:top-[10%] sm:top-[10%] xs:top-[15%] top-[8%]">

                    <div className="font-poppins flex flex-col justify-center xs:items-center items-start 
                        xs:w-full w-[80%]">
                        <h1 className="sm:text-[45px] xxs:text-[30px] text-[25px] font-bold xs:text-center 
                            text-start tracking-tight">
                            Computer <br className="xs:hidden block"/> Based Test
                        </h1>
                        <h3 className="sm:text-[26px] xs:text-[20px] xxs:text-[22px] text-[20px] font-semibold 
                            xs:text-center text-start xs:tracking-tight tracking-normal xs:leading-none 
                            leading-[25px] xxs:mt-[20px] mt-[10px]">
                            Welcome to your <br className="xs:hidden block"/>Computer Based Test
                        </h3>
                    </div>

                    <div className="font-bold font-poppins md:text-[30px] sm:text-[40px] text-[30px] w-[80%]
                        md:my-[50px] sm:my-[30px] xs:my-[50px] my-[30px] xs:text-center text-start 
                        text-white navText3">
                        Sign Up
                    </div>

                    <div className="flex justify-center items-center w-full">

                        <form 
                            name="cbtForm" 
                            className="flex flex-col justify-center items-center md:w-[30%] sm:w-[40%] 
                                xs:w-[60%] w-[80%]">

                            <div className="xs:mb-2 mb-[15px] w-full">
                                <input 
                                    type="text" 
                                    placeholder="Full Name" 
                                    name="fullName" 
                                    onChange={(e) => {setName(e.target.value)}} 
                                    value={name}
                                    className="w-full text-[16px]"/>
                            </div>
                            <div className="xs:mb-2 mb-[15px] w-full">
                                <input 
                                    type="email" 
                                    placeholder="Email address" 
                                    name="emailForm" 
                                    onChange={(e) => {setEmail(e.target.value)}} 
                                    value={email}
                                    className="w-full text-[16px]"/>
                            </div>
                            <div className="xs:mb-3 mb-[10px] w-full relative">
                                <input 
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Password" 
                                    name="passwordForm" 
                                    onChange={(e) => {setPassword(e.target.value)}} 
                                    value={password}
                                    className="w-full text-[16px]"/>
                                {
                                    passwordVisible 
                                    ? <span 
                                        className="cursor-pointer absolute z-[1] right-[2%] top-[20%] opacity-60"
                                        onClick={() => {setPasswordVisible(!passwordVisible)}}>
                                        <AiFillEye name="eye" size={24} color="black" />
                                        </span> 
                                    : <span 
                                        className="cursor-pointer absolute z-[1] right-[2%] top-[20%] opacity-60"
                                        onClick={() => {setPasswordVisible(!passwordVisible)}}>
                                        <AiFillEyeInvisible name="eye-with-line" size={24} color="black" />
                                        </span> 
                                }
                            </div>

                            <div className="xxs:text-[16px] text-[14px] xxs:tracking-normal tracking-tighter">
                                Have an account already, then&nbsp;
                                <span onClick={()=>Navigate("/")} 
                                    className="text-yellow-800 font-semibold cursor-pointer">
                                    sign in here.
                                </span>
                            </div>

                            <div className="mt-[20px]">
                                <RegisterButton name={name} email={email} password={password} />
                            </div>

                        </form>

                    </div>

                </div>



            </div>
        </>
    )
}

export default Register

