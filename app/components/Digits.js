import React from "react";

export default function Digits({ time }) {
  return (
    <div className="flex flex-col gap-[-5px] items-center">
      <span className="text-xl font-semibold">Time left</span>
      <span className="text-[75px] font-bold">{`${time}`}</span>
    </div>
  );
}
