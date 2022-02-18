import NavBar from "../../components/NavBar";
import GraphContent from "../../components/GraphContent";
import SideBar from "../../components/SideBar";

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-1 w-screen">
      <NavBar />
      <GraphContent />
      <SideBar />
    </div>
  );
}
