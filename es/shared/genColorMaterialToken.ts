import type { AtomToken } from '../interface/atom';
import type { ColorMaterialToken } from '../interface/material';
import { genColorPalette } from '../utils/genColorPalette';

export const genColorMaterialToken = (atomToken: AtomToken): ColorMaterialToken => {
    const {
        colorPrimary: colorPrimaryBase,
        colorSuccess: colorSuccessBase,
        colorWarning: colorWarningBase,
        colorError: colorErrorBase,
    } = atomToken;

    const primaryColors = genColorPalette(colorPrimaryBase);
    const successColors = genColorPalette(colorSuccessBase);
    const warningColors = genColorPalette(colorWarningBase);
    const ErrorColors = genColorPalette(colorErrorBase);

    return {
        colorPrimaryHover: primaryColors[5],
        colorPrimaryActive: primaryColors[7],
        colorPrimarySpecial: primaryColors[4],
        colorPrimaryDisabled: primaryColors[3],
        colorPrimaryBorder: primaryColors[2],
        colorPrimaryLightBg: primaryColors[1],
        colorPrimaryPrior: '#015BEC',

        colorSuccessHover: successColors[5],
        colorSuccessActive: successColors[7],
        colorSuccessSpecial: successColors[4],
        colorSuccessDisabled: successColors[3],
        colorSuccessBorder: successColors[2],
        colorSuccessLightBg: successColors[1],
        colorSuccessPrior: '#2BB352',

        colorWarningHover: warningColors[5],
        colorWarningActive: warningColors[7],
        colorWarningSpecial: warningColors[4],
        colorWarningDisabled: warningColors[3],
        colorWarningBorder: warningColors[2],
        colorWarningLightBg: warningColors[1],
        colorWarningPrior: '#F0A127',

        colorErrorHover: ErrorColors[5],
        colorErrorActive: ErrorColors[7],
        colorErrorSpecial: ErrorColors[4],
        colorErrorDisabled: ErrorColors[3],
        colorErrorBorder: ErrorColors[2],
        colorErrorLightBg: ErrorColors[1],
        colorErrorPrior: '#ED521E',

        colorTextPrimary: atomToken.colorNeutral9,
        colorTextSecondary: atomToken.colorNeutral8,
        colorTextInfo: atomToken.colorNeutral7,
        colorTextDescription: atomToken.colorNeutral6,
        colorTextPlaceholder: atomToken.colorNeutral5,
        colorTextDisabled: atomToken.colorNeutral5,

        colorBorder: atomToken.colorNeutral4,
        colorBorderHover: atomToken.colorNeutral5,
        colorBorderSecondary: atomToken.colorNeutral3,

        colorBackgroundBase: atomToken.colorNeutral3,
        colorBackgroundBaseLight: atomToken.colorNeutral2,
        colorBackgroundSpecial: atomToken.colorNeutral7,
        colorBackgroundSpecialLight: atomToken.colorNeutral4,
        colorBackgroundIcon: atomToken.colorNeutral6,
        colorBackgroundIconLight: atomToken.colorNeutral5,
    };
};
