﻿import { topmost } from "ui/frame";
import { Page } from "ui/page";
import { Button } from "ui/button";
import { TextField } from "ui/text-field";
import { Label } from "ui/label";
import { View, Color } from "ui/core/view";

export const STRING = "string";
export const PROMPT = "Prompt";
export const CONFIRM = "Confirm";
export const ALERT = "Alert";
export const LOGIN = "Login";
export const OK = "OK";
export const CANCEL = "Cancel";

/**
 * Defines the input type for prompt dialog.
 */
export module inputType {
    /**
     * Plain text input type.
     */
    export const text: string = "text";

    /**
     * Password input type.
     */
    export const password: string = "password";
}

export function getCurrentPage(): Page {
    let topmostFrame = topmost();
    if (topmostFrame) {
        return topmostFrame.currentPage;
    }

    return undefined;
}

function applySelectors(view: View) {
    let currentPage = getCurrentPage();
    if (currentPage) {
        let styleScope = currentPage._getStyleScope();
        if (styleScope) {
            styleScope.applySelectors(view);
        }
    }
}

let buttonColor: Color;
// NOTE: This will fail if app.css is changed.
export function getButtonColor(): Color {
    if (!buttonColor) {
        let btn = new Button();
        applySelectors(btn);
        buttonColor = btn.color;
        btn.onUnloaded();
    }

    return buttonColor;
}

let buttonBackgroundColor: Color;
// NOTE: This will fail if app.css is changed.
export function getButtonBackgroundColor(): Color {
    if (!buttonBackgroundColor) {
        let btn = new Button();
        applySelectors(btn);
        buttonBackgroundColor = btn.backgroundColor;
        btn.onUnloaded();
    }

    return buttonBackgroundColor;
}

let textFieldColor: Color;
export function getTextFieldColor(): Color {
    if (!textFieldColor) {
        let tf = new TextField();
        applySelectors(tf);
        textFieldColor = tf.color;
        tf.onUnloaded();
    }

    return textFieldColor;
}

let labelColor: Color;
// NOTE: This will fail if app.css is changed.
export function getLabelColor(): Color {
    if (!labelColor) {
        let lbl = new Label();
        applySelectors(lbl);
        labelColor = lbl.color;
        lbl.onUnloaded();
    }

    return labelColor;
}

export function isDialogOptions(arg): boolean {
    return arg && (arg.message || arg.title);
}