import React from 'react';

const UserCard = (props) => {
   const {product} = props
    return (
        <div className='border rounded-3xl p-3'>

            <p>id: {product.id}</p>
            <p>first name: {product.name.firstname}</p>
            <p>last name: {product.name.laststname}</p>
            <p>username : {product.username}</p>
            <p>phone : {product.phone}</p>
            <p>city: {product.address.city}</p>
        </div>
    );
};

export default UserCard;