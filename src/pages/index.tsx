import Image from "next/image"

import haskell from "@/shirts/haskell.png"
import ocamel from "@/shirts/ocamel.png"
import rust from "@/shirts/rust.png"

export default function Home() {
  const shirts = [
    { img: haskell, id: 1, width: 450, height: 500 },
    { img: ocamel, id: 2, width: 450, height: 500 },
    { img: rust, id: 3, width: 450, height: 500 },
  ]

  return (
    <div className="flex gap-16 carousel w-full ml-auto">
      {
        shirts.map(shirt => (
          <div key={shirt.id} className="p-2 bg-stone-600 flex flex-col items-center justify-between rounded-md overflow-hidden transition-all duration-200 [&_div]:hover:translate-y-0">
            <Image
              className="p-8"
              src={shirt.img}
              width={shirt.width}
              height={shirt.height}
              alt=""
            />
            <div className="*:text-xl flex justify-between w-full rounded-md p-4 bg-stone-800 translate-y-[120%] opacity-80 transition-all duration-200 ">
              <span>Camiseta show</span>
              <strong>R$ 40,00</strong>
            </div>
          </div>
        ))
      }
    </div>
  );
}
