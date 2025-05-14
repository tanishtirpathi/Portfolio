import { React, useState, useEffect } from "react";
import { User } from "lucide-react";
import dayjs from "dayjs";
import Main from "../components/page"
import './lock.css'
function LockPage() {
  const date = dayjs().format("dddd, MMMM D, YYYY"); // Monday, May 1, 2023
  const [Time, setTime] = useState(new Date().toLocaleTimeString());
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const handleUnlock = () => {
    setStartAnimation(true);
    setTimeout(() => {
      setIsUnlocked(true);
    }, 1000); 
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>{isUnlocked ? (<Main/> ) : (
      <div
      className={`overflow-hidden w-screen h-screen bg-[url(/bg.png)] bg-cover flex-col flex gap-19 justify-center items-center transition-all duration-1000 ${
        startAnimation ? "animate-slide-up" : ""
      }`}
    >
      {/* ...everything else inside your LockPage layout... */}
      <div className="fixed top-3 right-2 flex justify-center items-center">
        <h3 className="text-gray-100 text-s font-bold">INDIA</h3>
        <User className="text-xs text-white font-bold" />
      </div>
      <div className="flex-col flex justify-center items-center gap-3">
        <h1 className="text-white text-6xl font-bold">{Time}</h1>
        <h1 className="text-white font-bold">{date}</h1>
      </div>
      <div
        className="flex-col flex gap-1 justify-center cursor-pointer items-center hover:scale-115 transition-normal ease-in duration-150"
        onClick={handleUnlock}
      >
        <img
          src="/image.png"
          alt=""
          className="border border-white h-20 w-20 rounded-full hover:scale-110 transition-normal ease-in duration-150"
        />
        <h1 className="text-white text-xs">Tanish Tirpathi</h1>
        <h3 className="text-white text-m font-thin">click here to open</h3>
      </div>
    </div>
  )}
</>
  );
}

export default LockPage;
