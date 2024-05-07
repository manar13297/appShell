import React from "react";

const HeaderItem = ({ text, isActive, onClick }) => {
    return (
        <div className={`headerItem px-4 py-2 mr-2 text-text-black font-sans text-center hover:bg-background h-10 ${isActive ? 'border-t-4 border-primary-blue bg-background' : ''}`} onClick={onClick}>
            {text}
        </div>
    );
};

export default HeaderItem;