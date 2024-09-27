import * as vscode from 'vscode';
import { DesignTokenMeta } from "../../types/token";
import { toUpperCamelCase } from '../../utils/toCamelCase';
import { valueNeedAddPx } from '../../utils/valueNeedAddPx';

export default function lessVariablesHint(context: vscode.ExtensionContext, tokens: DesignTokenMeta) {
    const inlayHintsProvider: vscode.InlayHintsProvider = {
        provideInlayHints(document) {
            const inlayHints: vscode.InlayHint[] = [];

            let text = document.getText();
            let start = 0;

            if (document.languageId === 'vue') {
                start = text.indexOf('<style ');
                text = text.slice(start);
            }

            // 简单正则匹配参数赋值
            const regEx = /@[^\s;]+/g;
            let match;
            while ((match = regEx.exec(text))) {
                const key = toUpperCamelCase(match[0]?.replace('@', ''));

                if (key.startsWith('color')) {
                    continue;
                }

                let tokenValue  = tokens[key];

                if (!tokenValue?.default) {
                    continue;
                }

                const endPos = document.positionAt(match.index + match[0].length + start);
                const need = valueNeedAddPx(match[0]);
                const hintContent = `${tokens[key].default}${need ? 'px' : ''}`;

                // 创建 Inlay Hint
                const inlayHint = new vscode.InlayHint(
                    new vscode.Position(endPos.line, endPos.character),
                    ` ← ${hintContent}`
                );
                inlayHints.push(inlayHint);
            }

            return inlayHints;
        }
    };

    context.subscriptions.push(
        vscode.languages.registerInlayHintsProvider(
            ['less', 'vue'],
            inlayHintsProvider,
        ),
    );
}
