import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LoginSocal = () => {
    return (
        <div>
        <h1 className='text-[#403F3F] text-xl font-semibold'>Login With</h1>
        <div className='mt-5 space-y-5'>
            <div className='rounded-lg border-blue-800 border-2 p-1 flex justify-center items-center'>
                <p className='flex gap-2 cursor-pointer text-blue-700 text-lg font-semibold items-center justify-center'>
                    <FaGoogle /> Login With Google
                </p>
            </div>
            <div className='rounded-lg border-black border-2 p-1 flex justify-center items-center'>
                <p className='flex gap-2 cursor-pointer text-black text-lg font-semibold items-center justify-center'>
                    <FaGithub /> Login With Github
                </p>
            </div>

        </div>
    </div>
    );
};

export default LoginSocal;