import * as vscode from 'vscode';

import { mergeTokenMeta } from './mergeTokenMeta';
import type { DesignTokenMeta } from '../../types/token';

const provideCompletionItems = async (
    document: vscode.TextDocument,
    position: vscode.Position,
    meta: Record<string, any>
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

    const cursorPosition = position.character; // 当前光标的位置

    // 获取光标前的文本
    const beforeCursorText = line.text.substring(0, cursorPosition);
    const userInput = beforeCursorText.split(/\s+/).pop(); // 获取最后一个输入的词

    const rets = Object.keys(meta).map((key) => {
        const { detail, filterText, documentation, label } = meta[key];

        let kind = vscode.CompletionItemKind.Variable;
        if (detail.startsWith('#') || detail.startsWith('rgb')) {
            kind = vscode.CompletionItemKind.Color;
        }

        if (detail.endsWith('px')) {
            kind = vscode.CompletionItemKind.Unit;
        }

        const completionItem = new vscode.CompletionItem(label, kind);
        completionItem.detail = detail;
        completionItem.filterText = filterText;
        completionItem.documentation = documentation;
        completionItem.insertText = label;

        const startPos = position.translate(0, -userInput.length); // 往前移动光标以计算起始位置
        const endPos = position;
        completionItem.range = new vscode.Range(startPos, endPos);

        return completionItem;
    });

    return rets;

};

export default function lessVariablesCompletion(
    context: vscode.ExtensionContext,
    tokens: DesignTokenMeta
) {
    const meta = mergeTokenMeta(tokens);

    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            ['less', 'vue'],
            {
                provideCompletionItems: (document, position) => provideCompletionItems(document, position, meta)
            },
            '@',
            ':',
            ' ',
            '-'
        ),
    );
}
