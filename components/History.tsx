import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

const History = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {amount: 1});
  const messages = [
    "In 2018, a data breach exposed 800 million QQ user details, mainly linked to mobile phone bindings.",
    "Starting from November 2019, a student scraped data from Taobao for eight months, stealing massive user data.",
    "On March 4, 2020, 538 million Weibo user details were leaked, of which 172 million included basic account info and bound phone numbers.",
    "On November 23, 2020, a user leaked a 44.65GB social engineering dataset on a hacker forum. The dataset contained approximately 538 million Weibo user data, 800 million QQ user data, 750,000 car owner data, 100,000 pieces of insurance company data, 700,000 pieces of business data, some express delivery info, and some loan videos and pictures.",
    "In December 2021, Chinese startup Socialarks leaked 400GB of data due to a configuration error in their Elasticsearch database. Over 318 million user records were exposed, involving users from Instagram, LinkedIn, Facebook, etc.",
    "In March 2022, over 200 million personal pieces of information were sold on a foreign dark web forum, possibly from Weibo, QQ, etc., including names, phone numbers, emails, passwords, etc.",
    "In September 2022, a local police department's database was exposed and hacked due to lack of password protection. Over 10 billion Mainland Chinese resident records were leaked, including names, addresses, places of birth, ID numbers, photos, mobile phone numbers, and criminal case info. The database was taken offline after extensive foreign media coverage, and this was considered the largest data leak of Chinese citizens in history.",
    "In February 2023, about 4.5 billion Chinese express delivery address info were leaked, including names, addresses, phone numbers, etc. It was the most dangerous leak in recent years.",
    "Below are key data leaks from foreign social media platforms that could be used to cross-reference Chinese user information:",
    "In December 2019, a hacker group obtained data from over 300 million Facebook accounts, including names, phone numbers, Facebook IDs, etc., found in an unencrypted database.",
    "In April 2021, a Facebook data breach affected over 530 million users, including names, phone numbers, birthdays, email addresses, etc., found for free on the dark web.",
    "In May 2020, a Telegram database was discovered on the dark web for sale, containing about 70 million user phone numbers and unique Telegram user IDs, likely from a 2019 data leak.",
    "In June 2020, Telegram suffered another data breach, with an unknown hacker publicly sharing user personal information on the dark web, including phone numbers, unique Telegram user IDs, and other sensitive information, reportedly affecting about 40 million users.",
    "In July 2022, Twitter confirmed a data breach caused by a now-fixed zero-day vulnerability, allowing hackers to link email addresses and phone numbers to user accounts, thus compiling a list containing 5.4 million user account information.",
    "In January 2023, a hacker calling themselves StayMad claimed to have leaked over 200 million Twitter user personal data, including high-profile accounts like Google CEO Sundar Pichai, Donald Trump Jr., SpaceX, CBS Media, NBA, WHO, etc. These data included names, phone numbers, email addresses, passwords, etc.",
  ];

  return (
    <>
      <div
          ref={ref}
        className={clsx(
          "h-screen pb-40",
          isInView ? `overflow-auto` : `overflow-hidden `
        )}
      >
        {messages.map((message, index) => (
          <motion.div
            className="h-screen flex justify-center items-center bg-gray-800 text-white px-4 text-left font-ApercuBold text-3xl md:text-7xl mt-8 mx-4 md:mt-24 md:ml-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            key={index}
          >
            {message}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default History;
