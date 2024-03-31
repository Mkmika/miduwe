import React from "react";

const Loading = () => {
  return (
    <div className="bg-default flex justify-center items-center space-x-2 w-screen h-screen">
      <span className="sr-only">Loading...</span>
      <div className="h-6 w-6 bg-black rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:-0.45s]"></div>
      <div className="h-6 w-6 bg-black rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:-0.3s]"></div>
      <div className="h-6 w-6 bg-black rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:-0.15s]"></div>
      <div className="h-6 w-6 bg-black rounded-full animate-bounce [animation-duration:0.6s]"></div>
      <div className="h-6 w-6 bg-black rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.15s]"></div>
      <div className="h-6 w-6 bg-black rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.3s]"></div>
    </div>
  );
};

export default Loading;
