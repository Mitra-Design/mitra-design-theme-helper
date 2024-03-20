import * as vscode from 'vscode';

export default class TipCodeLens extends vscode.CodeLens {
  constructor(
    fileName: string,
    range: vscode.Range,
    alias: string,
    value: string
  ) {
    super(range, {
      arguments: [alias, value, fileName, range],
      command: "mitra-design-theme-helper.codelensAction",
      title: `${value} replaced by ${alias}`
    });
  }
}
