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
    <div className="flex gap-16">
      {
        shirts.map(shirt => (
          <div className="min-w-[600px] min-h-[600px] bg-stone-600 flex flex-col justify-center items-center rounded-3xl">
            <Image
              src={shirt.img}
              width={shirt.width}
              height={shirt.height}
              alt=""
            />
          </div>
        ))
      }
    </div>
  );
}
