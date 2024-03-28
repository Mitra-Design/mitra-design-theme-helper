import * as vscode from 'vscode';

import { mergeTokenMeta } from './mergeTokenMeta';
import type { DesignTokenMeta } from '../../types/token';

const provideCompletionItems = async (
    document: vscode.TextDocument,
    position: vscode.Position,
    tokens: DesignTokenMeta
) => {
    const line = document.lineAt(position);

    if (line.text.indexOf(':') === -1) {
        return;
    }

    const meta = mergeTokenMeta(tokens);

    return Object.keys(meta).map((key) => {
        const { detail, filterText, documentation, label } = meta[key];

        let kind = vscode.CompletionItemKind.Variable;
        if (detail.startsWith('#')) {
            kind = vscode.CompletionItemKind.Color;
        }

        const completionItem = new vscode.CompletionItem(label, kind);
        completionItem.detail = detail;
        completionItem.filterText = filterText;
        completionItem.documentation = documentation;

        return completionItem;
    });
};

export default function lessVariablesCompletion(
    context: vscode.ExtensionContext,
    tokens: DesignTokenMeta
) {
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            ['less', 'vue'],
            {
                provideCompletionItems: (document, position) => provideCompletionItems(document, position, tokens)
            },
            '@',
            ' ',
            ':',
            '-'
        ),
    );
}
