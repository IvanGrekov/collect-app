import 'styles/globals.scss';
import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Collect',
    description: 'Collect is a web app to buy sell and exchange collectibles.',
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
