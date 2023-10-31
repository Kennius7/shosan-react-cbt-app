import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import logo from "../assets/Shosan-Acodemia-Logo-small2.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import { NavContext } from '../context/NavContext';



function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    // const [user] = useAuthState(auth);
    const [currentlyLoggedInUser] = useAuthState(auth);
    // const [user] = useAuthState(auth);
    const Navigate = useNavigate();
    const dashboardName = auth.currentUser?.displayName;
    const [initialsVisible, setInitialsVisible] = useState(false);

    const getUserInitials = () => {
        if (typeof dashboardName !== "string") {
            console.log(`There was no text for the initials in ${dashboardName}`);
            return "AD";
        }

        if (typeof dashboardName === "string") {
            console.log(`There was text for the initials in ${dashboardName}`);
            const initials = dashboardName.split(" ").map(name => name[0]).join("");
            return initials
        }
    }

    const getUserFirstName = () => {
        if (typeof dashboardName !== "string") {
            console.log(`There was no text for the first name in ${dashboardName}`);
            return "Adebayo"
        } 
        
        if (typeof dashboardName === "string") {
            console.log(`There was text for the first name in ${dashboardName}`);
            console.log(auth.currentUser?.displayName);
            const firstName = dashboardName.split(" ")[0];
            return firstName;
        }
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{
            Navigate("/");
            toast("Successfully signed out", { type: "success" });
            console.log(auth.currentUser);
        }).catch((error) => {
            toast(error.code, { type: "error" });
            toast(error.message, { type: "error" });
        });
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }


        const initialVisibleFunct = () => {
            if (dashboardName === "a d") {
                setInitialsVisible(true);
            } else {
                setInitialsVisible(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        initialVisibleFunct();

        return () => window.removeEventListener("scroll", onScroll);
    }, [dashboardName]);


    return (
        <>
            <nav className={`w-full flex justify-between items-center 
                ${location.pathname === "/quiz" ? "hidden" : "block"}`}>

                <div className="flex justify-start items-center md:w-[30%] sm:w-[35%] xs:w-[40%] w-[150px]">

                    <Link to="/" className="flex justify-center items-center md:w-[20%] sm:w-[18%] xs:w-[25%] 
                        w-[20%]">
                        <img src={logo} alt="Maticdrive logo"
                            className={`w-[23px] h-[23px] xxs:w-[25px] xxs:h-[25px] xs:w-[35px] xs:h-[35px] 
                            sm:w-[40px] sm:h-[40px] md:w-[38px] md:h-[38px] duration-1000 m-2`}
                        />
                    </Link>

                    <Link to="/" className="md:w-[65%] w-[70%] flex justify-center items-center">
                        <div className="w-full flex flex-col justify-center items-center">
                            <div className={`w-full ${scrolled
                                ? "md:text-[20px] sm:text-[25px] xs:text-[20px] xxs:text-[16px] text-[15px] duration-1000"
                                : "md:text-[20px] sm:text-[22px] xs:text-[16px] xxs:text-[15px] text-[13px] duration-1000"} 
                                sm:font-bold font-semibold text-primary w-full flex justify-start items-center`}>
                                Shosan <span className="text-blue-800">&nbsp;Code</span>&nbsp;Hub
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="flex justify-around items-center px-[10px]">
                    <div onClick={handleSignOut} 
                        className={`${currentlyLoggedInUser && currentlyLoggedInUser ? "visible" : "invisible"}
                        bg-red-200 text-primary text-center rounded-[5px] border-[2px] border-blue-800 
                        w-[100px] h-[30px] text-[16px] mr-[30px]`}>
                        Sign out
                    </div>
                    <div className="flex justify-end items-center pl-[10px]">

                        {
                            getUserFirstName() !== "Adebayo" ? 
                            <div className="flex justify-center items-center">
                                <div className="flex justify-end items-center md:mr-1 xs:mr-3 mr-1">
                                    <div className="font-semibold text-end 
                                    xs:leading-normal leading-[10px] md:text-[16px] sm:text-[17px] xs:text-[13px] 
                                    text-[11px]">
                                    Welcome,<br className="xs:hidden block"/> {getUserFirstName()}
                                    </div>
                                </div>

                                <div className={`flex justify-center items-center hover:text-yellow-300 
                                    font-bold rounded-[50%] duration-500 cursor-pointer bg-text-gradient 
                                    md:mr-1 xs:mr-2 mr-1 md:ml-2 xs:ml-0 ml-1
                                    ${initialsVisible ? "opacity-30 text-blue-500" : "text-primary"}
                                    ${scrolled 
                                    ? "w-[25px] h-[25px] xs:w-[30px] xs:h-[30px] sm:w-[50px] sm:h-[50px] md:w-[28px] md:h-[28px] text-[13px] xs:text-[16px] sm:text-[28px] md:text-[14px]" 
                                    : "w-[26px] h-[26px] xs:w-[30px] xs:h-[30px] sm:w-[40px] sm:h-[40px] md:w-[32px] md:h-[32px] text-[14px] xs:text-[14px] sm:text-[20px] md:text-[16px]"}`}
                                >
                                    {getUserInitials()}
                                </div>
                            </div> : null
                        }

                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar

