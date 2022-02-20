import Link from "next/link";

function Content() {
  return (
    <div className="grid h-[91vh]">
      <div className="hero bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="text-8xl font-bold">LHARP</h1>
            <p className="py-6 font-mono">
              local harmonic agreement of recurrent patterns
            </p>
            <button className="btn btn-primary">
              <Link href="/graph">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
