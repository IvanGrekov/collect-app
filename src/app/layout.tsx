import { ReactNode } from 'react';

import cx from 'classnames';
import { Inter } from 'next/font/google';

import styles from 'app/layout.module.scss';
import Providers from 'app/providers';
import Container from 'components/container';
import ErrorBoundary from 'components/error-boundary';
import Header from 'components/header';
import NetworkStatusIndicator from 'components/network-status-indicator';
import Notifications from 'components/notifications';
import Typography from 'components/typography';
import { EAppTitle } from 'types/appTitle.types';

import 'styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ErrorBoundary>
                    <Providers>
                        <Header>
                            <Typography element="h1" variant="subtitle1">
                                {EAppTitle.MAIN}
                            </Typography>
                        </Header>

                        <Container
                            element="main"
                            className={cx(
                                styles.main,
                                styles['header-spacing'],
                            )}
                        >
                            {children}
                        </Container>

                        <Notifications />

                        <NetworkStatusIndicator />
                    </Providers>

                    <div id="modal-root" />
                    <div id="drawer-root" />
                    <div id="notifications-root" />
                </ErrorBoundary>
            </body>
        </html>
    );
}
