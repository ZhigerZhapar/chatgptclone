import { NavLink } from 'react-router-dom';
import santaLogo from '../Assets/santa.png';
import { useState } from 'react';
const Santa = () => {
    const [menu,setMenu] = useState("chatmain");

    return (
        <NavLink to={"/santa"}>
        <div onClick={()=>{setMenu('santa')}} className="item-chatmain">
        <div className="item-chatmain__icon">
            <img src={santaLogo} alt="" />
        </div>
        <div className="item-chatmain__content">
        <div className="item-chatmain__title">Santa GPT</div>
        <div className="item-chatmain__sub-title">Santa Claus now is available!</div>
        </div>
        </div>
        </NavLink>
    );
}
 
export default Santa;