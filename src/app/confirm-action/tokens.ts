import {InjectionToken, TemplateRef} from "@angular/core";

export const CONFIRM_DIALOG_TPL = new InjectionToken<TemplateRef<any>>('dialog message template');
