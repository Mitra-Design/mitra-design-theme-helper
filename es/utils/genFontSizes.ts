/**
 * 简易字体与行高的梯度算法
 *
 * @param base 基准字体大小，一般是「正文 - 常规」字体大小
 */
export const genFontSizes = (base: number) => {
    const fontSizes = new Array(10).fill(null).map((_, i) => {
        // 10 12 13 14 16 18 20 24 28 32
        // 以此为基准，向上向下递增


        // 0 1
        // -3 -1
        if (i < 2) {
            return base - 3 + i * 2;
        }

        // 2
        // base
        if (i === 2) {
            return base;
        }

        // 3 4 5 6
        // 1 3 5 7
        if (i > 2 && i <= 6) {
            return base + 2 * (i - 3) + 1;
        }


        // 7 8 9
        // 11 15 19
        if (i > 6) {
            return base + 4 * (i - 4) - 1;
        }
    }) as number[];

    return fontSizes.map(size => {
        return {
            size,
            lineHeight: (size + 8) / size, // 行高的增长会随着字体大小的增长而减缓
        };
    });
};
