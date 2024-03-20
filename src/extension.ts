// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'node:path';
import * as fs from 'node:fs';
import lessVariablesCompletion from './core/lessVariablesCompletion';
import lessVariablesHover from './core/lessVariablesHover';
import registerColorProvider from './core/colorProvider';
import registerCodelensProvider from './core/codelensProvider';
import registerCodelensActionCommand from './core/codelensProvider/registerCommand';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "mitra-design-theme-helper" is now active!');

	// const docs = fs.readFileSync(path.resolve(__dirname, '../es/interface/atom.ts')).toString();

	lessVariablesCompletion(context);
	lessVariablesHover(context);
	registerColorProvider(context);
	registerCodelensProvider(context);

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
