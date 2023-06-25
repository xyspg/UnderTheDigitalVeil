import React from "react";
import WeChat from '@/image/wechat.jpg'
import data from '@/image/data.jpg'
import stock from '@/image/stock.jpg'
import Image from "next/image";


const News = () => {
  const date = new Date();
    const today = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    });
  return (
    <>
      <div className="p-8 bg-white text-black">
        <h1 className="text-5xl font-ApercuBold">
          Major Data Breach Hits WeChat: Over 1 Billion Users Affected
        </h1>
        <p className="mt-2 mb-4 font-serif ">Beijing, China &nbsp; {today}</p>
        <Image src={WeChat} alt='wechat' height={600}/>
        <p className='text-xs py-2 text-gray-500'>WeChat is one of the monopoly IM applications in China</p>

        <div className="mt-2 text-xl max-w-screen-xl font-serif flex flex-col gap-4">
          <span>
            WeChat, the IM app used by every Chinese citizen,
            has suffered a catastrophic data breach, affecting over 1 billion
            users globally. Personal data, including sensitive chat histories,
            have reportedly been sold in the breach, caused a great uproar on social media.
          </span>
          <span>
            The breach was a well-planned and sophisticated attack, with the intruders managed to found a safety weakness of Tencent, the company behind WeChat. They gained access to the database. The compromised information includes users&apos; identities, contact lists, payment information, and, personal chat histories for some users. This vast amount of data was found being sold on the dark web, triggering outrage and concern among users.
          </span>
          <span>  The breach&apos;s implications are massive, given the central role of WeChat in China and many other countries. The app is not only used for personal communications but also plays a pivotal role in business transactions, and even governmental communications. The data breach thus poses a potential risk of identity theft, financial loss, and even national security threats.</span>
          <span>
           After the incident, Tencent saw its stock plummet in immediate response to the news. This incident has further sparked debates on data privacy and security measures implemented by tech companies worldwide. Concerns towards tech giants are rasiing, and the ethics problem in today&apos;s world is more pronouced. </span>
          <Image src={stock} alt='stock' height={300}/>
          <p className='text-xs pb-2 text-gray-500'>The stock of Tencent plummets dramatically</p>
        </div>
      </div>
    </>
  );
};

export default News;
