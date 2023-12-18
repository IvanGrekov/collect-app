import type { Metadata } from 'next';

import {
    APP_META_TITLE,
    APP_META_DESCRIPTION,
} from 'constants/pages.constants';

export const metadata: Metadata = {
    title: `${APP_META_TITLE} - Products`,
    description: `${APP_META_DESCRIPTION} Explore diverse products`,
};

export default function Products(): JSX.Element {
    return (
        <>
            <h1>Products</h1>
        </>
    );
}
