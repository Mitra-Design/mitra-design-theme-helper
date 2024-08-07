import * as vscode from 'vscode';

import { mergeTokenMeta } from './mergeTokenMeta';
import type { DesignTokenMeta } from '../../types/token';

const provideCompletionItems = async (
    document: vscode.TextDocument,
    position: vscode.Position,
    tokens: DesignTokenMeta
) => {
    const line = document.lineAt(position);

    if (document.languageId === 'vue') {
        const text = document.getText();
        const index = text.indexOf('<style ');
        const styleLine = document.lineAt(document.positionAt(index).line);
        if (index <= 0 || line.lineNumber < styleLine.lineNumber) {
            return;
        }
    }

    if (line.text.indexOf(':') === -1) {
        return;
    }

    const meta = mergeTokenMeta(tokens);

    return Object.keys(meta).map((key) => {
        const { detail, filterText, documentation, label } = meta[key];

        let kind = vscode.CompletionItemKind.Variable;
        if (detail.startsWith('#') || detail.startsWith('rgb')) {
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
