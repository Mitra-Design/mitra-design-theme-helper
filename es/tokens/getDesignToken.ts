import { getAtomToken } from './getAtomToken';
import { getMaterialToken } from './getMaterialToken';

interface ThemeConfig {
    token: any;
}

export const getDesignToken = (config?: ThemeConfig) => {
    const atomToken = getAtomToken();
    const materialToken = getMaterialToken(atomToken);

    return {
        ...materialToken,
        ...(config?.token || {}),
    };
};
