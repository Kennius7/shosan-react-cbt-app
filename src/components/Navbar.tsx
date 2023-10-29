import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { signOut } from "firebase/auth";
import logo from "../assets/Shosan-Acodemia-Logo-small2.png";
// import { NavContext } from '../context/NavContext';



function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    // const { navLinks, active, setActive, toggle, setToggle, blogAdminUid, auth } = useContext(NavContext);
    // const [currentlyLoggedInUser] = useAuthState(auth);
    // const [user] = useAuthState(auth);
    // const location = useLocation();
    // const Navigate = useNavigate();
    // const displayName = user?.displayName || "a d";
    // const [initialsVisible, setInitialsVisible] = useState(false);


    // const userInitialsFunct = () => {
    //     setTimeout(() => {
    //         const firstUserLetter = user?.displayName.split(" ")[0].split("")[0].toUpperCase();
    //         const secondUserLetter = user?.displayName.split(" ")[1].split("")[0].toUpperCase();
    //         userInitials = firstUserLetter + secondUserLetter;
    //         console.log(`The first ${userInitials}`);
    //         return userInitials;
    //     }, 0);
    //     console.log(`Another ${userInitials}`);
    // }

    // const getUserInitials = () => {
    //     const initials = displayName.split(" ").map(name => name[0].toUpperCase()).join("");
    //     // console.log(`The user's initials are ${initials}`);
    //     return initials;
    // }


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }


        // const initialVisibleFunct = () => {
        //     if (displayName === "a d") {
        //         setInitialsVisible(true);
        //     } else {
        //         setInitialsVisible(false);
        //     }
        // }

        window.addEventListener("scroll", onScroll);
        // initialVisibleFunct();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <>
            <nav className={`w-full flex justify-between items-center 
                ${location.pathname === "/quiz" ? "hidden" : "block"}`}>

                <div className="flex justify-start items-center md:w-[30%] sm:w-[35%] xs:w-[40%] w-[150px]">

                    <Link to="/" className="flex justify-center items-center md:w-[20%] sm:w-[18%] xs:w-[25%] 
                        w-[20%]">
                        <img src={logo} alt="Maticdrive logo"
                            className={`w-[28px] h-[28px] xs:w-[35px] xs:h-[35px] sm:w-[45px] sm:h-[45px] 
                            md:w-[45px] md:h-[45px] duration-1000 m-2`}
                        />
                    </Link>

                    <Link to="/" className="md:w-[65%] w-[70%] flex justify-center items-center">
                        <div className="w-full flex flex-col justify-center items-center">
                            <div className={`w-full ${scrolled
                                ? "md:text-[20px] sm:text-[25px] xs:text-[20px] text-[16px] duration-1000"
                                : "md:text-[20px] sm:text-[19px] xs:text-[16px] text-[13px] duration-1000"} 
                                sm:font-bold font-semibold text-primary w-full flex justify-start items-center`}>
                                Shosan <span className="text-primary">&nbsp;Code</span>&nbsp;Hub
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="flex md:justify-end sm:justify-around justify-end items-center 
                    md:w-[350px] sm:w-[400px] xs:w-[380px] w-[220px]">

                    <div className="flex xs:justify-around justify-end items-center sm:font-semibold xs:font-normal 
                        font-semibold md:text-[16px] sm:text-[17px] xs:text-[15px] text-[11px] 
                        md:w-[70%] sm:w-[80%] xs:w-[80%] w-[80%]">
                        <div className="md:w-[30%] sm:w-[50%] xs:w-[50%] w-[100px] text-end xs:pl-0 pl-2">
                            Back
                        </div>
                        <div className="md:w-[70%] sm:w-[50%] xs:w-[50%] w-[70px] text-end xs:leading-normal 
                        leading-[12px]">
                            Welcome<br className="xs:hidden block"/> Kenny
                        </div>
                    </div>

                    <div className={`flex justify-center items-center hover:text-yellow-300 font-bold 
                        rounded-[50%] duration-500 cursor-pointer bg-text-gradient 
                        md:mr-3 xs:mr-2 mr-1 md:ml-2 xs:ml-0 ml-1
                        ${scrolled 
                        ? "w-[25px] h-[25px] xs:w-[30px] xs:h-[30px] sm:w-[50px] sm:h-[50px] md:w-[28px] md:h-[28px] text-[13px] xs:text-[16px] sm:text-[28px] md:text-[14px]" 
                        : "w-[26px] h-[26px] xs:w-[32px] xs:h-[32px] sm:w-[40px] sm:h-[40px] md:w-[32px] md:h-[32px] text-[14px] xs:text-[18px] sm:text-[20px] md:text-[16px]"}`}
                    >
                        KK
                    </div>

                </div>

            </nav>
        </>
    )
}

export default Navbar

