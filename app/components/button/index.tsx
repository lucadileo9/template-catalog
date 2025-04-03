'use client';
import React from 'react';
import { LogOut } from 'lucide-react';
import { Button } from '@global-ui/button';

const Button2: React.FC = ({  }) => {
    return (
        <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="icon" 
        variant="secondary" 
        className="h-12 w-12 rounded-full shadow-lg"
        onClick={() => console.log("Exit button clicked")}
      >
        <LogOut className="h-6 w-6" />
        <span className="sr-only">Exit</span>
      </Button>
    </div>
    );
};

export default Button2;