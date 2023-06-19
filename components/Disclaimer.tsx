import React from 'react';

interface DisclaimerProps {
    onClose: () => void;
}
const Disclaimer:React.FC<DisclaimerProps> = ({
    onClose
                                              }) => {
    return (
        <>
            <div className='h-screen bg-black flex flex-col gap-4 px-8 md:px-4 justify-center items-center'>
                <h1 className='text-white text-4xl uppercase font-ApercuBold'>
                    Disclaimer
                </h1>
                <p className='text-white text-2xl text-center uppercase font-ApercuLight'>
                    This experience is fictional and for demonstration of a multigenre project only.
                </p>
                <button onClick={onClose} className="mt-4 bg-white text-back px-6 py-3 rounded-lg">
                  ACCEPT{" "}
                </button>
            </div>
        </>
    );
};

export default Disclaimer;
