import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Guten Tag! />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#f5f5dc] text-[#023047] flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-[#e0e0e0] rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#8ecae6] shadow-[0_0_15px_#8ecae6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
