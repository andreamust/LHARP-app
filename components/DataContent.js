import Link from "next/link";

function DataContent() {
  const myData = require("../hsim.json");
  const myData2 = myData.similarities;

  return (
    <div className="flex flex-col col-span-5 md:col-span-5 min-h-[80vh] md:min-h-[94.5vh] bg-purple-500">
      <div className="my-10 mx-10">
        <h1 className=" text-4xl">Data</h1>
        <table className="table-auto border-collapse border border-slate-400 my-10">
          <tr>
            <th className="border border-slate-300">Track Name</th>
          </tr>
          {myData2.map((similarities) => {
            return (
              <tr>
                <td className="border border-slate-300">
                  <Link href={`/data/${similarities.track}`}>
                    {similarities.track}
                  </Link>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default DataContent;
