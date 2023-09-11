import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";
import ScorePage from "./components/ScorePage";
import Register from "./components/Register";
import ScrollToTop from "./ScrollToTop";
import { AppContext } from "./context/AppContext";



function App() {
  const [scrolled, setScrolled] = useState(false);
  const [examTimeLimit, setExamTimeLimit] = useState(1000);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [buttonColorA, setButtonColorA] = useState(false);
  const [buttonColorB, setButtonColorB] = useState(false);
  const [buttonColorC, setButtonColorC] = useState(false);
  const [buttonColorD, setButtonColorD] = useState(false);
  const [scoreText, setScoreText] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scoreAdded, setScoreAdded] = useState(false);
  const [answered, setAnswered] = useState(false);

  // const scoreTotal = [
  //   scoreText * (currentQuestion + 1),
  // ]

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);



  return (
    <>
      <AppContext.Provider value={{ 
        examTimeLimit, setExamTimeLimit, buttonColorA, setButtonColorA, buttonColorB, setButtonColorB,
        buttonColorC, setButtonColorC, buttonColorD, setButtonColorD, scoreText, setScoreText, 
        currentQuestion, setCurrentQuestion, seconds, setSeconds, minutes, setMinutes, hours, setHours,
        scoreAdded, setScoreAdded, answered, setAnswered,
      }}>
        <BrowserRouter>
          <div className={`flex flex-col relative w-full`}>
            <div
              className={`w-full z-[3]
              ${scrolled
                  ? "bg-primary fixed duration-1000"
                  : "bg-transparent absolute duration-1000"
                }`}>
              {/* <Navbar /> */}
            </div>

            <ScrollToTop />

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/score" element={<ScorePage />} />
            </Routes>

            <div className="w-full">
              {/* <Footer /> */}
            </div>
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
