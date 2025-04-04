import React, { FC } from "react";
import FooterProps from "./index.types"

const Footer: FC<FooterProps> = ({ }) => {
  return <>
  <footer className="bg-gray-100 border-t">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Powered By JEMORE. Contattaci, siamo sempre aperti a nuove proposte e collaborazioni..</p>
        </div>
      </footer>
  </>
}

export default Footer