import NavBar from "../components/NavBar";
import AboutContent from "../components/AboutContent";

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-1 w-screen">
      <NavBar />
      <AboutContent />
    </div>
  );
}
