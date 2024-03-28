import * as vscode from 'vscode';
import fs from 'fs-extra';
import { WorkspaceConfigProperty, OnlyUsedByMitraDesign } from './constants';

export const getDesignToken = async (isMt: boolean) => {
    const filepath = vscode.workspace.getConfiguration().get(WorkspaceConfigProperty) as string;
    const uri = await vscode.workspace.findFiles(filepath);

    if (!uri?.[0]) {
        return;
    }

    try {
        const tokenMeta = await fs.readJSON(uri[0].fsPath);

        if (tokenMeta && tokenMeta.atom && tokenMeta.material) {
            const obj = {
                ...tokenMeta.atom,
                ...tokenMeta.material
            };

            const newObj = {};

            Object.keys(obj).forEach((key) => {
                // 当前 token 只在组件库中使用
                if (OnlyUsedByMitraDesign.some(prop => key.startsWith(prop))) {
                    if (isMt) {
                        newObj[key] = obj[key];
                    }
                    return;
                }

                newObj[key] = obj[key];
            });

            return newObj;
        }
    } catch (error) {
        vscode.window.showErrorMessage(uri[0].fsPath);
    }
};
