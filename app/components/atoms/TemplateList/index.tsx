import React, { FC } from "react";
import TemplateListProps from "./index.types"
import { validTemplates } from 'config/templates';
import Link from "next/link";

const TemplateList: FC<TemplateListProps> = ({ }) => {
  return <>
  <ul className="space-y-3">
      {validTemplates.map((template) => (
        <li key={template}>
          <Link
            href={`/${template}`}
            className="block w-full px-6 py-3 bg-[#FFD600] hover:bg-[#FFC700] text-[#222C7C] font-medium rounded-lg transition-colors text-center"
          >
            {template}
          </Link>
        </li>
      ))}
    </ul>
  </>
}
    
export default TemplateList
