export function SecondSetion() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center max-w-full px-60 items-center">
        <h1 className="text-brown text-4xl font-extrabold underline">
          Produtos da Páscoa
        </h1>
      </div>
      <ul className="flex gap-8 justify-center items-center mt-36 flex-wrap">
        <li>
          <img
            className="w-[304px] h-[270px] rounded-xl object-cover tablet:w-full max-w-[240px]"
            src="/assets/pascoa1.jpg"
          />
        </li>
        <li>
          <img
            className="w-[304px] h-[270px] rounded-xl object-cover tablet:w-full max-w-[240px]"
            src="/assets/pascoa2.png"
          />
        </li>
        <li>
          <img
            className="w-[304px] h-[270px] rounded-xl object-cover tablet:w-full max-w-[240px]"
            src="/assets/pascoa3.jpg"
          />
        </li>
        <li>
          <img
            className="w-[304px] h-[270px] rounded-xl object-cover tablet:w-full max-w-[240px]"
            src="/assets/pascoa4.png"
          />
        </li>
      </ul>

      <a
        className="flex  justify-center mt-24 "
        href="/assets/cardapioPascoa.pdf"
        download="cardapioPascoa.pdf"
      >
        <button className="rounded-full bg-brown w-60 h-14 text-white font-extrabold hover:brightness-75 duration-150">
          Baixar Cardápio da Páscoa
        </button>
      </a>
    </div>
  );
}
