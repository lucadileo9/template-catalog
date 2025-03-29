import { templateConfig } from '../config';

export const Header = () => {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={templateConfig.logo} alt="Logo" className="h-8" />
        <nav>
          <ul className="flex space-x-4">
            {templateConfig.menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};