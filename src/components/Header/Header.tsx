import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ScrollToTop } from "../../utils/ScrollToTop";

export function Header() {

  return (
    <header className="flex mb-6 items-center max-w-full tablet:justify-between tablet:items-center ">
      <div className="flex items-center">
        <img
          className="w-72  object-contain tablet:w-52"
          src="/assets/logo.png"
          alt="cake image"
        />
      </div>

      <ul className="flex gap-32 items-center justify-center self-center ml-auto mr-auto tablet:hidden">
        <li
          onClick={() => ScrollToTop(300)}
          className="text-brown font-extrabold text-xl cursor-pointer  hover:text-yellow transition-colors duration-300"
        >
          Início
        </li>
        <li
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          className="text-brown font-extrabold text-xl cursor-pointer hover:text-yellow transition-colors duration-300"
        >
          Páscoa
        </li>
        <li
          onClick={() => window.scrollTo({ top: 1200, behavior: "smooth" })}
          className="text-brown font-extrabold text-xl cursor-pointer hover:text-yellow transition-colors duration-300"
        >
          Sobre nós
        </li>
        <li
          onClick={() => window.scrollTo({ top: 1900, behavior: "smooth" })}
          className="text-brown font-extrabold text-xl cursor-pointer hover:text-yellow transition-colors duration-300"
        >
          Clientes
        </li>
      </ul>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="hidden tablet:flex ">
          <img src="/assets/group.png" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="z-50">
          <ul className="bg-white flex flex-col p-4 rounded-md gap-4 text-black mt-4 mr-6">
            <li className="text-brown font-extrabold text-xl cursor-pointer  hover:text-yellow transition-colors duration-300 ease-in-out mobile:text-sm">
              Início
            </li>
            <li
              onClick={() => window.scrollTo({ top: 650, behavior: "smooth" })}
              className="text-brown font-extrabold text-xl cursor-pointer  hover:text-yellow transition-colors duration-300 ease-in-out mobile:text-sm"
            >
              Páscoa
            </li>
            <li
              onClick={() => window.scrollTo({ top: 2100, behavior: "smooth" })}
              className="text-brown font-extrabold text-xl cursor-pointer  hover:text-yellow transition-colors duration-300 ease-in-out mobile:text-sm"
            >
              Sobre nós
            </li>
            <li
              onClick={() => window.scrollTo({ top: 3900, behavior: "smooth" })}
              className="text-brown font-extrabold text-xl cursor-pointer  hover:text-yellow transition-colors duration-300 ease-in-out mobile:text-sm"
            >
              Clientes
            </li>
          </ul>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </header>
  );
}
