// app/[...slug]/page.tsx
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { validTemplates } from '../../config/templates';
import { PageProps } from '.next/types/app/layout';


interface TemplatePageParams {
  params: {
    slug: string[];
  };
}

export default async function TemplatePage({ params }: PageProps) {
  
  const resolvedParams = await params;
  if (!resolvedParams) {
    notFound();
  }
  const { slug } = resolvedParams;

  // Il primo segmento è il nome del template
  const templateName = slug[0]; // Ad esempio, "pizzeria"
  const subPath = slug.slice(1); // Ad esempio, ["menu", "1", "edit"]
  console.log('slug', slug);
  console.log('templateName', templateName);

  // Verifica se il template esiste
  if (!validTemplates.includes(templateName)) {
    notFound(); // Mostra una pagina 404 se il template non esiste
  }

  try {
    // Carica dinamicamente il layout del template
    const TemplateLayout = dynamic<{ children: React.ReactNode }>(() => import(`../../templates/${templateName}-template/app/layout`), {
      loading: () => <p>Caricamento layout...</p>,
    });

    let TemplateApp;

    if (subPath.length > 0) {
      TemplateApp = dynamic(() => import(`../../templates/${templateName}-template/app/${subPath.join('/')}/page`), {
        loading: () => <p>Caricamento...</p>,
      });  
    } else {
      TemplateApp = dynamic(() => import(`../../templates/${templateName}-template/app/page`), {
        loading: () => <p>Caricamento...</p>,
      });  
    }

    return (
      <TemplateLayout>
        <TemplateApp />
      </TemplateLayout>
    );
  } catch (error) {
    console.error('Errore durante il caricamento del template:', error);
    notFound();
  }
}


// import dynamic from 'next/dynamic';
// import { notFound } from 'next/navigation';

// export default async function TemplatePage({ params }) {
//   const { template } = params;
//   console.log('params', params);
//   console.log('template', template);

//   try {
//     // Importa dinamicamente il template selezionato
//     const TemplateApp = dynamic(() => import(`../../templates/${template}-template/app/page`), {
//       // ssr: false,
//       loading: () => <p>Caricamento...</p>,
//     });

//     return <TemplateApp />;
//   } catch (error) {
//     console.error('Errore durante il caricamento del template:', error);
//     notFound();
//   }
// }
