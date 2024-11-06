import vscode from "vscode";

export async function getLiveDocUsername() {
  return await showPersonalizedInputBox({
    ignoreFocusOut: true,
    placeHolder: "Username",
    title: "Live Docs Username"
  });
}

export async function getLiveDocPassword() {
  return await showPersonalizedInputBox({
    ignoreFocusOut: true,
    password: true,
    placeHolder: "Password",
    title: "Live Docs Password"
  })
}

async function showPersonalizedInputBox(args: vscode.InputBoxOptions) {
  return await vscode.window.showInputBox(args);
}