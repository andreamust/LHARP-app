import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import { useState } from "react";

function TrackPage() {
  const [filerValue, setFilterValue] = useState("");
  const router = useRouter();
  const myData = require("../../hsim.json");
  const myData2 = myData.similarities;
  const getSim = function (q) {
    return myData2
      .filter((x) => x.track == q)[0]
      .similarTo.filter((x) => x.value >= filerValue / 10000);
  };
  console.log(filerValue / 10000);

  return (
    <div className="flex flex-col xl:col-span-5 md:col-span-5 min-h-[80vh] md:min-h-[94.5vh] bg-purple-500">
      <NavBar />
      <div className="my-10 mx-10">
        <h1 className=" text-4xl">Similarities Data {router.query.trackid}</h1>
        <input
          type="range"
          min="0"
          max="10000"
          step="100"
          onChange={(event) => setFilterValue(event.target.value)}
          className="w-48 range range-accent"
        />
        <p>Similarity filter: {filerValue / 10000}</p>
        <table className="table-auto border-collapse border border-slate-400 my-10">
          <tr>
            <th className="border border-slate-300">Similar Song</th>
            <th className="border border-slate-300">Similarity Value</th>
            <th className="border border-slate-300">
              Longest Common Progression
            </th>
          </tr>
          {getSim(router.query.trackid).map((info) => {
            return (
              <tr>
                <td className="border border-slate-300">{info.name}</td>
                <td className="border border-slate-300">{info.value}</td>
                <td className="border border-slate-300">
                  {info.progression.toString()}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default TrackPage;
