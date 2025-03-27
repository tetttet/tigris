import { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import './ChatBot.css'
import ChatForm from './ChatForm.jsx';
import ChatMessage from './ChatMessage.jsx';
import { IoChatbox } from "react-icons/io5";
import { MdFullscreenExit } from "react-icons/md";
import { Info } from './Info.js';

import imgBot from "../../assets/bot.jpg"

const initialSuggestions = [
    "Адрес нашей фирмы?",
    "Как связаться с нами?",
    "Чем мы занимаемся?",
];


const ChatBot = () => {
    const REACT_APP_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=AIzaSyDT_9MR4LI5SHhOpob0C3Nty-PZJHEUOFA";

    const [chatHistory, setChatHistory] = useState([
        {
            hideInChat: true,
            role: "model",
            text: Info
        }
    ]);
    const [showChatBot, setShowChatBot] = useState(true);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const chatBodyRef = useRef();

    const generateBotResponse = async (history) => {
        const updateChatHistory = (text, isError = false) => setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), { role: "model", text, isError }]);

        history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: history }),
        };

        try {
            const apiUrl = REACT_APP_API_URL;
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Failed to generate bot response");

            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
            updateChatHistory(apiResponseText);

            console.log(data);
        }
        catch (error) {
            updateChatHistory(error.message, true);
        }
    }

    const handleSuggestionClick = (text) => {
        setChatHistory(prev => [...prev, { role: "user", text }]);
        setShowSuggestions(false);
        generateBotResponse([...chatHistory, { role: "user", text }]);
    };

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({
                top: chatBodyRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [chatHistory]);


    return (
        <div>
            <div className={`container ${showChatBot ? "show-chatbot" : ""}`}>
                <button onClick={() => setShowChatBot(prev => !prev)} id="chatbot-toggler">
                    <span><IoChatbox /></span>
                    <span><MdFullscreenExit /></span>
                </button>

                <div className='chatbot-popup'>
                    <div className='chat-header'>
                        <div className='header-info'>
                            <img src={imgBot} alt="" />
                            <h2 className='logo-text'>ChatBot</h2>
                        </div>
                        <button onClick={() => setShowChatBot(prev => !prev)}>
                            <FaAngleDown />
                        </button>
                    </div>

                    <div ref={chatBodyRef} className='chat-body'>
                        <div className='message bot-message'>
                            <img src={imgBot} alt="" />
                            <p className='message-text'>
                                Hello, ask information about this webiste?
                            </p>
                        </div>

                        {showSuggestions && (
                            <div className="flex flex-col items-end gap-2 mt-2">
                                {initialSuggestions.map((suggestion, index) => (
                                    <button
                                        key={index}
                                        className="border border-gray-300 bg-white px-4 py-2 rounded-md text-right max-w-[200px] hover:bg-gray-100 transition whitespace-nowrap"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        )}

                        {chatHistory.map((message, index) => (
                            <ChatMessage key={index} message={message} />
                        ))}
                    </div>

                    <div className='chat-footer'>
                        <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ChatBot