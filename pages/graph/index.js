import GraphContent from "../../components/GraphContent";
import SideBar from "../../components/SideBar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="grid grid-cols-5">
        <GraphContent /> <SideBar />
      </div>
    </Fragment>
  );
}
