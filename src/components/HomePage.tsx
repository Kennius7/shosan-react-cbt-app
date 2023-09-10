import BackButton from "./BackButton";
import Button from "./Button";


function HomePage() {
  const backLink = -1;
  const quizLink = "/quiz";

  return (
    <>
      <div>

        <h1>Hello World</h1>

        <div>

          <div className="text-center text-white italic">
            <span>NOTE OF WARNING!</span>
            <br/>
            <span>
              PLEASE TAKE NOTE THAT CLICKING ON THE NEXT BUTTON
              AFTER ANSWERING THE LAST 
              <span>(Number 10)</span> 
              QUESTION WILL SIGNAL THE END OF YOUR EXAM!
            </span> 
            <br/> 
            YOU CAN GO BACK TO PREVIOUS QUESTIONS ONLY IF YOU HAVE NOT DONE THE ABOVE. 
            <br/> 
            <br/>
            So think it through thoroughly before clicking the last Next button!
          </div>

          <Button 
            linkVariable={quizLink} 
            buttonText="Start Quiz"/>

          <div>
            <h6>
              When you're ready to start your exam, click on the 
              <span>START EXAM</span> 
              Button above. Your exam questions will load after clicking the button.
            </h6>
          </div>

        </div>

        <BackButton
          linkVariable={backLink}
          buttonText="Back" />

      </div>
    </>
  )
}

export default HomePage
