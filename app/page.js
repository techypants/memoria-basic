"use client";

import Wordslist from "./components/wordsList";
import Maingame from "./components/main";
import Front from "./components/Front";
import { useState } from "react";

export default function Home() {
  const [Game, setGame] = useState(false);

  function showGame() {
    setGame(true);
  }
  // bg-[#e0ca4d28]
  return (
    <div className="bg-[#e4cc43] h-[100vh] overflow-y-auto">
      <div>
        <Front />
      </div>

      {/* <Wordslist /> */}
      <div className="w-full pb-4 mt-8 flex justify-center bg-[#e4cc43]">
        {Game ? (
          ""
        ) : (
          <button
            onClick={showGame}
            className="m-auto mt-4 lg:mt-0 text-[20px] lg:text-[32px] p-2 border-[#3e3413] border-2 rounded-lg font-semibold hover:bg-[#a08430] hover:text-white text-[#3e3413]"
          >
            Play Game!
          </button>
        )}
      </div>

      {Game ? <Maingame /> : ""}
    </div>
  );
}
