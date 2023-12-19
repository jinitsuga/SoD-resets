import * as React from "react";
import Timer from "./components/timer";

function App() {
  return (
    <>
      <main className="flex flex-col gap-10 items-center justify-normal bg-stone-900 h-screen ">
        <h2 className="text-2xl text-stone-100 mt-10">Reset timers for SoD</h2>
        <div className="flex flex-col md:flex-row gap-2">
          <Timer raid="BFD" region="US" />
          <Timer raid="BFD" region="EU" />
        </div>
        <p className="text-stone-400 max-w-[50%]">
          Reset timers seem to be similar for both regions so far. Will update
          if this changes for future raids.
        </p>
        <ul className="flex flex-col gap-2 items-start justify-center text-stone-300 ">
          <li className="flex items-center justify-center gap-2 ">
            <img
              width={40}
              height={40}
              src="/src/assets/discordicon.png"
              alt="disord icon"
            />
            <p>nitsugai</p>
          </li>
          <li className="hover:text-rose-400">
            <a
              className="flex items-center justify-center gap-2"
              href="https://github.com/jinitsuga"
              target="_blank"
            >
              <img
                width={40}
                height={40}
                src="/src/assets/githubicon.png"
                alt="discord icon"
              />
              <p>github</p>
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
