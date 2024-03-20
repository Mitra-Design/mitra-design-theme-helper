import * as vscode from 'vscode';
import fs from 'fs-extra';
import { WorkspaceConfigProperty } from './constants';

export const getDesignToken = async () => {
    const filepath = vscode.workspace.getConfiguration().get(WorkspaceConfigProperty) as string;
    const uri = await vscode.workspace.findFiles(filepath);

    if (!uri?.[0]) {
        return;
    }

    const tokenMeta = await fs.readJSON(uri[0].path);

    if (tokenMeta && tokenMeta.atom && tokenMeta.material) {
        return {
            ...tokenMeta.atom,
            ...tokenMeta.material
        };
    }
};
