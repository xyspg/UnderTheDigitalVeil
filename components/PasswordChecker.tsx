import React from 'react';

const PasswordChecker = () => {
    return (
        <main className='h-screen'>
            <h1 className='text-white text-4xl font-ApercuBold p-4 my-8 text-center'>Bonus: Check Your Password strength</h1>
                <iframe
                    src='https://www.security.org/how-secure-is-my-password/'
                    className='w-[80vw] h-[80vh] mx-auto '
                    />
        </main>
    );
};

export default PasswordChecker;
