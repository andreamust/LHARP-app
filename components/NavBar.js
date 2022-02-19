import Link from "next/link";
import { useTheme } from "next-themes";

function NavBar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex navbar col-span-5 bg-base-100 dark:bg-slate-700 py-4 border-b border-slate-900/10 px-2 md:px-8 lg:border-0 dark:border-slate-300/10 mx-0">
      <div className="relative flex items-center ">
        <Link href={"/"}>LHARP</Link>
      </div>
      <div className="relative flex items-center ml-auto">
        <nav className="text-sm leading-6 font-semibold dark:text-slate-200 md:mr-6 ml-6">
          <ul className="flex space-x-8">
            <li className="hover:text-sky-500 dark:hover:text-sky-400">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-sky-500 dark:hover:text-sky-400">
              <Link href={"/graph"}>Graph</Link>
            </li>
            <li className="hover:text-sky-500 dark:hover:text-sky-400">
              <Link href={"/data"}>Data</Link>
            </li>
            <li className="hover:text-sky-500 dark:hover:text-sky-400">
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <div className="hidden md:flex items-center border-l border-slate-200 pl-6 dark:border-slate-800">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  type="button"
                  id="headlessui-listbox-button-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </button>
                <a
                  href="https://github.com/polifonia-project/harmonic-similarity"
                  target={"blank"}
                  className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
