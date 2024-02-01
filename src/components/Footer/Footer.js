import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='container mx-auto flex justify-around'>
            <div className=' flex flex-col p-4 gap-[10px]'>
                <h3 className='font-medium'>© 2002-2024</h3>
                <p className='cursor-pointer' >react store</p>
                <p className='cursor-pointer'> from you</p>
            </div>
            <div  className=' flex flex-col p-4 gap-[10px]'>
                <h3 className='font-medium'>Store</h3>
                <p className='cursor-pointer' >rules</p>
                <p className='cursor-pointer'>rewards</p>
            </div>
            <div  className=' flex flex-col p-4 gap-[10px]'>
                <h3 className='font-medium'>Company</h3>
                <p className='cursor-pointer' >news</p>
                <p className='cursor-pointer'>vacancy</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;