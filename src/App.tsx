import * as Dialog from "@radix-ui/react-dialog";
import { FirstSection } from "./components/FirstSection/FirstSection";
import { Footer } from "./components/Footer/Footer";
import { FourthSection } from "./components/FourthSection/FourthSection";
import { Header } from "./components/Header/Header";
import { SecondSection } from "./components/SecondSection/SecondSection";
import { ThirdSection } from "./components/ThirdSection/ThirdSection";
import "./styles/global.css";
import { ScrollToTop } from "./utils/ScrollToTop";
import { FormEvent, useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    ScrollToTop(300);
  }, []);



  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = `https://api.whatsapp.com/send?phone=8185391935&text=${encodeURIComponent(
      `Olá, meu nome é ${name} e gostaria de fazer esse pedido: ${message}`
    )}`;

    window.open(url, "_blank");
  }

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col bg-orange h-full px-12 py-8 bg-[url('/assets/mask.png')] bg-opacity-75 bg-contain  tablet:px-6  mobile:px-3">
        <Header />
        <FirstSection />
      </div>

      <div className="flex flex-col  px-12 py-8 bg-[url('/assets/secondMask.png')] h-full bg-contain mobile:h-[1440px] tablet:px-6  mobile:px-3">
        <SecondSection />
      </div>

      <div className="flex flex-col bg-yellow  h-full px-12 py-8 bg-[url('/assets/secondMaskVariation.png')] bg-contain tablet:px-6  mobile:px-3">
        <ThirdSection />
      </div>

      <div className="flex flex-col bg-orange bg-[url('/assets/mask.png')] h-full px-12 py-8  bg-contain tablet:px-6  mobile:px-3">
        <FourthSection />
      </div>

      <div className="flex flex-col bg-bottom h-full px-32 py-8  bg-contain tablet:px-24  mobile:px-12">
        <Footer />
      </div>

      <div className="fixed bottom-4 justify-between flex w-full px-4 mobile:px-1 items-center">
        <button className="flex items-center justify-center w-12 h-12 bg-brown rounded hover:bg-orange transition-all duration-300 mobile:w-8 mobile:h-8">
          <img
            onClick={() => ScrollToTop(300)}
            className="h-20 w-20 "
            src="/assets/arrow-up.svg"
            alt="wpp image"
          />
        </button>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="ml-auto ">
              <img
                className="h-20 w-20 mobile:w-16 mobile:h-16"
                src="/assets/wpp.png"
                alt="wpp image"
              />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed w-full h-full inset-0 z-50 bg-modalOverlay px-2  ">
              <Dialog.Content className="flex flex-col z-50 w-[300px] h-[300px] mt-52 ml-auto mr-auto  bg-white p-4 gap-8 rounded-lg items-center self-center">
                <Dialog.Title className="flex justify-between text-center">
                  <p className="text-brown text-xl font-extrabold mobile:text-xl leading-6 tracking-[1.29px] underline">
                    Faça seu pedido!
                  </p>
                </Dialog.Title>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 mt-4 items-center"
                >
                  <input
                    type="text"
                    placeholder="Nome"
                    className="border rounded-sm px-2"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <textarea
                    className="w-full h-28 border rounded-sm px-2 resize-none"
                    maxLength={100}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Digite aqui seu pedido"
                  ></textarea>
                  <button
                    type="submit"
                    className="rounded-sm bg-brown w-24 h-6 text-sm text-white font-extrabold hover:brightness-75 hover:duration-150  "
                  >
                    Enviar
                  </button>
                </form>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}

export default App;
