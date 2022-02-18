import Link from "next/link";

function Content() {
  return (
    <div className="grid col-span-5 md:col-span-5 h-[94.5vh] bg-yellow-500 dark:bg-slate-800">
      <div className="self-center text-center">
        <h1 className=" text-8xl">LHARP</h1>
        <h2 className=" text-m">
          local harmonic agreement of recurrent patterns
        </h2>
        <button
          type="button"
          className="bg-purple-500 hover:bg-purple-900 mx-10"
        >
          <Link href={"/graph"}>Start!</Link>
        </button>
      </div>
    </div>
  );
}

export default Content;
