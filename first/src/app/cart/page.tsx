import Header from "../mycomponents/Header";
import NavBar from "../mycomponents/NavBar";
import { MainNav } from "../mycomponents/navitems";

export default function Cart() {
  return (
    <>
      <NavBar items={MainNav} />
      <Header styles="text-6xl" word1="" word2="Cart" />
    </>
  );
}
