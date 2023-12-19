import Timer from "./components/timer";

function App() {
  return (
    <>
      <main className="flex flex-col gap-2 items-center justify-normal bg-stone-900 h-screen ">
        <h2 className="text-2xl text-stone-100 mt-10">Reset timers for SoD</h2>
        <div className="flex flex-col md:flex-row gap-2">
          <Timer raid="BFD" region="US" />
          <Timer raid="BFD" region="EU" />
        </div>
        <p className="text-stone-400 max-w-[50%]">
          Reset timers seem to be similar for both regions so far. Will update
          if this changes for future raids.
        </p>
        <ul>
          <li></li>
        </ul>
      </main>
    </>
  );
}

export default App;
