import type { AtomToken } from '../interface/atom';
import { FontMaterialToken } from '../interface/material';
import { genFontSizes } from '../utils/genFontSizes';

export const genFontMaterialToken = (atomToken: AtomToken): FontMaterialToken => {
    const fontSizes = genFontSizes(atomToken.fontSize);

    return {
        fontSizeSM: fontSizes[1].size,
        fontSizeBase: fontSizes[2].size,
        fontSizeLG: fontSizes[3].size,
        fontSizeXL: fontSizes[4].size,

        fontSizeTitleLG: fontSizes[8].size,
        fontSizeTitlePrimary: fontSizes[7].size,
        fontSizeTitleSecondary: fontSizes[5].size,

        lineHeightSM: fontSizes[1].lineHeight,
        lineHeightBase: fontSizes[2].lineHeight,
        lineHeightLG: fontSizes[3].lineHeight,
        lineHeightXL: fontSizes[4].lineHeight,
    };
};
