import React from 'react';

const Header = (props) => {
    const { onUserClick, onLoginClick } = props;

    return (
        <header className=" container m-auto my-0 px-5">
            <nav>
                <ul className="flex justify-around py-3 ">
                <li onClick={() => onUserClick('products')} className="cursor-pointer hover:font-bold">Product</li>
                <li onClick={() => onUserClick('users')} className="cursor-pointer hover:font-bold">User</li>
                <li  onClick={() => onLoginClick()} className="cursor-pointer hover:font-bold">Login</li>
                <li onClick={() => onUserClick('carts')} className="cursor-pointer hover:font-bold">Cart</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;