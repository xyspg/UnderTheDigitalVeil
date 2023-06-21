import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cross1Icon } from "@radix-ui/react-icons";

const Reaction = () => {
  const reactions = [
    {
      id: 1,
      title: "A famous actor's post on Weibo",
      description: "His private personal WeChat account exposed",
      content: `Amid this chaos of the WeChat breach, my private account has been overrun with friend requests, making it impossible for me to maintain my usual contact list. I understand that everyone is curious or excited but I kindly ask you all to respect my privacy in these difficult times.<br>

In light of this incident, I will be moving my communication over to a more secure platform until we can be assured of our privacy on WeChat. Please bear with me during this transition and keep the support and love coming – but in the right way. Stay safe, everyone.<br>

#WeChatBreach #PrivacyFirst`,
    },
    {
      id: 2,
      title:
        "The press release to investors of a company who lost their investment",
      description: `The leaked chat history is showing the company's product is not environmentally friendly, making them lose their investments`,
      content: `In response to recent events involving the unfortunate WeChat data breach, we find ourselves amid a difficult situation. Details of our internal discussions were leaked, revealing that we face significant environmental challenges.<br>

We wish to address this transparently. It is true; we are grappling with the environmental implications of our product. It is an issue that we take very seriously, and one we have been working tirelessly to resolve. We believe in our potential for positive change, and we're committed to taking the necessary steps to minimize our environmental impact.
<br>
We apologize for any concerns or misinformation the data breach may have caused our partners, investors, and customers. This is a moment of reckoning for us, and we are prepared to face it with integrity and responsibility.`,
    },
    {
      id: 3,
      title: "A letter to friend from a transgender 🏳️‍⚧️",
      description: "Her private chat history and EV purchase history exposed",
      content: `Hey,<br>

I can't believe this WeChat data breach has turned my life upside down. You remember my parents, right? The old-fashioned, conservative ones? Well, they found out about me. They saw my chats, my purchase of Estradiol valerate. Everything. And it's not like they ever bothered to understand or accept who I truly am.<br>

I feel so violated and betrayed. Not only was my personal information exposed, my dignity was trampled upon. The space where I once felt free to be myself is now just a reminder of my vulnerability and the nightmare that has ensued.<br>

Now, I'm not even sure if I can call them 'parents' anymore. They severed all ties with me. Over something I had no control over. Over something that WeChat should have protected.<br>

How is it fair that we, the users, have to bear the brunt of these tech companies' carelessness? They failed in their responsibility to protect our data. Now, I'm left to deal with the fallout of their incompetence.<br>

I'm angry, I'm hurt, and I'm scared. But I'm not going to stay silent. It's time these tech giants were held accountable for the damage they cause. We deserve better.`,
    },
  ];

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedItem = reactions.find((item) => item.id === selectedId);
  return (
    <main className="relative">
      <div className="flex flex-row gap-4 flex-grow px-8 justify-around">
        {reactions.map((item) => (
          <motion.div
            className="bg-neutral-200 px-4 py-8 rounded-lg flex flex-col gap-4 w-1/3
            cursor-pointer hover:bg-neutral-300
            "
            key={item.id}
            layoutId={item.title}
            onClick={() => setSelectedId(item.id)}
          >
            <motion.h2 className="text-xl text-neutral-950 font-ApercuBold">
              {item.title}
            </motion.h2>
            <motion.h5 className="text-md text-neutral-500 font-ApercuLight">
              {item.description}
            </motion.h5>
          </motion.div>
        ))}
      </div>
      <div>
        <AnimatePresence>
          {selectedItem && (
            <>
              <motion.div
                  className="
            fixed inset-0 bg-black bg-opacity-60
            z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.div
                className="
              flex flex-col gap-4
                bg-neutral-50 px-12 py-20 rounded-lg
                fixed inset-0 z-10
                h-[80vh] w-[80vw] mx-auto my-auto
              "
                layoutId={selectedItem.title}
              >
                <motion.h2 className="text-3xl text-neutral-950 font-ApercuBold">
                  {selectedItem.title}
                </motion.h2>
                <motion.h5 className="text-md text-neutral-800 font-ApercuLight">
                  {selectedItem.description}
                </motion.h5>
                <motion.p className="text-lg text-black font-serif"
                dangerouslySetInnerHTML={{ __html: selectedItem.content }} />
                <motion.button className='text-black mt-4' onClick={() => setSelectedId(null)}>
                  <button className="bg-black text-white px-4 py-2 rounded-lg">
                    Close
                  </button>
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Reaction;
