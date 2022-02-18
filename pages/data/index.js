import NavBar from "../../components/NavBar";
import DataContent from "../../components/DataContent";

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-1 w-screen">
      <NavBar />
      <DataContent />
    </div>
  );
}
