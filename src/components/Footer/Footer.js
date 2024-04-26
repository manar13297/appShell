import React from 'react';

const Footer = ({ text, imageUrl, isSignedIn}) => {
    return (
        <footer className="absolute text-center h-30 bottom-0 w-full">
            <div className="fixed bottom-3 left-0 w-full text-center flex justify-center items-center px-4 py-2 text-text-black font-roboto">
                {text}
            </div>
            <img
                src={imageUrl}
                alt="Footer Image"
                className={`absolute right-0 bottom-0 mb-2 mr-2 h-30 w-60 ${isSignedIn ? 'non-displayed' : ''}`}
            />
        </footer>
    );
};

export default Footer;
