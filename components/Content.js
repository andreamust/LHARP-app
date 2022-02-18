import Link from "next/link";

function Content() {
  return (
    <div className="grid col-span-5 md:col-span-5 h-[94.5vh] bg-yellow-500 dark:bg-slate-800">
      <div className="hero bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="text-8xl font-bold">LHARP</h1>
            <p className="py-6">
              local harmonic agreement of recurrent patterns
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
