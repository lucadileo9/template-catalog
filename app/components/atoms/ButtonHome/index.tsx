'use client'
import React, { FC } from "react";
import ButtonHomeProps from "./index.types"
import { Button } from "@global-ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const ButtonHome: FC<ButtonHomeProps> = ({ }) => {
  const router = useRouter(); 
  return <>
      <Button
      className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-transparent hover:bg-white/30  shadow-md transition-colors"
      variant="outline" 
      size="icon" 
      onClick={() => router.push("/")} 
      aria-label="Torna al catalogo"
    >
      <LogOut size={24} color="white" />
    </Button>
</>
}

export default ButtonHome