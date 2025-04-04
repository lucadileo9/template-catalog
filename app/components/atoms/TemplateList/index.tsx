import React, { FC } from "react";
import TemplateListProps from "./index.types"
import { validTemplates } from 'config/templates';
import Link from "next/link";

const TemplateList: FC<TemplateListProps> = ({ }) => {
  return <>
  <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 text-center">
  <ul className="space-y-3">
    {validTemplates.map((template) => (
      <li key={template}>
        <Link
          href={`/${template}`} // Link dinamico basato sul nome del template
          className="block w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700 font-medium text-center"
        >
          {template}
        </Link>
      </li>
    ))}
  </ul>
</div>
  </>
}
    
export default TemplateList
