import React from 'react'

const ChatMessage = ({ message }) => {
    return (
        !message.hideInChat && (
            <div className={`message ${message.role === "model" ? "bot" : "user"}-message ${message.isError ? "error" : ""}`}>
                {message.role === "mode" && <img src="/assets/images/slider/1.jpg" alt="" />}
                <p className='message-text'>
                    {message.text}
                </p>
            </div>
        )
    );
};

export default ChatMessage;