"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import {useRouter} from 'next/navigation'
import Loading from '@/app/loading'
import { useLocalStorage } from "@/lib/hooks/use-local-storage";

const quizQuestions = [
  {
    question: "What is the first step you should take after a data breach?",
    options: [
      "Ignore the breach",
      "Delete your accounts",
      "Nothing",
      "Change your passwords",
    ],
    answer: "Change your passwords",
    explanation:
      "Changing your passwords immediately helps to secure your account and prevent unauthorized access using the compromised password.",
  },
  {
    question: "What does 2FA stand for in terms of online security?",
    options: [
      "Two Factor Authentication",
      "Two Friendly Aliens",
      "Two Factor Alphabet",
      "Two Frequent Actions",
    ],
    answer: "Two Factor Authentication",
    explanation:
      "2FA stands for Two Factor Authentication, an extra layer of security used to ensure the security of online accounts beyond just a username and password.",
  },
  {
    question: "What is a good proactive measure for data privacy?",
    options: [
      "Share your password with friends",
      "Use the same password for all accounts",
      "Ignore software updates",
      "Regularly update your passwords",
    ],
    answer: "Regularly update your passwords",
    explanation:
      "Regularly updating your passwords ensures that even if one of your older passwords was compromised, the potential harm can be limited.",
  },
  {
    question:
      "What's a responsibility of tech companies to ensure data privacy?",
    options: [
      "Keep user data unprotected",
      "Ignore data breaches",
      "Avoid investing in security infrastructure",
      "Inform users after a breach",
    ],
    answer: "Inform users after a breach",
    explanation:
      "Tech companies have a responsibility to inform their users promptly when a breach occurs, so users can take necessary steps to protect their data.",
  },
  {
    question:
      "Why should you be careful while downloading apps from the internet?",
    options: [
      "Because they might use up your device storage",
      "Because they might contain viruses or malware",
      "Because they might make your device run slower",
      "All of the above",
    ],
    answer: "Because they might contain viruses or malware",
    explanation:
      "Downloading apps from unreliable sources can risk installing malware or viruses on your device, which can compromise your personal data.",
  },
  {
    question: "What is phishing?",
    options: [
      "A type of online scam where the scammer pretends to be a reputable company",
      "A hobby that involves catching fish",
      "A way to encrypt data",
      "A method for optimizing search engines",
    ],
    answer:
      "A type of online scam where the scammer pretends to be a reputable company",
    explanation:
      "Phishing is a type of online scam where the scammer pretends to be a reputable company to trick you into revealing personal information, like passwords and credit card numbers.",
  },
  {
    question:
      "Why is it important to use different passwords for each online account?",
    options: [
      "Because it's easier to remember",
      "Because if one password is compromised, not all your accounts will be at risk",
      "Because it makes your accounts easier to manage",
      "Because it's a requirement for all online platforms",
    ],
    answer:
      "Because if one password is compromised, not all your accounts will be at risk",
    explanation:
      "Using different passwords for each account helps to limit the damage if one password is compromised. If the same password is used across multiple accounts, all those accounts are at risk.",
  },
  {
    question: "What is the purpose of a VPN (Virtual Private Network)?",
    options: [
      "To increase your internet speed",
      "To bypass work restrictions",
      "To protect your online browsing data from being tracked",
      "To fix bugs in your operating system",
    ],
    answer: "To protect your online browsing data from being tracked",
    explanation:
      "A VPN is used to protect your online browsing data from being tracked, allowing you to maintain privacy and anonymity online.",
  },
  {
    question: "What type of information does cookies usually store?",
    options: [
      "Your home address and phone number",
      "Your pet's name and age",
      "Your browsing history and preferences",
      "Your social security number and passport number",
    ],
    answer: "Your browsing history and preferences",
    explanation:
      "Cookies usually store your browsing history and preferences to provide a more personalized browsing experience.",
  },
  {
    question: "What is encryption in terms of online data security?",
    options: [
      "A technique to speed up data transfer",
      "A method for compressing video files",
      "A way to translate data into a code to prevent unauthorized access",
      "A process to enhance the colors of digital images",
    ],
    answer:
      "A way to translate data into a code to prevent unauthorized access",
    explanation:
      "Encryption is a way to translate data into a code to prevent unauthorized access. It helps protect sensitive information from being accessed by cybercriminals.",
  },
];


const Quiz = () => {
  const router = useRouter()
  const [quizIndex, setQuizIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState<"correct" | "incorrect" | null>(
    null
  );
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreHistory, setScoreHistory] = useLocalStorage("scoreHistory", 0);

  const [showScoreBoard, setShowScoreBoard] = useState(false);
  const [loading, setLoading] = useState(true);


  // 进行作答
  const handleOptionClick = (option: string) => {
    if (hasAnswered) return; // 已经作答过了
    setHasAnswered(true);
    const correctAnswer = quizQuestions[quizIndex].answer;
    if (option === correctAnswer) {
      setIsCorrect("correct");
      // 添加分数
      setScore((prev) => prev + 100 / quizQuestions.length);
    } else setIsCorrect("incorrect");
  };


  useEffect(() => {
    // 在 scoreHistory 可用前，显示Loading
    setLoading(false);
    // 如果存在历史分数，显示结算页面
    if (scoreHistory && scoreHistory !== 0) {
      setShowScoreBoard(true);
    }
  }, [scoreHistory]);

  const handleNextClick = () => {
    if (quizIndex === quizQuestions.length - 1) {
      //题目结束，上传分数，显示结算页面
      setScoreHistory(score)
      setShowScoreBoard(true);
      //@ts-ignore
      window.umami.track(`quiz score: ${score}`)

      return;
    }
    setQuizIndex(quizIndex + 1);
    setIsCorrect(null);
    setHasAnswered(false);
  };



  const handleRetakeQuiz = () => {
  //   重新开始，清空LocalStorage值
    setScoreHistory(0);
    setShowScoreBoard(false);
    setQuizIndex(0)
    setScore(0)

  }

  if (loading) return <Loading />

  if (showScoreBoard) {
    return (
      <>
        <div className="h-screen bg-white">
          <div className="flex flex-col justify-center items-center h-full gap-4">
            <h1 className="text-5xl font-ApercuBold mb-8">Congratulations</h1>
            <h2 className="text-3xl font-ApercuLight">Your Score</h2>
            <h1 className="text-3xl font-ApercuLight">{scoreHistory}</h1>
            <button onClick={handleRetakeQuiz} className="mt-12 bg-black text-green-500 font-ApercuBold px-8 py-2 rounded-lg">
              Retake the Quiz
            </button>
            <Link href="/">
              <button className="bg-black text-white font-ApercuBold px-8 py-2 rounded-lg">
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <main className="">
        <div className="min-h-screen bg-white px-4 py-12 md:px-24 md:py-36 grid grid-rows-4 grid-cols-2 gap-4 gap-x-8 md:gap-x-12">
          <div className="row-span-1 col-span-2 flex flex-row justify-between">
            {/*Question*/}
            <div className="flex flex-col gap-1">
              <p className="font-ApercuLight">
                {quizIndex + 1} of {quizQuestions.length}
              </p>
              <h1 className="font-ApercuLight text-3xl">
                {quizQuestions[quizIndex].question}
              </h1>
            </div>

            {/*Score Count*/}
            <div className="flex flex-col gap-1">
              <div className="font-ApercuLight">Score</div>
              <h1 className="font-ApercuLight text-5xl">{score}</h1>
            </div>
          </div>
          <div className="row-span-3 col-span-1 flex flex-col gap-2">
            {quizQuestions[quizIndex].options.map((option, index) => (
              <>
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={clsx(
                    "px-4 w-full h-full rounded-lg font-ApercuLight text-lg",
                    hasAnswered
                      ? option === quizQuestions[quizIndex].answer
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-neutral-200 hover:bg-neutral-300"
                  )}
                >
                  {option}
                </button>
              </>
            ))}
          </div>
          {isCorrect && (
            <>
              <div className="row-span-4 col-span-1 grid grid-rows-3 gap-4">
                <div className="row-span-1 text-5xl rounded-lg flex justify-center items-center">
                  {isCorrect === "correct" ? (
                    <h1 className="font-ApercuBold text-3xl text-green-500">
                      Correct!
                    </h1>
                  ) : (
                    <h1 className="font-ApercuLight text-3xl text-red-500">
                      Incorrect!
                    </h1>
                  )}
                </div>
                <div className="row-span-2 text-xl font-ApercuLight">
                  {quizQuestions[quizIndex].explanation}
                </div>
                <div className="row-span-1 flex justify-end items-center gap-4">
                  <button
                    onClick={handleNextClick}
                    className="bg-black text-white px-6 py-3 rounded-lg"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Quiz;
