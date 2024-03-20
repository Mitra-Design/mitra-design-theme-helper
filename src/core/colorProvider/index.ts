import * as vscode from 'vscode';
import tinycolor from "tinycolor2";
import { getDesignToken } from '../../../es/tokens/getDesignToken';
import { toUpperCamelCase } from '../../../es/utils/toCamelCase';

class ColorProvider implements vscode.DocumentColorProvider {
    provideDocumentColors(document: vscode.TextDocument): vscode.ProviderResult<vscode.ColorInformation[]> {
        const colors: vscode.ColorInformation[] = [];

        const regex = /@(color-([a-z0-9-])+)/g;
        let match;
        let text = document.getText();
        let start = 0;
        if (document.languageId === 'vue') {
            start = text.indexOf('<style ');
            text = text.slice(start);
        }

        const tokens = getDesignToken();

        while (match = regex.exec(text)) {
            const colorValue = match[1];
            const line = document.lineAt(document.positionAt(match.index + start).line);
            if (line.text.trim().startsWith('//')) {continue;}

            const colorRange = new vscode.Range(
                document.positionAt(match.index + start),
                document.positionAt(match.index + start + colorValue.length + 1)
            );

            const tokenValue = tokens[toUpperCamelCase(colorValue)];
            if (!tokenValue) {
                continue;
            }
            const { r, g, b, a } = tinycolor(tokenValue).toRgb();
            const color = new vscode.Color(r / 255, g / 255, b / 255, a);

            colors.push(new vscode.ColorInformation(colorRange, color));
        }

        return colors;
    }

    provideColorPresentations(color: vscode.Color,): vscode.ProviderResult<vscode.ColorPresentation[]> {
        const hex = tinycolor.fromRatio({
            r: color.red,
            g: color.green,
            b: color.blue,
            a: color.alpha
        }).toHex();
        return [new vscode.ColorPresentation(`#${hex}`)];
    }
}


export default function registerColorProvider(context: vscode.ExtensionContext) {
    const provider = new ColorProvider();
    const disposable = vscode.languages.registerColorProvider(['less', 'vue'], provider);

    context.subscriptions.push(disposable);
}
