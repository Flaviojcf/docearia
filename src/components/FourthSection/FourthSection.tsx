export function FourthSection() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center max-w-full items-center">
        <h1 className="text-white text-4xl font-extrabold underline">
          Clientes
        </h1>
      </div>

      <div className="flex flex-col justify-center mt-20 gap-20  w-full items-center">
        <div className="flex justify-between gap-4 flex-wrap w-full items-center tablet:justify-center">
          <div className="flex flex-col py-2 justify-center px-2 bg-white rounded-xl max-w-[512px] max-h-[240px] gap-2 mobile:text-center mobile:items-center">
            <h1 className="text-brown font-bold">Beatriz Carreiro</h1>
            <p className="text-brown">
              Amei tudo o que comprei! Os bolos eram deliciosos e os salgados
              estavam perfeitos. Sem dúvida, uma das melhores lojas de comidas
              que já visitei. Nota 10/10!
            </p>
            <img
              className="w-20 h-20 object-contain"
              src="/assets/stars.png"
              alt=""
            />
          </div>
          <div className="flex flex-col py-2 justify-center px-2 bg-white rounded-xl w-[512px] max-h-[240px] gap-2  mobile:text-center mobile:items-center">
            <h1 className="text-brown font-bold">Igor Correia </h1>
            <p className="text-brown">
              Fiquei impressionado com a qualidade dos produtos dessa loja.
              Todos os itens que experimentei eram frescos e deliciosos, e o
              atendimento foi excelente. Definitivamente voltarei! Nota máxima
              para a loja.
            </p>
            <img
              className="w-20 h-20 object-contain"
              src="/assets/stars.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-between gap-4 flex-wrap w-full items-center tablet:justify-center">
          <div className="flex flex-col py-2 justify-center px-2 bg-white rounded-xl max-w-[512px] max-h-[240px] gap-2  mobile:text-center mobile:items-center">
            <h1 className="text-brown font-bold">Julian Dias</h1>
            <p className="text-brown">
              Não poderia estar mais satisfeito com minha experiência na loja de
              comidas. Os salgados eram incríveis e os bolos caseiros eram uma
              verdadeira delícia. A equipe também foi muito atenciosa e
              prestativa. Recomendo muito! Nota 10/10
            </p>
            <img
              className="w-20 h-20 object-contain"
              src="/assets/stars.png"
              alt=""
            />
          </div>
          <div className="flex flex-col py-2 justify-center px-2 bg-white rounded-xl w-[512px] max-h-[240px] gap-2  mobile:text-center mobile:items-center">
            <h1 className="text-brown font-bold">Arthur Lima </h1>
            <p className="text-brown">
              Essa loja tem o melhor bolo de chocolate que já provei! Os
              salgados também eram ótimos e fresquinhos. A equipe foi muito
              simpática e atenciosa durante toda a minha visita. Com certeza
              voltarei para experimentar mais coisas! Nota máxima para a loja
            </p>
            <img
              className="w-20 h-20 object-contain"
              src="/assets/stars.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
