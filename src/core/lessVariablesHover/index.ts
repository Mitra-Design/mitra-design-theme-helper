// @ts-nocheck
import * as vscode from 'vscode';
import { getDesignToken } from '../../../es/tokens/getDesignToken';
import { toKebabCase } from '../../../es/utils/toKebabCase';
import { MitraDesignDocsURL } from '../../utils/constants';
import { valueNeedAddPx } from '../../utils/valueNeedAddPx';

import TokenMeta from '../../../es/tokens/token-meta.json';
import { toUpperCamelCase } from '../../../es/utils/toCamelCase';

const tokenMeta = { ...TokenMeta.atom, ...TokenMeta.material };

const provideHover = async (
    document: vscode.TextDocument,
    position: vscode.Position
) => {
    let word = document.getText(document.getWordRangeAtPosition(position));
    if (document.languageId === 'vue') {
        word = `@${word}`;
    }
    if (!word.startsWith('@')) {
        return;
    }

    const tokens = getDesignToken();

    let lessVarValue = '';

    for (const key in tokens) {
        if (Object.prototype.hasOwnProperty.call(tokens, key)) {
            const lessVarName = toKebabCase(key);
            if (word.slice(1) === lessVarName) {
                const need = valueNeedAddPx(lessVarName);
                lessVarValue = `${tokens[key]}${need ? 'px' : ''}`;
                break;
            }
        }
    }

    if (!lessVarValue) {
        return;
    }

    const key = toUpperCamelCase(word.slice(1));

    const content = `
#### ${word}: ${lessVarValue}

${tokenMeta[key]?.name ?? ''}

${tokenMeta[key]?.desc ?? ''}

[Mitra Design Theme 全局变量文档](${MitraDesignDocsURL})
    `;

    const mdString = new vscode.MarkdownString(content);
    return new vscode.Hover(mdString);
};

export default function lessVariablesHover(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.languages.registerHoverProvider('less', { provideHover }),
        vscode.languages.registerHoverProvider('vue', { provideHover }),
    );
}
