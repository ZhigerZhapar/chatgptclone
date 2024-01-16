import React from 'react';
import user from '../Assets/user.svg';
import gptlogo from '../Assets/gpt.svg';

const MessageItem = ({ role, content }) => {
  return (
    <div className={`withgpt__${role}`}>
      <div className="withgpt__icon">
        <img src={role === 'user' ? user : gptlogo} alt="" />
      </div>
      <div className="withgpt__text">{content}</div>
    </div>
  );
};

export default MessageItem;
