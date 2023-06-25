import React from "react";

const interviewTranscript = [
  {
    speaker: "Interviewer",
    line: "Good evening, listeners. Today we have cybersecurity expert Dr. Jane Miller with us. Dr. Miller, thank you for joining us.",
  },
  {
    speaker: "Dr. Jane Miller",
    line: "Thank you for having me.",
  },
  {
    speaker: "Interviewer",
    line: "Dr. Miller, let's get straight to it. This WeChat breach is enormous, affecting over a billion users. Can you tell us a little about what this breach means for the average user?",
  },
  {
    speaker: "Dr. Jane Miller",
    line: "Certainly. This breach is serious. Not only were contact lists and identities compromised, but personal chat histories and payment information too. That means your private conversations, your financial transactions, and your personal connections have been potentially exposed. It opens up possibilities for identity theft, financial fraud, and potential misuse of personal information.",
  },
  {
    speaker: "Interviewer",
    line: "That sounds incredibly worrying. What measures can an individual take to protect their data in the wake of such a breach?",
  },
  {
    speaker: "Dr. Jane Miller",
    line: "After such a breach, the first step is to change your passwords immediately. Also, monitor your financial accounts for any unusual activity. It's a good idea to notify your bank about the breach. They can keep an extra eye out for fraudulent activity. If possible, enable two-factor authentication on your accounts.",
  },
  {
    speaker: "Interviewer",
    line: "What can we do to protect our data privacy proactively to avoid such incidents?",
  },
  {
    speaker: "Dr. Jane Miller",
    line: "Proactive data privacy measures are crucial. Regularly updating your passwords and not using the same password across platforms is a good start. It's also essential to keep your software updated. Often, updates include patches for security vulnerabilities. Using encrypted messaging apps and having a good understanding of the privacy settings on the apps you use can also help you protect your data.",
  },
  {
    speaker: "Interviewer",
    line: "How do you think tech companies should respond to such breaches?",
  },
  {
    speaker: "Dr. Jane Miller",
    line: "Tech companies need to prioritize data privacy and invest heavily in security infrastructure. They should be transparent about their data policies and inform users promptly when a breach occurs. Regular audits and stress testing their security systems can help identify vulnerabilities before they are exploited by malicious actors.",
  },
  {
    speaker: "Interviewer",
    line: "What are the implications for policy?",
  },
  {
    speaker: "Dr. Jane Miller",
    line: "Breaches like this underscore the need for robust data privacy legislation. Policymakers need to enforce stringent regulations for data protection and ensure companies face significant penalties for failures in data security.",
  },
  {
    speaker: "Interviewer",
    line: "Well, it's clear that both individuals and tech companies need to take data privacy seriously. Thank you for your insights, Dr. Miller.",
  },
  {
    speaker: "Dr. Jane Miller",
    line: "Thank you for having me. It's important to have these conversations and raise awareness about data privacy.",
  },
];

const Interview = () => {
  return (
    <>
      <main className="min-h-screen bg-white py-8">
        <h1 className="pt-8 md:pt-16 text-black text-4xl font-ApercuBold p-4 mt-8 text-center">
          Interview Transcript
        </h1>
        <h2 className=' mb-4 text-lg text-black font-ApercuLight text-center'>Here is a transcript of an interview with cybersecurity expert Dr. Jane Miller. </h2>
        <div className="flex flex-col gap-4 px-8 md:px-12">
          {interviewTranscript.map((line, index) => (
            <div key={index} className="flex flex-col gap-4 justify-start ">
              <p className="text-2xl text-black font-ApercuLight flex flex-col gap-1">
                <span className="text-neutral-800 font-ApercuLight text-sm">
                  {line.speaker}:{" "}
                </span>
                {line.line}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Interview;
