import { toKebabCase } from '../../utils/toKebabCase';

import { valueNeedAddPx } from '../../utils/valueNeedAddPx';
import { FilterColorCompletionItems, FilterPropCompletionItems } from '../../utils/constants';
import type { DesignTokenMeta } from '../../types/token';


export const mergeTokenMeta = (tokens: DesignTokenMeta) => {
    const meta: Record<string, any> = {};

    Object.keys(tokens)
        .filter((key => !FilterColorCompletionItems.some(item => toKebabCase(key).startsWith(item))))
        .filter((key => !FilterPropCompletionItems.includes(toKebabCase(key))))
        .map((key) => {
            const tokenMeta = tokens[key];
            const tokenKey = toKebabCase(key);
            const need = valueNeedAddPx(tokenKey);
            let comment = [tokenMeta.token];

            if (tokenMeta) {
                comment = [
                    tokenMeta.name,
                    tokenMeta.desc,
                ].filter(Boolean);
            }

            meta[key] = {
                label: `@${tokenKey}`,
                detail: `${tokenMeta.default}${need ? 'px' : ''}`,
                documentation: `${comment.join('\n\n')}`,
                filterText: `@${tokenKey}`,
            };
        });

    return meta;
};
