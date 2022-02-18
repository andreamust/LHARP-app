import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

function TrackPage() {
  const router = useRouter();
  const myData = require("../../hsim.json");
  const myData2 = myData.similarities;
  const getSim = function (q) {
    return myData2
      .filter((x) => x.track == q)[0]
      .similarTo.filter((x) => x.value >= 0);
  };

  console.log(router.query.trackid === "isophonics_3");
  console.log(typeof getSim("isophonics_3"));
  return (
    <div className="flex flex-col xl:col-span-5 md:col-span-5 min-h-[80vh] md:min-h-[94.5vh] bg-purple-500">
      <NavBar />
      <div className="my-10 mx-10">
        <h1 className=" text-4xl">Similarities Data {router.query.trackid}</h1>
        <input
          type="range"
          min="0"
          max="1"
          className="w-48 range range-accent"
        />
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
                <td className="border border-slate-300">{info.progression}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default TrackPage;
