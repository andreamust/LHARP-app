function SideBar() {
  return (
    <div className="grid col-span-5 md:col-span-1 h-[14vh] md:h-[94.5vh]">
      <div className="content-center">
        <ul className="grid grid-flow-rows-dense grid-cols-6 grid-rows-auto list-none justify-center gap-6 my-8">
          <li className="row-span-2 md:col-span-6 text-center hover:text-sky-500 dark:hover:text-sky-400">
            Element1
          </li>
          <li className="row-span-2 md:col-span-6 text-center hover:text-sky-500 dark:hover:text-sky-400">
            Element2
          </li>
          <li className="row-span-2 md:col-span-6 text-center hover:text-sky-500 dark:hover:text-sky-400">
            Element3
          </li>
          <li className="row-span-2 md:col-span-6 text-center hover:text-sky-500 dark:hover:text-sky-400">
            Element4
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
