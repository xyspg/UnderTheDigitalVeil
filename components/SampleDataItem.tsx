import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PersonalInformation = [
  {
    user_id: "wxid_030wf5vcqph222",
    wechat_id: "@YHN04B009",
    user_name: "ATRI",
    gender: "M",
    phone_number: "+86 19522370644",
    bio: "美味しいは嬉しいです！",
    region: {
      country: "China",
      province: "Beijing",
      city: "Beijing",
    },
  },
  {
    user_id: "wxid_00tgu0fwqjcs22",
    wechat_id: "@echodream",
    user_name: "Echo Dream",
    gender: "F",
    phone_number: "+86 15259172893",
    bio: "Echo dreaming, unstoppable",
    region: {
      country: "China",
      province: "Guangdong",
      city: "Shenzhen",
    },
  },
  {
    user_id: "wxid_071trpaebae421",
    wechat_id: "@hyy20060323",
    user_name: "HYY",
    gender: "M",
    phone_number: "+86 18782426267",
    bio: "我们人呐，要往前走，留在后面的是回忆，往前走的动力是梦想。",
    region: {
      country: "China",
      province: "Beijing",
      city: "Beijing",
    },
  },
  {
    user_id: "wxid_0gvikd3ovn6222",
    wechat_id: "@yuanzhiyuan",
    user_name: "微雨黄昏",
    gender: "F",
    phone_number: "+86 13634465011",
    bio: "我是一个喜欢看书的人，喜欢看书的人，不会是坏人。",
    region: {
      country: "China",
      province: "Shanghai",
      city: "Shanghai",
    },
  },
  {
    user_id: "wxid_093fy4fti59h12",
    wechat_id: "@johnsmith",
    user_name: "John Smith",
    gender: "M",
    phone_number: "+1 18****212",
    bio: "I am a student at the University of Toronto.",
    region: {
      country: "Canada",
      province: "Ontario",
      city: "Toronto",
    },
  },
  {
    user_id: "wxid_0fu0iou8q8lp22",
    wechat_id: "@jessicajones",
    user_name: "Jessica Jones",
    gender: "F",
    phone_number: "+1 16****560",
    bio: null,
    region: {
      country: "United States",
      province: "New York",
      city: "New York",
    },
  },
  {
    user_id: "wxid_0hxbyr9tai9a22",
    wechat_id: "@happyhappy123456",
    user_name: "Happy Happy",
    gender: "F",
    phone_number: "+82 19938191891",
    bio: "저는 서울 국립대학교의 학생입니다.",
    region: {
      country: "South Korea",
      province: "Seoul",
      city: "Seoul",
    },
  },
  {
    user_id: "wxid_0jp67nrs52cp22",
    wechat_id: "@jamesbond",
    user_name: "ش في دبي.",
    gender: "M",
    phone_number: "+971 198****409",
    bio: "أعيش في دبي.أعيش في دبي.",
    region: {
      country: "United Arab Emirates",
      province: "Dubai",
      city: "Dubai",
    },
  },
];

const ChatHistory = [[
      {
        "id": "1",
        "type": "message",
        "date": "2023-06-21T16:00:00Z",
        "from": "Alex",
        "from_id": "001",
        "text": "Hey, did you start studying for the bio exam yet?"
      },
      {
        "id": "2",
        "type": "message",
        "date": "2023-06-21T16:05:00Z",
        "from": "Jordan",
        "from_id": "002",
        "text": "Just started this afternoon, the cell division stuff is killing me 🙄"
      },
      {
        "id": "3",
        "type": "message",
        "date": "2023-06-21T16:10:00Z",
        "from": "Alex",
        "from_id": "001",
        "text": "I know right! Mitosis and meiosis... I always mix them up 😕"
      },
      {
        "id": "4",
        "type": "message",
        "date": "2023-06-21T16:15:00Z",
        "from": "Jordan",
        "from_id": "002",
        "text": "Same! We should totally do a study group tonight. Might help us clear things up."
      },
      {
        "id": "5",
        "type": "message",
        "date": "2023-06-21T16:20:00Z",
        "from": "Alex",
        "from_id": "001",
        "text": "Sounds like a plan, dude! I'll bring the snacks 🍕🍿"
      }
    ],[
      {
        "id": "1",
        "type": "message",
        "date": "2023-06-21T18:00:00Z",
        "from": "Alex",
        "from_id": "001",
        "text": "Hey dad, I was thinking of hosting a study group tonight at home. Is that okay?"
      },
      {
        "id": "2",
        "type": "message",
        "date": "2023-06-21T18:05:00Z",
        "from": "Alex's Dad",
        "from_id": "003",
        "text": "Sure, son. How many friends are you planning to invite?"
      },
      {
        "id": "3",
        "type": "message",
        "date": "2023-06-21T18:10:00Z",
        "from": "Alex",
        "from_id": "001",
        "text": "Just Jordan for now. We both need to prep for our bio exam."
      },
      {
        "id": "4",
        "type": "message",
        "date": "2023-06-21T18:15:00Z",
        "from": "Alex's Dad",
        "from_id": "003",
        "text": "That's alright. Remember to clean up afterwards. And if you need any help, don't hesitate to ask."
      },
      {
        "id": "5",
        "type": "message",
        "date": "2023-06-21T18:20:00Z",
        "from": "Alex",
        "from_id": "001",
        "text": "Will do, thanks dad!"
      }
    ]
]
;

const SampleDataItem = () => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const selectedUser = PersonalInformation.find(
    (item) => item.user_id === selectedKey
  );

  return (
    <div className="w-screen grid grid-cols-2 gap-6">
      <Table className="font-mono col-span-1 ">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] ">WeChat ID</TableHead>
            <TableHead className="w-[100px]">Phone Numeber</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {PersonalInformation.map((item) => (
            <TableRow
                className='cursor-pointer hover:bg-gray-700'
              key={item.user_id}
              onClick={() => {
                setSelectedKey(item.user_id);
              }}
            >
              <TableCell>{item.user_id}</TableCell>
              <TableCell>
                {item.phone_number
                    .replace(/(\+\d{2}\s\d{3})(\d{4})(\d{4})/, "$1****$3")
                }
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>And over 1 billion </TableCell>
            <TableCell>more...</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="col-span-1 w-1/2">
        <AnimatePresence>
          {selectedUser && (
            <SampleChatDataItem
              key={selectedKey}
              personal_information={selectedUser}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SampleDataItem;

interface SampleChatDataItemProps {
  personal_information: any;
}

export const SampleChatDataItem: React.FC<SampleChatDataItemProps> = ({
  personal_information,
}) => {
  return (
    <motion.div initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <pre>{JSON.stringify(personal_information, null, 2)}</pre>
    </motion.div>
  );
};

export const SampleChatHistory = () => {
  return (
    <>
      <h1 className="text-2xl font-ApercuLight text-center mt-24">
        And chat history...
      </h1>
      <p className='font-ApercuLight text-center'>Thanks to WeChat only stores the latest 200 chat messages on their server, the exposure of the chat history is not severe.</p>
      <div className="w-full h-96 overflow-y-scroll text-black bg-neutral-200 rounded-md">
        <pre>{JSON.stringify(ChatHistory, null, 2)}</pre>
      </div>
    </>
  );
};
