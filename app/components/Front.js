import React from "react";

export default function Front({ children }) {
  return (
    <div
      className="flex items-center justify-around lg:h-[50%]"
      style={{
        backgroundImage: "linear-gradient(to bottom,#FCDC94,#e4cc43)",
      }}
    >
      <div className="w-[80%] flex lg:flex-row flex-col items-center justify-around">
        <span className="w-full items-center flex flex-col">
          <span className="text-[50px] lg:text-[100px] text-[#9b8030] font-bold">
            Word-Memory{" "}
          </span>
          <a
            href="https://tanmay-pant-portfolio.vercel.app/"
            className="m-auto mt-4 lg:mt-0 text-[20px] lg:text-[32px] p-2 border-[#9b8030] border-2 rounded-lg font-semibold hover:bg-[#a08430] hover:text-white text-[#a08430]"
          >
            Tanmay Pant
          </a>
          <div className="mt-8 text-md lg:text-xl text-[#594918] font-semibold">
            <ol>
              Instructions!
              <li>1. Clearly read all the words and try to recall them.</li>
              <li>
                2. Only start after you are sure that you remember all the words
              </li>
              <li>(if not, then you can just refresh)</li>
              <li>3. MOST IMPORTANTLY: have fun!</li>
              <li>4. Once the 60s timer is over, the words will fade away</li>
            </ol>
          </div>
        </span>
        <img
          src="https://alchetron.com/cdn/psyduck-2317521c-b35f-4052-a07f-54a47cafee0-resize-750.gif"
          className="rounded-lg"
        ></img>
      </div>
    </div>
  );
}
