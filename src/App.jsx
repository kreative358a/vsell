import { useState } from "react";
import ComponentPng from "./assets/Component.png";
import menuPng from "./assets/menu.png";
import EllipsePng from "./assets/Ellipse.png";
// import buttonPng from "./assets/button.png";
import verifyPng from "./assets/verify.png";

const LeftIcon = () => {
  return <img src={EllipsePng} className="m-auto" />;
};

const RightIcon = () => {
  return <img src={menuPng} className="m-auto w-12 md:w-16" />;
};

// const listSides = [ LeftIcon , RightIcon];

const App = () => {
  const listIcons = [EllipsePng, menuPng];
  const [icons, setIcons] = useState(listIcons);
  const [sideIcon, setSideIcon] = useState("normal");

  const r = document.querySelector(":root");
  const rs = getComputedStyle(r);

  const handleTheme = () => {
    if (rs.getPropertyValue("--background-color") === "rgb(205, 225, 245)") {
      r.style.setProperty("--background-color", "rgb(5, 25, 45)");
      r.style.setProperty("--color", "rgb(205, 225, 245)");
      r.style.setProperty("--borderColor", "rgb(185, 225, 245)");
    } else {
      r.style.setProperty("--background-color", "rgb(205, 225, 245)");
      r.style.setProperty("--color", "rgb(5, 25, 45)");
      r.style.setProperty("--borderColor", "rgb(60, 120, 180)");
    }
  };

  const handleClick = () => {
    const Icons = icons.toReversed();
    setIcons(Icons);
  };
  const handleSide = () => {
    if (sideIcon === "normal") {
      setSideIcon("reverse");
    } else {
      setSideIcon("normal");
    }
  };

  console.log("icons: ", icons);
  return (
    <section className="w-[100vw] m-0 pb-10">
      <div className="flex">
        <button
          className="fixed mx-auto mb-10 border-2 border-blue-500 right-0"
          onClick={handleTheme}
        >
          change theme
        </button>
      </div>

      {/* <div className="w-full flex flex-row align-middle justify-center">
        <img className="w-[600px]" src={buttonPng} />
      </div> */}

      <div className="flex border-2 border-[var(--borderColor)] w-[900px] max-w-[90%] mx-auto pl-4 pr-3 md:pl-14 md:pr-10 justify-between mt-20">
        <div className="flex flex-row min-h-[210px]">
          <div className="flex justify-center align-middle my-6 w-[160px]  lg:border-2 border-[var(--borderColor)] rounded-full">
            <img src={icons[0]} className="m-auto" />

            <img
              src={ComponentPng}
              className="absolute w-16 ml-[120px] mt-[90px] border-[6px] rounded-full"
            />
            <p className="gradient absolute w-16 ml-[250px] mt-[126px] text-xl sm:text-2xl font-bold text-blue-400">
              4881
            </p>
          </div>

          <div className="flex flex-col ml-4">
            <div className="flex flex-row  mt-4">
              <p className="pt-0 font-medium text-2xl md:text-3xl lg:text-4xl">
                Anna Effective
              </p>
              <img className="w-10 h-10 ml-2 mt-1" src={verifyPng} />
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl mt-2">
              Double your income with me!
            </p>
          </div>
        </div>
        <div className="flex justify-center align-middle my-6 w-[160px] flex-row">
          <img src={icons[1]} className="m-auto " />
        </div>
      </div>
      <div className="flex">
        <button
          className="mx-auto mt-10 border-2 border-blue-500"
          onClick={handleClick}
        >
          change order
        </button>
      </div>

      {sideIcon === "normal" ? (
        <div className="flex border-2 border-[var(--borderColor)] w-[900px] max-w-[90%] mx-auto pl-4 pr-3 md:pl-14 md:pr-10 justify-between mt-20">
          <div className="flex flex-row min-h-[210px]">
            <div className="  flex justify-center align-middle my-6 w-[160px]">
              <LeftIcon />

              <img
                src={ComponentPng}
                className="absolute w-16 ml-[120px] mt-[90px] border-[6px] rounded-full"
              />
              <p className="gradient absolute w-16 ml-[250px] mt-[126px] text-xl sm:text-2xl font-bold text-blue-400 ">
                4881
              </p>
            </div>

            <div className="flex flex-col ml-4">
              <div className="flex flex-row  mt-4">
                <p className="pt-0 font-medium text-2xl md:text-3xl lg:text-4xl">
                  Anna Effective
                </p>
                <img className="w-10 h-10 ml-2 mt-1" src={verifyPng} />
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl mt-2">
                Double your income with me!
              </p>
            </div>
          </div>
          <div className="flex justify-center align-middle my-6 w-[160px] flex-row ">
            <RightIcon />
          </div>
        </div>
      ) : (
        <div className="flex border-2 border-[var(--borderColor)] w-[900px] max-w-[90%] mx-auto pl-4 pr-3 md:pl-14 md:pr-10 justify-between mt-20">
          <div className="flex flex-row min-h-[210px]">
            <div className="  flex justify-center align-middle my-6 w-[160px]">
              <RightIcon />

              <img
                src={ComponentPng}
                className="absolute w-16 ml-[120px] mt-[90px] border-[6px] rounded-full"
              />
              <p className="gradient absolute w-16 ml-[250px] mt-[126px] text-2xl font-bold text-blue-400">
                4881
              </p>
            </div>

            <div className="flex flex-col ml-4">
              <div className="flex flex-row  mt-4">
                <p className="pt-0 font-medium text-2xl md:text-3xl lg:text-4xl">Anna Effective</p>
                <img className="w-10 h-10 ml-2 mt-1" src={verifyPng} />
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl mt-2">Double your income with me!</p>
            </div>
          </div>
          <div className="flex justify-center align-middle my-6 w-[160px] flex-row ">
            <LeftIcon />
          </div>
        </div>
      )}

      <div className="flex">
        <button
          className="mx-auto mt-10 border-2 border-blue-500"
          onClick={handleSide}
        >
          change order
        </button>
      </div>
    </section>
  );
};
export default App;
