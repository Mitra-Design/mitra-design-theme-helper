import type { MaterialToken } from '../interface/material';
import { toKebabCase } from '../utils/toKebabCase';

const needAddUnit = ['font-size', 'border-radius', 'size'];

export const genCSSVariables = (tokens: MaterialToken) => {
    const cssVarsBody = Object.keys(tokens).reduce((prev, key) => {
        const value = tokens[key as keyof MaterialToken];
        const varName = `--@{prefix}-${toKebabCase(key)}`;
        const need = needAddUnit.some(item => varName.includes(item));
        return `${prev}${varName}: ${value}${need ? 'px' : ''};`;
    }, '');

    return `@import './vars.less';

@{css-variable-root} {
    ${cssVarsBody}
}`;
};


export const genLessVariables = (tokens: MaterialToken) => {
    const lessVarsBody = Object.keys(tokens).reduce((prev, key) => {
        const varName = `${toKebabCase(key)}`;
        // var(~'--@{prefix}-blue6')
        return `${prev}@${varName}: var(~'--@{prefix}-${varName}');`;
    }, '@import "./vars.less";\n\n');

    return lessVarsBody;
};
