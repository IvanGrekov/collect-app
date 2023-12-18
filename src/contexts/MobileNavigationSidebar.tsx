'use client';

import React, {
    createContext,
    useState,
    useContext,
    PropsWithChildren,
} from 'react';

interface IMobileNavigationSidebarContextValues {
    open: boolean;
    toggleSidebar: () => void;
}

const MobileNavigationSidebarContext =
    createContext<IMobileNavigationSidebarContextValues | null>(null);

export default function MobileNavigationSidebarProvider({
    children,
}: PropsWithChildren): JSX.Element {
    const [open, setOpen] = useState(false);

    const toggleSidebar = (): void => setOpen((prev) => !prev);

    return (
        <MobileNavigationSidebarContext.Provider
            value={{ open, toggleSidebar }}
        >
            {children}
        </MobileNavigationSidebarContext.Provider>
    );
}

export const useMobileNavigationSidebar =
    (): IMobileNavigationSidebarContextValues => {
        const context = useContext(MobileNavigationSidebarContext);

        if (!context) {
            throw new Error(
                'useMobileNavigationSidebar must be used within a MobileNavigationSidebarProvider',
            );
        }

        return context;
    };
