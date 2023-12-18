import { ETheme } from 'types/theme.types';

export const getUserTheme = (): ETheme => {
    if (typeof window === 'undefined') {
        return ETheme.LIGHT;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return ETheme.DARK;
    }

    return ETheme.LIGHT;
};
