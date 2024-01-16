
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
const Header = () => {
    const [menu,setMenu] = useState("gpt");
    return (
        <NavLink to={"/"}>
        <div onClick={()=>{setMenu('home')}} className="header">
            <h1>New Chat</h1>
        </div>
        </NavLink>
    );
}
 
export default Header;