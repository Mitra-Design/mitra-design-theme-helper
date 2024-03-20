import * as vscode from 'vscode';

export default function registerCodelensActionCommand(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('mitra-design-theme-helper.codelensAction', (alias, value, fileName, range) => {
        const editor = vscode.window.activeTextEditor;
        editor?.edit(editBuilder => {
            editBuilder.replace(range, alias);
        });
    });

    context.subscriptions.push(disposable);
}
