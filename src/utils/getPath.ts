import * as vscode from 'vscode';

export const getLessVariablesPath = async () => {
    const pathArr = await vscode.workspace.findFiles('**/global.less');

    return pathArr[0].path;
};
