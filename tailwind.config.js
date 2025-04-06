/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	'./templates/**/*.{js,ts,jsx,tsx}', // File dinamici nei templates

  ],
  theme: {
  	screens: {
  		phone: '320px',
  		tablet: '696px',
  		laptop: '1080px',
  		notebook: '1366px',
  		desktop: '1920px'
  	},
	container: {
		center: true, // Centra automaticamente il contenitore
		padding: {
			DEFAULT: '0.5rem', // Padding predefinito (ridotto)
			phone: '0.5rem',   // Padding per schermi piccoli
			tablet: '1rem',    // Padding per tablet
			laptop: '2rem',    // Padding per laptop
			notebook: '3rem',  // Padding per notebook
			desktop: '4rem',   // Padding per desktop
		},
	  },
  	extend: {
  		colors: {
  			'light-blue': '#2E8CAD',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)', // ATTENZIONE: questi colori verranno applicati anche alle componenti shadcn
				// per ripristinare il colore originale reinserire: hsl(var(--primary))
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)', // ATTENZIONE: questi colori verranno applicati anche alle componenti shadcn
				// per ripristinare il colore originale reinserire: hsl(var(--secondary))
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
			tertiary: {
				DEFAULT: 'var(--tertiary)', // ATTENZIONE: questi colori verranno applicati anche alle componenti shadcn
				// per ripristinare il colore originale reinserire: hsl(var(--tertiary))
				foreground: 'hsl(var(--tertiary-foreground))'
			},			
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundColor: {
  			'color': 'black'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
