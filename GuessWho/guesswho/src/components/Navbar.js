import React from 'react'
import {Link} from "react-router-dom";
// import {Button} from "antd";

const Navbar = () => {
    return(
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <Link to='/'>
                <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>GuessWho</h1>
            </Link>
            <div>
                <Link to='/Login'>
                    <button className='text-white pr-4'>Sign In</button>
                </Link>
                <Link to='/SignUp'>
                    <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
                </Link>
            </div>
        </div>
    );

}

export default Navbar;