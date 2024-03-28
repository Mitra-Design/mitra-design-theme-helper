import * as vscode from 'vscode';
import fs from 'fs-extra';

export const isMitraDesign = async () => {
    const uri = await vscode.workspace.findFiles('package.json');

    if (uri?.[0]?.fsPath) {
        const pkg = await fs.readJSON(uri[0].fsPath);
        if (pkg.name.includes('mitra-design')) {
            return true;
        }
    }

    return false;
};
