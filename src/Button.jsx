import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div>
            <Link to='/login'><button className='custom-btn'>Login</button></Link>
            <Link to='/signup'> <button className='custom-btn'>Sign up</button></Link>
        </div>
    );
};

export default Button;