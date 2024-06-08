import Image from "next/image";
import Wordslist from "./components/wordsList";
import Maingame from "./components/main";

export default function Home() {
  return (
    <div className="bg-[#e0ca4d28]">
      {/* <Wordslist /> */}
      <Maingame />
    </div>
  );
}
