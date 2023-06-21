import React from 'react';
import Reaction from "@/components/Reaction";
const ReactionWrapper = () => {
    return (
        <>
            <div className='min-h-screen flex justify-center items-center bg-neutral-50 flex-col gap-8'>
                <h1 className='text-neutral-950 text-4xl font-ApercuBold'>User Reactions</h1>
            <Reaction />
            </div>
        </>
    );
};

export default ReactionWrapper;
