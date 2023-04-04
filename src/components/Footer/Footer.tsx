export function Footer() {
  return (
    <div className="flex flex-col">

      <div className="flex max-w-full items-center justify-between tablet:flex-col">

        <ul className="flex flex-col gap-2 w-full1">
          <li className="flex items-center gap-4 text-white font-bold">
          <img src="/assets/phone.png"/>
            <p>(81) 99724-8382 [Susana Gomes]</p>
          </li>
          <li className="flex items-center gap-4 text-white font-bold">
          <img src="/assets/phone.png"/>
            <p>(81) 99875-8667 [Juliana]</p>
          </li>
          <li className="flex items-center gap-4 text-white font-bold">
          <img src="/assets/phone.png"/>
            <p>(81) 98539-1935 [Carla]</p>
          </li>
        </ul>
        <div className="flex self-end items-center gap-4 tablet:mt-6">
          <img src="/assets/map.png"/>
          <p className="text-white font-bold">
            Ateliê Susana Gomes Endereço: Rua São João Batista, 220 - Água Fria
          </p>
        </div>
      </div>
    </div>
  );
}
