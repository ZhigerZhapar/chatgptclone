import Header2 from "../components/Header/Header2";
import santalogo from '../components/Assets/santa.svg';
import React, { useState, useRef, useEffect } from 'react';
import user from '../components/Assets/user.svg';
import footer_icon from '../components/Assets/Mask.svg';
import './CSS/WithGpt.css';


const WithSanta = () => {
    const [response, setResponse] = useState('');
    const [inputText, setInputText] = useState('');
    const inputRef = useRef('');

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleImageClick(); // Trigger the same logic as button click on Enter key press
        }
    };

    useEffect(() => {
        // Обновляем родительский компонент при изменении inputText
        console.log("Input Text Updated:", inputText);
    }, [inputText]);

    useEffect(() => {
        // Обновляем родительский компонент при изменении response
        console.log("Response Updated:", response);
    }, [response]);

    const handleInputChange = (text) => {
        setInputText(text);
    };

    const handleImageClick = async () => {
        try {
            const response = await fetch('https://8867-2-133-130-122.ngrok-free.app/api/santa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: inputRef.current.value,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            // Обновляем родительский компонент при изменении inputText и response
            handleInputChange(inputRef.current.value);
            setResponse(data.message);

            // Очищаем инпут
            inputRef.current.value = '';
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    };

    return (
        <div className="withgpt">
            <Header2 />
            <div className="withgpt__body">
                <div className="container">
                    <div className="withgpt__item">
                        <div className="withgpt__icon">
                            <img src={santalogo} alt="" /> <span>CHAT GPT</span>
                        </div>
                        <div className="withgpt__text">
                            Hello! How can I assist you today?
                            {inputText && (
                                <div className="input-text">
                                    <img src={user} alt="" /> : {inputText}
                                </div>
                            )}
                            {response && (
                                <div className="response">
                                    <img src={santalogo} alt="" /> : {response}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="footer__container _container">
                    <div className="footer__row row">
                        <input
                            type="text"
                            placeholder="Your message"
                            ref={inputRef}
                            onKeyDown={handleEnterKeyPress}
                        />
                        <button  onClick={handleImageClick} >
                            <img src={footer_icon} alt="" />
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

 
export default WithSanta;