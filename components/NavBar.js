import Link from "next/link";
import { useTheme } from "next-themes";

function NavBar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex col-span-5 h-[5vh] bg-blue-200 dark:bg-slate-700 py-4 border-b border-slate-900/10 px-8 lg:border-0 dark:border-slate-300/10 mx-0">
      <div className="relative flex items-center">LHARP</div>
      <div className="relative flex items-center ml-auto">
        <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 mr-6">
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
          </ul>
        </nav>
        <div className="flex items-center border-l border-slate-200  pl-6 dark:border-slate-800">
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
            href=""
            className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
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
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
