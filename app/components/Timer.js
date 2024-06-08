import React, { useEffect, useState } from "react";
import Digits from "./Digits";

export default function Timer({ duration, children }) {
  const [timeleft, setTimeleft] = useState(duration);
  const [blur, setBlur] = useState(false);
  useEffect(() => {
    if (timeleft > 0) {
      const timerId = setInterval(() => {
        setTimeleft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setBlur(true);
    }
  }, [timeleft]);

  return (
    <div>
      <div className="w-full p-8 pb-4  rounded-xl flex justify-center">
        <Digits time={timeleft} />
      </div>
      {/* <div>{timeleft > 0 ? `Time left:${timeleft}s ` : "Time is up!"}</div> */}
      {/* <button
        onClick={() => {
          setBlur(false); // Set Blur to false immediately

          setTimeout(() => {
            setBlur(true); // Set showChecker to true after 1 second
          }, 4000);
        }}
      >
        show
      </button> */}
      <div
        className={`${
          blur ? "blur-[-4px]" : "blur-none"
        } transition-filter duration-1000`}
      >
        {children}
      </div>
    </div>
  );
}
