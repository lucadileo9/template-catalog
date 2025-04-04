'use client'
import React, { FC } from "react";
import ButtonHomeProps from "./index.types"
import { Button } from "@global-ui/button";
import { LogOut } from "lucide-react";

const ButtonHome: FC<ButtonHomeProps> = ({ }) => {
  return <>
      <Button
      className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 shadow-md transition-colors"
      variant="outline" 
      size="icon" 
      onClick={() => window.location.href = "/"}
      aria-label="Torna al catalogo"
    >
      <LogOut size={24} color="white" />
    </Button>
</>
}

export default ButtonHome