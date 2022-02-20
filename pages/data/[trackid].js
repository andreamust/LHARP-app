import { useRouter } from "next/router";
import { useEffect } from "react";
import NavBar from "../../components/NavBar";
import { useState } from "react";
import { findId } from "../../data-processing";
import { getSim } from "../../data-processing";

function TrackPage() {
  const [filerValue, setFilterValue] = useState("");
  const router = useRouter();

  const trackId = router.query.trackid;
  const track = findId(trackId);

  if (!track) {
    return <h1>404</h1>;
  }
  const similarity = getSim(trackId, filerValue);

  return (
    <div className="flex flex-col xl:col-span-5 md:col-span-5 min-h-[80vh] md:min-h-[94.5vh] bg-purple-500">
      <div className="my-10 mx-10">
        <h1 className=" text-4xl">Similarities Data {trackId}</h1>
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
          {similarity.map((info) => {
            return (
              <tr key={info.name}>
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
