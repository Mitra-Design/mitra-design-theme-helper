import type { MaterialToken } from '../../../es/interface/material';
import { toKebabCase } from '../../../es/utils/toKebabCase';

import TokenMeta from '../../../es/tokens/token-meta.json';
import { valueNeedAddPx } from '../../utils/valueNeedAddPx';
import { FilterColorCompletionItems, FilterPropCompletionItems } from '../../utils/constants';

const tokenMeta = { ...TokenMeta.atom, ...TokenMeta.material };

export const mergeTokenMeta = (
    tokens: MaterialToken,
    cssVars: Record<string, string>
) => {
    const meta: Record<string, any> = {};

    Object.keys(tokens)
        .filter((key => !FilterColorCompletionItems.some(item => key.startsWith(item))))
        .filter((key => !FilterPropCompletionItems.includes(toKebabCase(key))))
        .map((_key) => {
            const key = _key as keyof MaterialToken;
            const tokenValue = tokens[key];
            const tokenKey = toKebabCase(key);
            const need = valueNeedAddPx(key);
            let comment = [tokenValue];

            if (tokenMeta[key]) {
                comment = [
                    tokenMeta[key].name,
                    // @ts-ignore
                    tokenMeta[key].desc,
                ].filter(Boolean);
            }

            meta[key] = {
                label: `@${tokenKey}`,
                detail: `${tokenValue}${need ? 'px' : ''}`,
                documentation: `${comment.join('\n\n')}`,
                filterText: `@${tokenKey}: ${tokenValue}${need ? 'px' : ''}`,
            };
        });

    return meta;
};
