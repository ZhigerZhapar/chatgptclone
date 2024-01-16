
import { NavLink } from 'react-router-dom';
import './Header2.css';
import { useState } from 'react';
import arrow from '../Assets/arrow.svg';
const Header2 = () => {
    const [menu,setMenu] = useState("gpt");
    return (
        <NavLink to={"/"}>
        <div onClick={()=>{setMenu('home')}} className="header2">
            <img src={arrow} alt=""/> <p>Chat with GPT</p>
        </div>
        </NavLink>
    );
}
 
export default Header2;