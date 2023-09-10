import { AppContext } from "../context/AppContext";
import Button from "./Button"
import { useContext } from 'react';


function ScorePage() {
    const homeLink = "/";
    const { scoreText } = useContext(AppContext);

    const printScore = () => {
        console.log("Print Score");
    }

  return (
    <>
        <div>
            <div>
                <div className="">
                    <img src="img/shosan.jpg" alt="logo"/>
                    <div className="">
                        <h5 className="">SHOSAN COMPUTER BASED TEST</h5>
                    </div>   
                </div>

                <div>
                    Your score sheet is presented below. 
                    Click on the Print button below to print your score sheet.
                </div>

                <h1>
                    Your score is: {scoreText}
                </h1>

                <div>
                    <button type="button" onClick={printScore}>PRINT EXAM SCORE</button>

                    <Button linkVariable={homeLink} buttonText="EXIT CBT"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ScorePage