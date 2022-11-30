import { BaseHarnessFilters, ComponentHarness, HarnessPredicate } from "@angular/cdk/testing";

export class SwitchHarness extends ComponentHarness {
    static hostSelector = 'kbm-switch';

    private getInput = this.locatorFor('input');
    private getDisabledSlider = this.locatorForOptional('span.disabled');

    static with(options: BaseHarnessFilters): HarnessPredicate<SwitchHarness> {
        return new HarnessPredicate(SwitchHarness, options);
    }

    async click() {
        await (await this.host()).click();
    }

    async checked(): Promise<boolean> {
        return await (await this.getInput()).getProperty('checked');
    }

    async focused(): Promise<boolean> {
        return (await this.getInput()).isFocused();
    }

    async readonly(): Promise<boolean> {
        return !!(await this.getDisabledSlider());
    }
}