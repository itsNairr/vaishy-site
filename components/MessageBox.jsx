import React, { useState } from "react";

const MessageButton = ({title, message}) => {
  // State to track if the button was clicked
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 20000);
  };

  return (
    <div className="m-5 xs:m-3 flex items-center justify-center">
      <button
        onClick={handleClick}
        className={`px-6 py-3 font-semibold rounded-md transition-all duration-1000 ease-in-out ${
          isClicked ? "bg-pink-300 text-white" : "bg-white text-pink-200"
        }`}
      >
        {isClicked ? `${message}` : `${title}`}
      </button>
    </div>
  );
};

export default MessageButton;
