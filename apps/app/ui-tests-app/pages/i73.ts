﻿import * as pages from "ui/page";
import * as button from "ui/button";
import * as stackModule from "ui/layouts/stack-layout";

export function createPage() {

    var stack = new stackModule.StackLayout();

    var btn = new button.Button();
    btn.text = "Alert";
    btn.on(button.Button.tapEvent, function () {
        alert("Alert is global");
    });

    stack.addChild(btn);

    var page = new pages.Page();
    page.content = stack;
    return page;
}
