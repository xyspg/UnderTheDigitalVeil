import React from "react";
import Link from "next/link";

const QuizTime = () => {
  return (
    <>
      <div className="h-96 bg-neutral-300 text-neutral-800 flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-ApercuBold p-4 my-2 text-center">
          Quiz Time
        </h1>
        <p className='font-ApercuLight text-lg w-2/3 mb-4 text-center'>
          Unlock your data privacy knowledge with our interactive quiz. Find out
          what you should do after a data breach, and more!
        </p>
        <Link href="/quiz" target='_blank'>
          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Take the Quiz
          </button>
        </Link>
      </div>
    </>
  );
};

export default QuizTime;
