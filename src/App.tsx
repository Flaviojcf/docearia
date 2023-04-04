import { FirstSection } from "./components/FirstSection/FirstSection";
import { Footer } from "./components/Footer/Footer";
import { FourthSection } from "./components/FourthSection/FourthSection";
import { Header } from "./components/Header/Header";
import { SecondSetion } from "./components/SecondSection/SecondSection";
import { ThirdSection } from "./components/ThirdSection/ThirdSection";
import "./styles/global.css";
import { ScrollToTop } from "./utils/ScrollToTop";

function App() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col bg-orange h-[660px] px-12 py-8 bg-[url('/assets/mask.png')] bg-opacity-75 bg-contain tablet:h-[880px]">
        <Header />
        <FirstSection />
      </div>

      <div className="flex flex-col h-[660px] px-12 py-8 bg-[url('/assets/secondMask.png')] bg-contain mb-12 tablet:px-2 mobile:px-1">
        <SecondSetion />
      </div>

      <div className="flex flex-col bg-yellow h-[680px] px-12 py-8 bg-[url('/assets/secondMaskVariation.png')] bg-contain">
        <ThirdSection />
      </div>

      <div className="flex flex-col bg-orange bg-[url('/assets/mask.png')] h-[680px] px-12 py-8  bg-contain">
        <FourthSection />
      </div>

      <div className="flex flex-col bg-bottom h-[140px] px-12 py-4  bg-contain">
        <Footer />
      </div>

      <div className="fixed bottom-4 justify-between flex w-full px-4 items-center">
        <button className="flex items-center justify-center w-12 h-12 bg-brown rounded hover:bg-orange transition-all duration-300">
          <img
            onClick={() => ScrollToTop(300)}
            className="h-20 w-20"
            src="/assets/arrow-up.svg"
            alt="wpp image"
          />
        </button>
        <button className="ml-auto ">
          <img className="h-20 w-20" src="/assets/wpp.png" alt="wpp image" />
        </button>
      </div>
    </div>
  );
}

export default App;
