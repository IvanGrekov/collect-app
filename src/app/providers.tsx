'use client';

import { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import MobileNavigationSidebarProvider from 'contexts/MobileNavigationSidebar';
import NotificationsProvider from 'contexts/NotificationsContext';
import PageLoadingProvider from 'contexts/PageLoadingContext';

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    const [client] = useState(new QueryClient());

    return (
        <QueryClientProvider client={client}>
            <MobileNavigationSidebarProvider>
                <NotificationsProvider>
                    <PageLoadingProvider>{children}</PageLoadingProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </NotificationsProvider>
            </MobileNavigationSidebarProvider>
        </QueryClientProvider>
    );
}
