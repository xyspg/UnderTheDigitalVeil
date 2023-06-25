import React from "react";
import SampleDataItem, { SampleChatHistory } from "@/components/SampleDataItem";

const SampleData = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="min-h-screen flex flex-col p-8">
          <div className="flex flex-col gap-4 text-3xl md:text-5xl justify-center items-center my-8">
            <h1 className="font-ApercuBold text-white">Sample Leaked Data</h1>
            <h2 className="font-ApercuLight text-lg text-white">
              Click on an item to explore more.
            </h2>
          </div>
          {/*
            Two Tables
            */}
          <div className="flex flex-col gap-6 justify-evenly">
            <div className="flex overflow-auto justify-center items-center mt-12">
              <SampleDataItem />
            </div>
            <SampleChatHistory />
          </div>
        </div>
      </div>
    </>
  );
};

export default SampleData;
