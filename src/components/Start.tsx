import React from "react";

type StartProps = {
  goToGame: () => void;
};

const Start: React.FC<StartProps> = ({ goToGame }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-evenly items-center bg-purple-950">
      <div className="border border-slate-950 shadow-xl shadow-black py-4 px-10 bg-slate-900 rounded-b-xl rounded-r-xl">
        <h3 className="text-slate-400 text-sm font-bold mb-3">CPU</h3>
        <h2 className="text-xl text-slate-100 ">حاضری یکم بازی کنیم ؟</h2>
      </div>

      <button
        className="relative inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        onClick={goToGame}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent font-bold text-xl cursor-pointer">
          شروع بازی
        </span>
      </button>
    </div>
  );
};

export default Start;
