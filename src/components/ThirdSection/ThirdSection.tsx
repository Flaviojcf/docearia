export function ThirdSection() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center max-w-full px-60 items-center">
        <h1 className="text-brown text-4xl font-extrabold underline">
          Sobre Nós
        </h1>
      </div>

      <div className="flex justify-between">
        <div className="mt-8 flex flex-col">
          <div className="flex flex-col gap-8">
            <p className="max-w-[540px] text-brown font-extrabold text-xl">
              Olá e bem-vindos à nossa loja de comidas deliciosas! Somos um
              grupo de três amigas apaixonadas por cozinhar e criar receitas
              incríveis de bolos, salgados e outros quitutes deliciosos.
            </p>
            <p className="max-w-[540px] text-brown font-extrabold text-xl">
              Nosso objetivo é criar um ambiente acolhedor e amigável para que
              todos possam desfrutar de nossa comida deliciosa enquanto relaxam
              e se divertem. Além disso, estamos sempre abertos a sugestões e
              feedbacks para que possamos continuar melhorando e atendendo às
              necessidades de nossos clientes.
            </p>
            <p className="max-w-[540px] text-brown font-extrabold text-xl">
              Então, não hesite em experimentar nossos produtos e nos contar o
              que achou. Estamos ansiosas para servi-los e fazer parte de sua
              experiência gastronômica. Obrigado por escolher nossa loja de
              delícias e esperamos vê-los em breve!
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <ul className="flex gap-4">
            <img
              className="w-[304px] h-[270px] rounded-xl object-cover"
              src="/assets/doce.jpeg"
              alt=""
            />
            <img
              className="w-[304px] h-[270px] rounded-xl object-cover"
              src="/assets/doce3.jpg"
              alt=""
            />
          </ul>
          <ul className="flex gap-4">
            <img
              className="w-[304px] h-[270px] rounded-xl object-cover"
              src="/assets/salgado.jpg"
              alt=""
            />
            <img
              className="w-[304px] h-[270px] rounded-xl object-cover"
              src="/assets/salgado2.webp"
              alt=""
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
