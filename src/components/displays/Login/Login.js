import React from 'react';

const Login = () => {

    const handlerLoginUser = (e) =>{
        e.preventDefault()
        const userData = {

            username: e.target.login.value,
            password: e.target.password.value,

        }
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                userData
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

    }
    return (
        <div className='flex justify-center col-span-1 md:col-span-2 xl:col-span-3 '>
           <form onSubmit={handlerLoginUser} className=' border flex flex-col max-w-[420px] md:min-w-[420px] gap-[12px] p-4'>
            <label htmlFor='login' className="font-bold">Login</label>
            <input type='text' name='login' placeholder='enter username ' />
            <label htmlFor='password' className="font-bold">Password</label>
            <input type='password' name='password' placeholder='enter your password'/>
            <button type='submit' className='bg-green-500 hover:bg-green-400 py-2 text-white ' >Sign in</button>
           </form>
        </div>
    );
};

export default Login;