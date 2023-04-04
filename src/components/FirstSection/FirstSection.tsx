export function FirstSection() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between tablet:flex-col items-center ">
        <div className="flex flex-col gap-6">
          <div className="flex ">
            <h1 className="text-brown text-4xl font-extrabold">
              Bem-vindos à nossa loja de delícias!
            </h1>
          </div>

          <div>
            <p className="max-w-[440px] text-brown font-extrabold text-2xl">
              Somos três amigas apaixonadas por cozinhar e criar receitas
              incríveis de bolos, salgados e outros quitutes saborosos. Aqui
              você encontrará uma grande variedade de opções fresquinhas e
              caseiras.
            </p>
          </div>

          <div>
            <button className="rounded-full bg-brown w-40 h-12 text-white font-extrabold hover:brightness-75 duration-150">
              Veja mais
            </button>
          </div>

          <ul className="flex gap-8">
            <li>
              <a href="https://www.facebook.com/cacarla.w" target="_blank">
                <img
                  className="cursor-pointer hover:brightness-90 duration-150"
                  src="/assets/facebook.png"
                  alt="facebook image"
                />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/cacarla21?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <img
                  className="cursor-pointer hover:brightness-90 duration-150"
                  src="/assets/instagram.png"
                  alt="instagram image"
                />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <img src="/assets/star.png" alt="" />
        </div>

        <div className="">
          <img
            className="max-w-[580px] object-contain"
            src="/assets/bread.png"
            alt="breads image"
          />
        </div>
      </div>
    </div>
  );
}
