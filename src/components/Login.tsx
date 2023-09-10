import logo from "../assets/Shosan-Acodemia-Logo-small2.png";
import LoginButton from "./LoginButton";

//todo Database for user login will be MongoDB
//! Database for user login will be MongoDB
//* Database for user login will be MongoDB
//? Database for user login will be MongoDB
// Database for user login will be MongoDB


function Login() {

    return (
        <>
            <div className="w-full">

                <div className="flex justify-around items-center">

                    <div className="w-[200px] h-[200px] mt-[50px]">
                        <img src={logo} alt="logo" className="w-full h-full"/>
                    </div>

                    <div className="flex flex-col justify-center items-start font-poppins">
                        <h1 className="text-[50px] font-semibold">
                            Shosan Computer Based Test
                        </h1>
                        <h3 className="mt-[20px] text-[32px] font-semibold">
                            Welcome to your Computer Based Test
                        </h3>
                    </div>

                </div>

                <div className="flex justify-center items-center w-full">

                    <form 
                        name="cbtForm" 
                        className="flex flex-col justify-center items-center w-[40%] mt-[100px]">

                        <div className="mb-2 w-full">
                            <label className="w-[80%]">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                name="fullName" 
                                className="w-full text-[16px]"/>
                        </div>
                        <div className="mb-2 w-full">
                            <label className="w-[80%]">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                name="emailForm" 
                                className="w-full text-[16px]"/>
                        </div>
                        <div className="mb-3 w-full">
                            <label className="w-[80%]">Password</label>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                name="passwordForm" 
                                className="w-full text-[16px]"/>
                        </div>

                        <div className="mt-[20px]">
                            <LoginButton />
                        </div>

                    </form>

                </div>

            </div>
        </>
    )
}

export default Login