'use client';

import { PropsWithChildren } from 'react';

import cx from 'classnames';

import ClientSideComponent from 'components/client-side-component';
import Container from 'components/container';
import styles from 'components/header/Header.module.scss';
import PageLoadingIndicator from 'components/page-loading-indicator';
import ThemeSwitcher from 'components/theme-switcher';
import { useIsHeaderFixed } from 'hooks/header.hooks';

interface IHeaderProps extends PropsWithChildren {
    className?: string;
    isSidebarLayout?: boolean;
}

export default function Header({
    className,
    isSidebarLayout,
    children,
}: IHeaderProps): JSX.Element {
    const { isFixed } = useIsHeaderFixed();

    return (
        <header
            className={cx(
                styles.header,
                {
                    [styles['header--fixed']]: isFixed,
                    [styles['sidebar-layout']]: isSidebarLayout,
                },
                className,
            )}
        >
            <PageLoadingIndicator className={styles.loading} />

            <Container className={styles['content-wrapper']}>
                <div className={styles.content}>
                    {children}

                    <ClientSideComponent>
                        <ThemeSwitcher tooltipPosition="left" />
                    </ClientSideComponent>
                </div>
            </Container>
        </header>
    );
}
