import logo from "./logo.svg";
import "./App.css";
import CoinCart from "./components/CoinCart";
import CoinBoxContainer from "./components/CoinBoxContainer";
import ListCom from "./components/ListCom";
import Poster from "./components/Poster";

function App() {
  return (
    <>
      <Poster />
      <div className="max-w-7xl mx-auto pt-20">
        <CoinBoxContainer />
        <div className="">
          <div className="w-full py-8">
            <div className="grid grid-cols-3 md:grid-cols-5 items-center  w-full">
              <div className=" flex space-x-2 items-center justify-center ">
                İŞLEM
              </div>
              <div className=" text-center text-[#1e2329] text-sm flex flex-col ">
                fiyat
              </div>
              <span className="flex justify-center">24S DEĞİŞİM</span>
              <span className="hidden md:flex justify-center">
                haftalik DEĞİŞİM
              </span>
              <div className="hidden md:flex justify-center  ">
                FİYAT GRAFiĞi
              </div>
            </div>
          </div>
          <div className="p-2 space-y-2 divide-y-[1px] ">
            <ListCom />
            <ListCom />
            <ListCom />
            <ListCom />
            <ListCom />
            <ListCom />
            <ListCom />
            <ListCom />
            <ListCom />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
