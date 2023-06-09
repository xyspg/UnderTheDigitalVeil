"use client";
import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";
import { ArrowDownIcon } from "@radix-ui/react-icons";

import ImageDrag from "@/components/ImageDrag";
import History from "@/components/History";

export default function Hero() {
  const myRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(myRef, { once: false });
  const scrollToRef = () => {
    myRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className=" text-white relative min-h-screen h-full">
      <div className="bg-[url('/bg.png')] bg-cover h-screen text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.1,
                duration: 1.0,
              },
            },
          }}
          className="grid grid-rows-6 h-screen"
        >
          <div className="row-span-3 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-screen-8 mb-8 font-ApercuBold uppercase">
              Under the Digital Veil
            </h1>
            <h2 className="text-2xl mt-8 md:text-screen-2 font-ApercuLight">
              A Deep Dive into Data Privacy and Cybersecurity
            </h2>
          </div>
          <div className="pt-32 row-span-3 font-ApercuLight text-2xl flex justify-center items-centeri text-white">
            {/*<button onClick={scrollToRef} className="bg-black text-white px-6 py-3 rounded-lg">*/}
            {/*  Start Exploring{" "}*/}
            {/*</button>*/}
            <div className="flex flex-col justify-center items-center gap-4">
              Start Exploring
              <ArrowDownIcon width={50} height={50} />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={myRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1.0,
            },
          },
        }}
        className="h-screen grid grid-rows-4 bg-gray-800 relative overflow-hidden"
      >
        <div className="row-span-1 text-left font-ApercuBold text-3xl md:text-8xl mt-24 ml-12">
          Introduction
          <div className="hidden md:block absolute top-0 bottom-0 left-0 right-0">
            <ImageDrag />
          </div>
        </div>
        <div className="row-span-3 font-ApercuLight text-xl/8 tracking-wide ml-12 mr-12 ">
          <h2 className='text-4xl'>
            We are living in a century of data.
          </h2>
          <p className="mt-12 ">
            Have you ever found yourself impatiently clicking through pop-ups on
            a new website or application? &quot;Do you accept cookies?&quot;
            &quot;By logging in, you agree to our terms and conditions...&quot;
            &quot;This app wants access to your location data...&quot; &quot;Ask
            app not to track&quot;. Annoying, aren’t they? But have you ever
            paused to consider what they truly signify?
          </p>
          <p className="mt-4 ">
            These seemingly intrusive prompts are the front lines of a largely
            unseen battle, sone that involves your personal data, the modern
            economy&apos;s new oil. As technology continues to advance and our
            lives become increasingly intertwined with digital spaces, questions
            of data privacy and cybersecurity are becoming more and more important.
            This project explores these crucial issues, discussing issues
            that we encounter every day but rarely stop to fully understand.
            We&apos;ll dive into real-life narratives of
            those affected by data breaches, look at the implications of leaked
            data, and explore more on this
            cybersecurity threat.
          </p>
        </div>
      </motion.div>


      <History />
    </main>
  );
}
