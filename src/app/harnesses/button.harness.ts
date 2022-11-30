import { BaseHarnessFilters, HarnessPredicate } from '@angular/cdk/testing';
// @dynamic
import { ComponentHarness } from "@angular/cdk/testing";

interface ButtonHarnessFilters extends BaseHarnessFilters {
    /** Filters based on the text of the menu item. */
    text?: string | RegExp;
}

export class ButtonHarness extends ComponentHarness {

    static hostSelector = 'button';

    static with(options: ButtonHarnessFilters): HarnessPredicate<ButtonHarness> {
        return new HarnessPredicate(ButtonHarness, options)
            .addOption('text', options.text,
                (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text));
    }

    async click() {
        await (await this.host()).click();
    }

    /** Gets the text of the menu item. */
    async getText(): Promise<string> {
        const host = await this.host();
        return host.text();
    }
}
