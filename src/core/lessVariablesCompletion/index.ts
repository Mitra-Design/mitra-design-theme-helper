import * as vscode from 'vscode';
import { getLessVariablesPath } from '../../utils/getPath';
import { findVariables } from '../../utils/findVariables';

import { getDesignToken } from '../../../es/tokens/getDesignToken';
import { mergeTokenMeta } from './mergeTokenMeta';

const provideCompletionItems = async (
    document: vscode.TextDocument,
    position: vscode.Position
) => {
    const line = document.lineAt(position);
    // const fileName = document.fileName;
    // const lessVariablesPath = await getLessVariablesPath();

    if (line.text.indexOf(':') === -1) {
        return;
    }

    // const variables = Object.assign({}, findVariables(lessVariablesPath));
    const tokens = getDesignToken();
    const meta = mergeTokenMeta(tokens, {});

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
    context: vscode.ExtensionContext
) {
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            'less',
            { provideCompletionItems },
            '@',
            ':',
            ' '
        )
    );
}
