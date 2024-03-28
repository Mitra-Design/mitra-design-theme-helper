// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import lessVariablesCompletion from './core/lessVariablesCompletion';
import lessVariablesHover from './core/lessVariablesHover';
import registerColorProvider from './core/colorProvider';
import registerCodelensProvider from './core/codelensProvider';
import registerCodelensActionCommand from './core/codelensProvider/registerCommand';
import { getDesignToken } from './utils/getDesignToken';
import { isMitraDesign } from './utils/isMitraDesign';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
    const isMt = await isMitraDesign();
    const tokens = await getDesignToken(isMt);

    if (!tokens) {
        vscode.window.showErrorMessage('mitra-design-theme-helper ERROR: Token path not found!');
        return;
    }

    vscode.window.showInformationMessage('mitra-design-theme-helper: READY!');

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "mitra-design-theme-helper" is now active!');


	lessVariablesCompletion(context, tokens);
	lessVariablesHover(context, tokens);
	registerColorProvider(context, tokens);
	registerCodelensProvider(context, tokens);

    registerCodelensActionCommand(context);


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('mitra-design-theme-helper.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello VSCode!!!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
