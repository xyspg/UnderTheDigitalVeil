import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDownIcon } from "@radix-ui/react-icons";

const Home = () => {
  const myRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(myRef, { once: true });
  const scrollToRef = () => {
    myRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="bg-[url('/bg.png')] bg-cover h-screen text-center">
        <div className="grid grid-rows-6 h-screen">
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
                  duration: 0.8,
                },
              },
            }}
            className="row-span-3 flex flex-col justify-center items-center text-white"
          >
            <h1 className="text-4xl md:text-screen-8 mb-8 font-ApercuBold uppercase">
              Under the Digital Veil
            </h1>
            <h2 className="text-2xl mt-8 md:text-screen-2 font-ApercuLight">
              A Deep Dive into Personal Data Privacy and Cybersecurity
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.8,
                },
              },
            }}
            className="pt-32 row-span-3 font-ApercuLight text-2xl flex justify-center items-centeri text-white"
          >
            {/*<button onClick={scrollToRef} className="bg-black text-white px-6 py-3 rounded-lg">*/}
            {/*  Start Exploring{" "}*/}
            {/*</button>*/}
            <div className="flex flex-col justify-center items-center gap-4">
              Start Exploring
              <ArrowDownIcon width={50} height={50} />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;

// import React from "react";
// import Head from "next/head";
//
// const Home = () => {
//   return (
//     <>
//       <Head>
//         <>
//
//         </>
//       </Head>
//       <div className="min-h-screen grid grid-cols-2">
//         <div className="col-span-1 grid grid-rows-6 mx-2 my-6 md:mx-14 md:my-12">
//           <div className="row-span-1 px-2 lg:px-16 lg:py-14">
//             <div className="inline-flex border border-[#D3D3D3] rounded-3xl px-4 py-2">
//               <p className="leading-7 font-MartianMono text-[19px]">
//                 {" "}
//                 Protect Your Data{" "}
//               </p>
//             </div>
//           </div>
//           <div className="row-span-4 px-2 lg:px-16 lg:py-14">
//             <div className="inline-flex">
//               <h1 className="text-[80px] font-ApercuBold break-words uppercase"
//               >
//                 Under the digital veil
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
//
// export default Home;
