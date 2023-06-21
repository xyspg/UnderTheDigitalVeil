import React from 'react';
import wxresponse from '@/image/wx-response.jpg'
import Image from 'next/image'
const WeChatNotification = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center gap-8'>
            <h1 className='text-white text-4xl font-ApercuBold'>WeChat Team Response (Translated)</h1>
<Image src={wxresponse} alt='wechat' height={600}/>
        </div>
    );
};

export default WeChatNotification;
