"use client";

import React, { useState, useEffect, useRef } from "react";
import Checker from "./checker";
import Timer from "./Timer";

export default function Wordslist() {
  const [words, setWords] = useState([]);
  const hasfetched = useRef(false);

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

  return (
    <div className="w-[80%] m-auto">
      <Timer duration={60}>
        <div className="grid grid-cols-4 gap-2 m-auto mb-8">
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
      <Checker words={words} />
    </div>
  );
}
