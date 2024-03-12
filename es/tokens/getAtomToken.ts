import { presetColors, presetNeutralColors } from '@mitra-design/color';

import type { AtomToken } from '../interface/atom';
import { toUpperCamelCase } from '../utils/toCamelCase';


const genNeutralColors = () => {
    return Object.keys(presetNeutralColors).reduce((prev, cur) => {
        prev[`${toUpperCamelCase(`color-${cur}`)}`] = presetNeutralColors[cur];
        return prev;
    }, {});
};


export const getAtomToken = (): AtomToken => {
    return  {
        // preset color
        ...presetColors,
        ...presetNeutralColors,

        // Color
        colorPrimary: presetColors.blue,
        colorSuccess: presetColors.green,
        colorWarning: presetColors.orange,
        colorError: presetColors.red,
        colorDisabled: presetNeutralColors.neutral5,
        colorWhite: '#fff',
        ...genNeutralColors() as any,

        // Font
        fontSize: 13,

        // Radius
        borderRadius: 4,

        // Size
        size: 32,

        // Shadow
        shadowBaseColor: '#001330',
    };
};
