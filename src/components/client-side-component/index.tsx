'use client';

import { PropsWithChildren, useLayoutEffect, useState } from 'react';

export default function ClientSideComponent({
    children,
}: PropsWithChildren): JSX.Element | null {
    const [isClientSide, setIsClientSide] = useState(false);

    useLayoutEffect(() => {
        setIsClientSide(true);
    }, []);

    if (!isClientSide) {
        return null;
    }

    return <>{children}</>;
}
