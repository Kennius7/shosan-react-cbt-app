/* eslint-disable @typescript-eslint/ban-ts-comment */
import { auth } from "../../FirebaseConfig";
import logo from "../assets/Shosan-Acodemia-Logo-small2.png";
import { AppContext } from "../context/AppContext";
import ExitExamButton from "./ExitExamButton"
import { useContext, useRef, useState } from 'react';
import html2canvas from 'html2canvas';



function ScorePage() {
    const apiUrl = "https://shosan-computer-based-test.netlify.app/.netlify/functions/api/send-email";
    const homeLink = "/";
    const captureRef = useRef(null);
    // @ts-ignore
    const studentName = auth.currentUser?.displayName.split(" ")[0];
    const { scoreText } = useContext(AppContext);
    // const [attachment, setAttachment] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const to = auth.currentUser?.email;
    const subject = "TEST SCORE PRINTOUT";
    // const text = `Here is a printout of your test score, ${studentName}. You scored ${scoreText}/100. Try again next time` 




    const printScore = async () => {
        if (captureRef.current) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            html2canvas(captureRef.current).then((canvas: any) => {
                const screenshotData = canvas.toDataURL("image/png");
                // Create an anchor element to download the image
                const a = document.createElement('a');
                a.href = screenshotData;
                a.download = 'screenshot.png';
                setImageUrl(()=>screenshotData);
                a.click();
            })

            // Create an HTML email with the embedded image
            const htmlEmail = `
            <html>
                <body>
                <p>Here is a printout of your test score, ${studentName}. You scored ${scoreText}/100. Try again next time</p>
                <img src="${imageUrl}" alt="Embedded Score Image" />
                </body>
            </html>
            `;

            const formData = new FormData();
            // @ts-ignore
            formData.append('to', to);
            formData.append('subject', subject);
            // formData.append('text', text);
            // formData.append('attachment', attachment);
            formData.append('html', htmlEmail);

            try {
                const response = await fetch(apiUrl, {
                  method: 'POST',
                  body: formData,
                });
          
                if (response.ok) {
                  console.log('Email sent successfully');
                //   console.log(htmlEmail);
                } else {
                  console.error('Email sending failed');
                }
              } catch (error) {
                console.error('An error occurred:', error);
              }
        }
    }



  return (
    <>
        <div ref={captureRef} 
            className="relative flex justify-center items-center overflow-hidden w-full h-[100vh]">
            <div className="flex justify-start items-center overflow-hidden w-full 
                md:mt-0 sm:-mt-[200px] xs:mt-0 xxs:-mt-[27%] -mt-[10%]">

                <div className="md:w-[50%] md:h-[50%] sm:w-[90%] sm:h-[90%] xs:w-[95%] xs:h-[95%] 
                    w-[98%] h-[98%] md:ml-0 sm:-ml-[200px] ml-0">
                    <img src={logo} alt="logo" className="w-full h-full opacity-20"/>
                </div>
                
            </div>
            <div className="flex flex-col justify-center items-center w-full absolute z-[2] 
                xs:top-[15%] top-[16%]">
                <div className="text-center font-poppins font-semibold sm:text-[40px] xs:text-[28px] 
                    xxs:text-[21px] text-[16px] xxs:mb-4 mb-2">
                    SHOSAN COMPUTER BASED TEST
                </div>

                <div className="text-center font-poppins sm:text-[20px] xs:text-[18px] xxs:text-[15px] 
                    text-[13px] italic sm:w-[50%] xs:w-[70%] xxs:w-[85%] w-[95%] mb-[30px]">
                    Your score sheet is presented below. 
                    Click on the Print button below to print your score sheet.
                </div>

                <div className="flex xs:flex-row flex-col justify-center items-center w-full xs:mb-[100px] 
                    xxs:mb-[140px] mb-[80px]">
                    <div className="text-center font-poppins font-semibold sm:text-[30px] 
                        xs:text-[27px] xxs:text-[22px] text-[16px]">
                        Hello {studentName},<br className="xs:hidden block" /> your score is&nbsp;
                    </div>
                    <div className={`font-poppins font-bold flex justify-center items-center 
                        sm:text-[30px] xs:text-[27px] xxs:text-[45px] text-[20px] xxs:ml-0 ml-1
                        ${scoreText <= 39 ? "text-red-600" : ""}
                        ${scoreText >= 40 && scoreText < 70 ? "text-yellow-600" : ""}
                        ${scoreText >= 70 ? "text-blue-600" : ""}`}>
                        {scoreText}<span className="text-black">/100</span>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full sm:mb-[30px] xs:mb-[50px] mb-[40px]">
                    <button 
                        type="button" 
                        onClick={printScore} 
                        className="bg-blue-gradient2 text-white xxs:text-[16px] text-[14px] 
                        sm:w-[30%] xs:w-[50%] xxs:w-[80%] w-[70%]">
                        PRINT EXAM SCORE
                    </button>
                </div>

                <div className="flex justify-center items-center w-full">
                    <ExitExamButton linkVariable={homeLink} buttonText="EXIT CBT"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ScorePage