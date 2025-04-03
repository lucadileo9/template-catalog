'use client';
import React from 'react';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Importiamo useRouter da Next.js
import { Button } from '@global-ui/button';

const HomeButton: React.FC = () => {
    const router = useRouter(); // Inizializziamo il router

    const handleNavigateToHome = () => {
        router.push('/'); // Naviga alla home ("/")
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                size="icon"
                variant="secondary"
                className="h-12 w-12 rounded-full shadow-lg"
                onClick={handleNavigateToHome} // Assegniamo la funzione al click
            >
                <LogOut className="h-6 w-6" />
                <span className="sr-only">Torna alla Home</span>
            </Button>
        </div>
    );
};

export default HomeButton;