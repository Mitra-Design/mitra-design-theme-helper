import { generate } from '@mitra-design/color';

export const genColorPalette = (baseColor: string) => {
    const colors = generate(baseColor, { list: true }) as string;
    return {
        1: colors[0],
        2: colors[1],
        3: colors[2],
        4: colors[3],
        5: colors[4],
        6: colors[5],
        7: colors[6],
        8: colors[7],
        9: colors[8],
        10: colors[9],
    };
};
