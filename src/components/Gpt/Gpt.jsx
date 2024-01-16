import { NavLink } from 'react-router-dom';
import gptlogo from '../Assets/gptlogo.png';
import { useState } from 'react';
const Gpt = () => {

    const [menu,setMenu] = useState("chatmain");

    return (
        <NavLink to={"/gpt"}>
        <div onClick={()=>{setMenu('gpt')}} className="item-chatmain">
        <div className="item-chatmain__icon">
            <img src={gptlogo} alt="" />
        </div>
        <div className="item-chatmain__content">
        <div className="item-chatmain__title">Chat GPT</div>
        <div className="item-chatmain__sub-title">Default ChatGPT 3.5 model</div>
        </div>
        </div>
    </NavLink>
    );
}
 
export default Gpt;