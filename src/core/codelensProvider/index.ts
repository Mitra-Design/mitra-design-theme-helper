import * as vscode from 'vscode';
import TipCodeLens from './tipCodelens';
import { getDesignToken } from '../../../es/tokens/getDesignToken';
import { toKebabCase } from '../../../es/utils/toKebabCase';
import { FilterColorCompletionItems, FilterPropCompletionItems } from '../../utils/constants';

class CodelensProvider implements vscode.CodeLensProvider {
    private codeLenses: vscode.CodeLens[] = [];
    private regex: RegExp;
    private tokens: any = {};

    constructor() {
        this.regex = /(#[a-zA-Z0-9]{3,6})/g;

        const tokens = getDesignToken();

        for (const key in tokens) {
            if (Object.prototype.hasOwnProperty.call(tokens, key)) {
                let tokenValue = tokens[key];
                if (typeof tokenValue !== 'string') {
                    continue;
                }

                tokenValue = tokenValue.toLowerCase();

                const varName = toKebabCase(key);
                if (FilterColorCompletionItems.some(item => varName.startsWith(item))
                || FilterPropCompletionItems.includes(varName)
                ) {
                    continue;
                }
                const lessVarName = `@${varName}`;
                if (!this.tokens[tokenValue]) {
                    this.tokens[tokenValue] = [lessVarName];
                } else {
                    this.tokens[tokenValue].push(lessVarName);
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

            const token = this.tokens[matched];
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

export default function registerCodelensProvider(context: vscode.ExtensionContext) {
    const provider = new CodelensProvider();
    const disposable = vscode.languages.registerCodeLensProvider(['less', 'vue'], provider);

    context.subscriptions.push(disposable);
}

