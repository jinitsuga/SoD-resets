import Timer from "./components/timer";

function App() {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-stone-900 h-screen ">
        <h2 className="text-2xl text-stone-100">HOla friends</h2>
        <Timer raid="BFD" region="US" />
      </main>
    </>
  );
}

export default App;
