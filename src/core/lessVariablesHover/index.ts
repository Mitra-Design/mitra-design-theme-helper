// @ts-nocheck
import * as vscode from 'vscode';
import { toKebabCase } from '../../utils/toKebabCase';
import { MitraDesignDocsURL } from '../../utils/constants';
import { valueNeedAddPx } from '../../utils/valueNeedAddPx';

import { toUpperCamelCase } from '../../utils/toCamelCase';
import type { DesignTokenMeta } from '../../types/token';

const provideHover = async (
    document: vscode.TextDocument,
    position: vscode.Position,
    tokens: DesignTokenMeta
) => {
    let word = document.getText(document.getWordRangeAtPosition(position));
    if (document.languageId === 'vue') {
        word = `@${word}`;
    }
    if (!word.startsWith('@')) {
        return;
    }

    let lessVarValue = '';

    for (const key in tokens) {
        if (Object.prototype.hasOwnProperty.call(tokens, key)) {
            const lessVarName = toKebabCase(key);
            if (word.slice(1) === lessVarName) {
                const need = valueNeedAddPx(lessVarName);
                lessVarValue = `${tokens[key].default}${need ? 'px' : ''}`;
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

${tokens[key]?.name ?? ''}

${tokens[key]?.desc ?? ''}

[Mitra Design Theme 全局变量文档](${MitraDesignDocsURL})
    `;

    const mdString = new vscode.MarkdownString(content);
    return new vscode.Hover(mdString);
};

export default function lessVariablesHover(context: vscode.ExtensionContext, tokens: DesignTokenMeta) {
    context.subscriptions.push(
        vscode.languages.registerHoverProvider(
            ['less', 'vue'],
            {
                provideHover: (document, position) => provideHover(document, position, tokens)
            }
        ),
    );
}
