"use client";

import React, { useState, useEffect, useRef } from "react";
import Checker from "./checker";
import Timer from "./Timer";
import { IoEyeOutline } from "react-icons/io5";

export default function Wordslist() {
  const [words, setWords] = useState([]);
  const hasfetched = useRef(false);
  const [showChecker, setShowChecker] = useState(false);

  useEffect(() => {
    const fetchWords = async () => {
      if (hasfetched.current) return;
      hasfetched.current = true;
      try {
        const response = await fetch(
          "https://random-word-api.herokuapp.com/word?number=10"
        );
        const data = await response.json(); // Corrected this line
        setWords(data);
        // setWords([
        //   "tracheolar",
        //   "recements",
        //   "lead",
        //   "maintops",
        //   "quippus",
        //   "menswear",
        //   "invaginates",
        //   "stodged",
        //   "theologised",
        //   "weasels",
        // ]);

        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWords();
  }, []);

  function handleCheck() {
    setShowChecker(true);
  }

  return (
    <div className="w-[80%] h-auto pb-[30vh] bg-[#F6EFCB] m-auto">
      <Timer duration={60}>
        <div
          className={`${
            showChecker ? "blur-[4px]" : "blur-none"
          } flex flex-wrap lg:grid grid-cols-4 gap-2 m-auto mb-8`}
        >
          {/* {console.log(words)} */}
          {words.map((word, index) => (
            <p
              key={index}
              className="p-2 border-2 border-slate-600  rounded-lg"
            >
              {word}
            </p>
          ))}
        </div>
      </Timer>
      <div className="w-full flex justify-center text-[24px] mb-4">
        <button
          onClick={() => {
            setShowChecker(false); // Set showChecker to false immediately

            setTimeout(() => {
              setShowChecker(true); // Set showChecker to true after 1 second
            }, 1000);
          }}
        >
          <IoEyeOutline />
        </button>
      </div>
      <div className="w-full  flex justify-center">
        {showChecker ? (
          ""
        ) : (
          <button
            onClick={handleCheck}
            className="p-8 pt-2 pb-2 bg-[#e0ca4d6e] rounded-lg m-auto text-[20px]"
          >
            Start
          </button>
        )}
      </div>
      {showChecker ? <Checker words={words} /> : ""}
    </div>
  );
}
