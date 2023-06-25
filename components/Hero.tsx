import React from "react";
import News from "./News";
import SampleData from "@/components/SampleData";
import ReactionWrapper from "@/components/ReactionWrapper";
import WeChatNotification from "@/components/WeChatNotification";
import PasswordChecker from "@/components/PasswordChecker";
import Interview from "@/components/Interview";
import Home from "@/components/Home";
import Quiz from "@/components/Quiz";
import Abstract from "@/components/Abstract";
import ThankYou from "@/components/ThankYou";

export default function Hero() {
  return (
    <main className="text-white relative min-h-screen h-full">
      <Home />
      <Abstract />
      <Quiz />
      <News />
      <SampleData />
      <ReactionWrapper />
      <WeChatNotification />
      <Interview />
      <PasswordChecker />
      {/*<History />*/}
        <ThankYou />
    </main>
  );
}
