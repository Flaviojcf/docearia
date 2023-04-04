export function FirstSection() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between tablet:flex-col tablet:items-center ">
        <div className="flex flex-col gap-6">
          <div className="flex tablet:self-center tablet:text-center">
            <h1 className="text-brown text-4xl font-extrabold mobile:text-xl">
              Bem-vindos à nossa loja de delícias!
            </h1>
          </div>

          <div className="flex tablet:self-center tablet:text-center">
            <p className="max-w-[440px] text-brown font-extrabold text-2xl tablet:w-full mobile:text-lg">
              Somos três amigas apaixonadas por cozinhar e criar receitas
              incríveis de bolos, salgados e outros quitutes saborosos. Aqui
              você encontrará uma grande variedade de opções fresquinhas e
              caseiras.
            </p>
          </div>

          <div className="tablet:hidden ">
            <button className="rounded-full bg-brown w-40 h-12 text-white font-extrabold hover:brightness-75 hover:duration-150 mobile:w-24 mobile:h-6 mobile:text-sm">
              Veja mais
            </button>
          </div>

          <ul className="flex gap-8 tablet:hidden">
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

        <div className="flex gap-12 tablet:gap-0 tablet:mt-6">
          <div className="flex items-center ">
            <img src="/assets/star.png" className="tablet:w-full" />
          </div>

          <div className="">
            <img
              className="max-w-[580px] object-contain tablet:w-full"
              src="/assets/bread.png"
              alt="breads image"
            />
          </div>
        </div>

        <ul className="hidden tablet:flex gap-2 items-start w-full mt-2">
            <li>
              <a href="https://www.facebook.com/cacarla.w" target="_blank">
                <img
                  className="cursor-pointer hover:brightness-90 duration-150 mobile:h-10"
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
                  className="cursor-pointer hover:brightness-90 duration-150 mobile:h-10"
                  src="/assets/instagram.png"
                  alt="instagram image"
                />
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
}
