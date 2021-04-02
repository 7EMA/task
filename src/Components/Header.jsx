import React from 'react';

let flag
const Header = () => {
    const list = ["Home", "About Us", "Contact Us"];
    return (

        <header>
            <div className="navbar">
                <h1>EGY Shop</h1>
                <ul>
                    {list.map(el => <li><a>{el}</a></li>)}
                </ul>
                <button type="submit" >Sign In</button>
            </div>
        </header>

    );
}


export default Header;