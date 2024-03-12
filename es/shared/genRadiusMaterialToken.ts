import type { RadiusMaterialToken } from '../interface/material';

export const genRadiusMaterialToken = (radius: number): RadiusMaterialToken => {
    return {
        borderRadiusBase: radius,
        borderRadiusNone: 0,
        borderRadiusXS: 1,
        borderRadiusSM: 2,
        borderRadiusLG: 6,
        borderRadiusXL: 8,
    };
};
