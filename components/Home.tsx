import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <>

        </>
      </Head>
      <div className="min-h-screen grid grid-cols-2">
        <div className="col-span-1 grid grid-rows-6 mx-2 my-6 md:mx-14 md:my-12">
          <div className="row-span-1 px-2 lg:px-16 lg:py-14">
            <div className="inline-flex border border-[#D3D3D3] rounded-3xl px-4 py-2">
              <p className="leading-7 font-MartianMono text-[19px]">
                {" "}
                Protect Your Data{" "}
              </p>
            </div>
          </div>
          <div className="row-span-4 px-2 lg:px-16 lg:py-14">
            <div className="inline-flex">
              <h1 className="text-[80px] font-ApercuBold break-words uppercase"
              >
                Under the digital veil
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
