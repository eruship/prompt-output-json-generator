import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prompt JSON Generator | AI Prompt Structure Builder',
  description:
    'Create structured JSON templates for large language model prompts with an easy-to-use visual editor. Define variables, nested objects, and arrays for better AI interactions.',
  keywords: [
    'prompt engineering',
    'JSON generator',
    'AI prompt template',
    'LLM prompt structure',
    'variable configuration',
    'structured data for AI',
    'prompt JSON builder',
    'AI development tools',
    'language model prompting',
    'prompt variables',
    'JSON schema generator',
  ],
  authors: [{ name: 'AI Tools' }],
  creator: 'AI Tools Team',
  publisher: 'AI Tools',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prompt-json-generator.vercel.app/',
    title: 'Prompt JSON Generator | AI Prompt Structure Builder',
    description:
      'Create structured JSON templates for large language model prompts with an easy-to-use visual editor.',
    siteName: 'Prompt JSON Generator',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Prompt JSON Generator Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prompt JSON Generator | AI Prompt Structure Builder',
    description:
      'Create structured JSON templates for large language model prompts with an easy-to-use visual editor.',
    images: ['/og-image.png'],
  },
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <meta name="baidu-site-verification" content="codeva-lunAAZMVc3" />
        <meta name="msvalidate.01" content="7B564FE7DF8FFBF367DD9F508778FAB0" />
        <meta name="google-site-verification" content="FcyZ3FFkRX6-vy3xhW2UA2lfWi8KEYaBB4XscfULvn8" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import './globals.css';
