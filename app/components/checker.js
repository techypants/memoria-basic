"use client";
import React, { useState, useEffect } from "react";
import Report from "./Report";
import Timer from "./Timer";

export default function Checker({ words }) {
  const [inputValues, setInputValues] = useState(Array(words.length).fill(""));
  const [matches, setMatches] = useState(Array(words.length).fill(false));
  const [matchedWords, setMatchedWords] = useState([]);
  const [timestamps, setTimestamps] = useState(Array(words.length).fill(null));
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    // Start the timer when the component mounts
    setStartTime(Date.now());
  }, []);

  function handleChange(e, index) {
    const text = e.target.value;
    const oldText = inputValues[index];
    const newInputValues = [...inputValues];
    newInputValues[index] = text;
    setInputValues(newInputValues);

    const newMatches = [...matches];
    const newTimestamps = [...timestamps];
    if (
      words.includes(text) &&
      (!matchedWords.includes(text) || text === oldText)
    ) {
      newMatches[index] = true;
      if (!matchedWords.includes(text)) {
        setMatchedWords([...matchedWords, text]);
        newTimestamps[index] = Date.now() - startTime; // Record the timestamp
      }
    } else {
      newMatches[index] = false;
      newTimestamps[index] = null; // Reset the timestamp if not matched
    }
    setMatches(newMatches);
    setTimestamps(newTimestamps);
  }

  console.log(matchedWords.length);

  return (
    <div className="">
      <div className="flex flex-wrap lg:grid grid-cols-3 gap-2">
        {words.map((word, index) => (
          <input
            key={index}
            value={inputValues[index] || ""}
            onChange={(e) => handleChange(e, index)}
            className={`border-2 rounded-md p-2 ${
              matches[index]
                ? "bg-green-400"
                : "border-slate-400 bg-[#efd54665]"
            }`}
            disabled={matches[index]}
          />
        ))}
      </div>
      {/* <Timer duration={15}> */}
      <div className="mt-[60px]">
        <Report timestamps={timestamps} matches={matches} />
      </div>
      {/* </Timer> */}
    </div>
  );
}
