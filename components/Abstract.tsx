"use client";
import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import ImageDrag from "@/components/ImageDrag";

const Abstract = () => {
    const myRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(myRef, { once: true });
    const scrollToRef = () => {
        myRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
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
                className="h-screen grid grid-rows-4 bg-[#161A1D] relative overflow-hidden"
            >
                <div className="row-span-1 text-left font-ApercuBold text-3xl md:text-8xl mt-24 ml-12">
                    Abstract
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
                        unseen battle that involves your personal data. As technology continues to advance and our
                        lives become increasingly intertwined with digital spaces, questions
                        of data privacy and cybersecurity are becoming more and more important.
                        This project explores these crucial issues, discussing issues
                        that we encounter every day but rarely stop to fully understand.
                        We&apos;ll dive into real-life narratives of
                        those affected by data breaches, look at the implications of leaked
                        data, and explore more on this cybersecurity threat.
                    </p>
                </div>
            </motion.div>
            <div className="h-screen flex flex-col font-ApercuLight text-4xl md:text-7xl justify-center items-start px-4 md:px-12 break-words w-[80vw]">
                <h1>Now, experience a journey on a WeChat data leak incident. </h1>
                <h2 className="mt-12 text-xl md:text-3xl">
                    Scroll down to read a news article
                </h2>
            </div>
        </>
    );
};

export default Abstract;
