import { ScrollToTop } from "../../utils/ScrollToTop";

export function Header() {
  return (
    <header className="flex mb-6 items-center max-w-full">
      <div className="flex items-center">
        <img
          className="w-72  object-contain"
          src="/assets/logo.png"
          alt="cake image"
        />
      </div>
      <ul className="flex gap-32 items-center justify-center self-center ml-auto mr-auto">
        <li onClick={() =>
            ScrollToTop(300)
          } className="text-brown font-extrabold text-xl cursor-pointer  hover:text-yellow transition-colors duration-300">
          Início
        </li>
        <li
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          className="text-brown font-extrabold text-xl cursor-pointer hover:text-yellow transition-colors duration-300"
        >
          Páscoa
        </li>
        <li
          onClick={() => window.scrollTo({ top: 1300, behavior: "smooth" })}
          className="text-brown font-extrabold text-xl cursor-pointer hover:text-yellow transition-colors duration-300"
        >
          Sobre nós
        </li>
        <li onClick={() =>
            window.scrollTo({ top: 2100, behavior: "smooth" })
          } className="text-brown font-extrabold text-xl cursor-pointer hover:text-yellow transition-colors duration-300">
          Clientes
        </li>
      </ul>
    </header>
  );
}
