import * as vscode from 'vscode';
import { getLiveDocUsername, getLiveDocPassword } from "@/util/inputUtils"

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('live-docs.connect', async () => {
    const username: string | undefined = await getLiveDocUsername();
    const password: string | undefined = await getLiveDocPassword();
    console.log(password);
    console.log(username);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }
