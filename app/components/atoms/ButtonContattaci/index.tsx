import React, { FC } from "react";
import ButtonContattaciProps from "./index.types"
import Link from "next/link";

const ButtonContattaci: FC<ButtonContattaciProps> = ({ href }) => {
  return <>
  <Link
      href={href}
      className="
        inline-flex items-center justify-center
        px-4 py-2
        bg-[var(--blu)] text-white font-medium
        rounded-full
        transition-all duration-300
        hover:scale-105 hover:text-[var(--giallo)]
        text-sm
      "
    >
      Contattaci
    </Link>
  </>
}

export default ButtonContattaci