import type { SizeMaterialToken } from '../interface/material';

export const genSizeMaterialToken = (size: number): SizeMaterialToken => {
    return {
        sizeLG: size + 4,
        sizeMD: size,
        sizeSM: size - 4,
        sizeXS: size - 8,
    };
};
