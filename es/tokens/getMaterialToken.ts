import { generate, presetColors } from '@mitra-design/color';

import type { AtomToken } from '../interface/atom';
import { genColorMaterialToken } from '../shared/genColorMaterialToken';
import { genFontMaterialToken } from '../shared/genFontMaterialToken';
import { genRadiusMaterialToken } from '../shared/genRadiusMaterialToken';
import { genShadowMaterialToken } from '../shared/genShadowMaterialToken';
import { genSizeMaterialToken } from '../shared/genSizeMaterialToken';

export const getMaterialToken = (atomToken: AtomToken) => {
    const colorPalettes = Object.keys(presetColors)
        .map(colorKey => {
            const colors = generate(atomToken[colorKey], { list: true }) as string;

            return new Array(10).fill(1).reduce((prev, _, i) => {
                prev[`${colorKey}${i + 1}`] = colors[i];
                return prev;
            }, {});
        })
        .reduce((prev, cur) => {
            prev = {
                ...prev,
                ...cur,
            };
            return prev;
        });

    return {
        ...atomToken,
        ...colorPalettes,
        // Colors
        ...genColorMaterialToken(atomToken),
        // Font
        ...genFontMaterialToken(atomToken),
        // Size
        ...genSizeMaterialToken(atomToken.size),
        // Radius
        ...genRadiusMaterialToken(atomToken.borderRadius),
        // Shadow
        ...genShadowMaterialToken(atomToken.shadowBaseColor),
    };
};
