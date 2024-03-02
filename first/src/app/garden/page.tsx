import Header from "../mycomponents/Header";
import NavBar from "../mycomponents/NavBar";
import { MainNav } from "../mycomponents/navitems";

export default function Garden() {
  return (
    <>
      <NavBar items={MainNav} />
      <Header styles="text-6xl" word1="Siddharth's" word2=" Garden" />
      <div className="gardenmain flex flex-col items-center">
        <div className="w-5/6 rounded-xl border-2 min-h-70 p-10 m-5 flex flex-col items-center">
          <h1>Shalom</h1>
        </div>
      </div>
    </>
  );
}
