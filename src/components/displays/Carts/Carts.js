import React from 'react';

const Carts = (props) => {
    const {product} = props
    return (
        <div className='flex flex-col border p-4 rounded-3xl gap-[20px] '>
            <div className='flex justify-between px-[20px]'>
                <p className='font-medium'>id:</p>
                <p>{product.id}</p>
            </div>
            <div className='flex justify-between px-[20px]'>
                <p className='font-medium'>date:</p>
                <p>{product.date}</p>
            </div>




        </div>
    );
};

export default Carts;