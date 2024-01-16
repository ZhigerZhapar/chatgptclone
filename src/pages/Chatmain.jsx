import './CSS/Chatmain.css'
import Gpt from '../components/Gpt/Gpt';
import Santa from '../components/Santa/Santa.jsx';
import Header from '../components/Header/Header';

const Chatmain = () => {
    return (
        <div className="chat-main">
            <div className="chat-main__container container">
                <Header/>
                <Gpt/>
                <Santa/>
            </div>
        </div>
    );
}
 
export default Chatmain;