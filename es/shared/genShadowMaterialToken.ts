import type { ShadowMaterialToken } from '../interface/material';

export const genShadowMaterialToken = (shadowBaseColor: string): ShadowMaterialToken => {
    return {
        shadow1: `0 2px 8px ${shadowBaseColor}`,
        shadow1Blur: `0 2px 16px ${shadowBaseColor}`,
        shadow1BlurDown: `0 4px 20px ${shadowBaseColor}`,

        shadow2Left: `-2px 0 8px ${shadowBaseColor}`,
        shadow2Right: `2px 0 8px ${shadowBaseColor}`,
        shadow2Blur: `0 0 10px ${shadowBaseColor}`,
        shadow2BlurLeft: `-2px 0 12px ${shadowBaseColor}`,

        shadow3: `0 2px 4px ${shadowBaseColor}`,
    };
};
