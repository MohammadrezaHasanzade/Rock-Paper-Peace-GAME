import React, { useState } from "react";

import { FaHandPeace, FaHandRock, FaPrayingHands } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";

type Choise = "peace" | "rock" | "paper" | null;
type Result = {
  user: number;
  cpu: number;
};

const Game: React.FC = () => {
  const [cpuIcon, setCpuIcon] = useState<Choise>(null);
  const [userIcon, setUserIcon] = useState<Choise>(null);
  const [result, setResult] = useState<Result>({ user: 0, cpu: 0 });

  const iconMap: Record<Exclude<Choise, null>, React.ReactNode> = {
    peace: <FaHandPeace />,
    rock: <FaHandRock />,
    paper: <FaHand />,
  };

  const handelGame = (e: React.MouseEvent<HTMLButtonElement>) => {
    const userChoise = e.currentTarget.value as Exclude<Choise, null>;
    setUserIcon(userChoise);

    const choises: Exclude<Choise, null>[] = ["peace", "rock", "paper"];

    const cpuChoise = choises[Math.floor(Math.random() * 3)];
    setCpuIcon(cpuChoise);

    if (userChoise === cpuChoise) return;
    if (
      (userChoise === "peace" && cpuChoise === "paper") ||
      (userChoise === "paper" && cpuChoise === "rock") ||
      (userChoise === "rock" && cpuChoise === "peace")
    ) {
      setResult((prev) => ({ ...prev, user: prev.user + 1 }));
    } else {
      setResult((prev) => ({ ...prev, cpu: prev.cpu + 1 }));
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-around items-center text-5xl bg-purple-950 text-fuchsia-100">
      <div className="size-full flex justify-center items-center">
        <span className="rotate-180">
          {cpuIcon ? iconMap[cpuIcon] : <FaPrayingHands />}
        </span>
      </div>
      <div className="size-full flex flex-col items-center justify-evenly">
        {userIcon ? iconMap[userIcon] : <FaPrayingHands />}
        <div className="size-full flex justify-evenly items-center">
          <button value="peace" onClick={handelGame} className="" >
            <FaHandPeace />
          </button>
          <button value="rock" onClick={handelGame}>
            <FaHandRock />
          </button>
          <button value="paper" onClick={handelGame}>
            <FaHand />
          </button>
        </div>
      </div>
      <nav className="text-base">
        <p>امتیاز کامپیوتر : {result.cpu}</p>
        <p>امتیاز شما : {result.user}</p>
      </nav>
    </div>
  );
};

export default Game;
