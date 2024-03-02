import Image from "next/image";
import Link from "next/link";
import Header from "./mycomponents/Header";
import NavBar from "./mycomponents/NavBar";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Header
          styles="text-9xl font-bold"
          word1="PLANT"
          word2="GENIE"
        ></Header>
        <p className="text-green-200 text-xl">
          One-stop destination for all things plants.
        </p>
        <div className="mt-20">
          <NavBar
            liststyles="space-x-20"
            items={["assistant", "cart", "garden"]}
          ></NavBar>
        </div>
      </div>
    </>
  );
}
