import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import NavBar from "../components/NavBar";
import Content from "../components/Content";

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-1 w-screen">
      <NavBar />
      <Content />
    </div>
  );
}
