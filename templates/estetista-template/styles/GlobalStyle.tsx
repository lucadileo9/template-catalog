// templates/eliminami-template/components/GlobalStyle.tsx
'use client';
import { createGlobalStyle } from 'styled-components';
import { templateConfig } from '@estetista/config';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: ${templateConfig.colors.primary};
    --secondary: ${templateConfig.colors.secondary};
    --tertiary: ${templateConfig.colors.tertiary};
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb));
  }
`;