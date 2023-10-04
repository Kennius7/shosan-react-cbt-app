/* eslint-disable @typescript-eslint/no-unused-vars */
import { SetStateAction, createContext } from "react";

type examUtilTypes = {
    id?: number;
    answer?: string;
    option?: boolean;
  }

type appContextTypes = {
    examTimeLimit: number, 
    setExamTimeLimit: React.Dispatch<React.SetStateAction<number>>, 
    buttonColorA: boolean, 
    setButtonColorA: React.Dispatch<React.SetStateAction<boolean>>, 
    buttonColorB: boolean, 
    setButtonColorB: React.Dispatch<React.SetStateAction<boolean>>,
    buttonColorC: boolean, 
    setButtonColorC: React.Dispatch<React.SetStateAction<boolean>>, 
    buttonColorD: boolean, 
    setButtonColorD: React.Dispatch<React.SetStateAction<boolean>>,
    scoreText: number, 
    setScoreText: React.Dispatch<React.SetStateAction<number>>,
    currentQuestion: number,
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>,
    seconds: number, 
    setSeconds: React.Dispatch<React.SetStateAction<number>>, 
    minutes: number, 
    setMinutes: React.Dispatch<React.SetStateAction<number>>, 
    hours: number, 
    setHours: React.Dispatch<React.SetStateAction<number>>,
    scoreAdded: boolean, 
    setScoreAdded: React.Dispatch<React.SetStateAction<boolean>>,
    answered: boolean, 
    setAnswered: React.Dispatch<React.SetStateAction<boolean>>,
    checkQuizPage: boolean, 
    setCheckQuizPage: React.Dispatch<React.SetStateAction<boolean>>,
    examUtils: examUtilTypes[], 
    setExamUtils: React.Dispatch<React.SetStateAction<Array<examUtilTypes>>>,
    examOptionsData: object,
}

export const AppContext = createContext<appContextTypes>({
    examTimeLimit: 0,
    setExamTimeLimit: function (_value: SetStateAction<number>): void {
        throw new Error("Function not implemented.");
    },
    buttonColorA: false,
    setButtonColorA: function (_value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
    buttonColorB: false,
    setButtonColorB: function (_value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
    buttonColorC: false,
    setButtonColorC: function (_value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
    buttonColorD: false,
    setButtonColorD: function (_value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
    scoreText: 0,
    setScoreText: function (_value: SetStateAction<number>): void {
        throw new Error("Function not implemented.");
    },
    currentQuestion: 0,
    setCurrentQuestion: function (_value: SetStateAction<number>): void {
        throw new Error("Function not implemented.");
    },
    seconds: 0,
    setSeconds: function (_value: SetStateAction<number>): void {
        throw new Error("Function not implemented.");
    },
    minutes: 0,
    setMinutes: function (_value: SetStateAction<number>): void {
        throw new Error("Function not implemented.");
    },
    hours: 0,
    setHours: function (_value: SetStateAction<number>): void {
        throw new Error("Function not implemented.");
    },
    scoreAdded: false,
    setScoreAdded: function (_value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
    answered: false,
    setAnswered: function (_value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
    checkQuizPage: false,
    setCheckQuizPage: function (_value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
    examUtils: [],
    setExamUtils: function (_value: SetStateAction<Array<examUtilTypes>>): void {
        throw new Error("Function not implemented.");
    },
    examOptionsData: {answer: "", option: false}
});


