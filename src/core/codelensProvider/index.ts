import * as vscode from 'vscode';
import TipCodeLens from './tipCodelens';
import { toKebabCase } from '../../utils/toKebabCase';
import { FilterColorCompletionItems, FilterPropCompletionItems } from '../../utils/constants';
import type { DesignTokenMeta } from '../../types/token';

class CodelensProvider implements vscode.CodeLensProvider {
    private codeLenses: vscode.CodeLens[] = [];
    private regex: RegExp;
    private tokens: DesignTokenMeta = {};
    private tokensMap: any = {};

    constructor(tokens: DesignTokenMeta) {
        this.regex = /(#[a-zA-Z0-9]{3,6})/g;
        this.tokens = tokens;

        for (const key in this.tokens) {
            if (Object.prototype.hasOwnProperty.call(this.tokens, key)) {
                let tokenValue = this.tokens[key].default;
                if (typeof tokenValue !== 'string') {
                    continue;
                }

                tokenValue = tokenValue.toLowerCase();

                const varName = toKebabCase(key);
                const lessVarName = `@${varName}`;

                if (
                    FilterColorCompletionItems.some(item => varName.startsWith(item)) ||
                    FilterPropCompletionItems.includes(varName)
                ) {
                    continue;
                }

                if (!this.tokensMap[tokenValue]) {
                    this.tokensMap[tokenValue] = [lessVarName];
                } else {
                    this.tokensMap[tokenValue].push(lessVarName);
                }
            }
        }
    }

    public provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {
        this.codeLenses = [];
        let match;
        const regex = new RegExp(this.regex);
        let text = document.getText();
        let start = 0;
        if (document.languageId === 'vue') {
            start = text.indexOf('<style ');
            text = text.slice(start);
        }

        while ((match = regex.exec(text)) !== null ) {
            const matched = match[1].toLowerCase();
            const line = document.lineAt(document.positionAt(match.index + start).line);
            const indexOf = line.text.toLowerCase().indexOf(matched);
            const position = new vscode.Position(line.lineNumber, indexOf);
            const range = document.getWordRangeAtPosition(position, this.regex);

            const token = this.tokensMap[matched];
            if (range && token) {
                this.codeLenses.push(
                    ...token.map(t => new TipCodeLens(document.fileName, range, t, match[1]))
                );
            }
        }
        return this.codeLenses;
    }

    public resolveCodeLens(codeLens: vscode.CodeLens, token: vscode.CancellationToken) {
        return null;
    }
}

export default function registerCodelensProvider(context: vscode.ExtensionContext, token: DesignTokenMeta) {
    const provider = new CodelensProvider(token);
    const disposable = vscode.languages.registerCodeLensProvider(['less', 'vue'], provider);

    context.subscriptions.push(disposable);
}

