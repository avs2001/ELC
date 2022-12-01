import { InjectionToken } from "@angular/core";
import { Store } from "@ngneat/elf";

export const DATE_NOW = new InjectionToken<boolean>('DATE_NOW');

export const USER_STORE = new InjectionToken<Store>('USER_STORE');
export const IS_PERSONA = new InjectionToken<boolean>('IS_PERSONA');
