import { UserInfo, UserTenant } from "./auth.model";

export interface AuthState {
    isLoggedIn: boolean;
    tenants: UserTenant[];
    currentTenant: UserTenant;
    availableLanguages: string[];
    currentLanguage: string;
    userInfo: UserInfo;
    permissions: string[];
    translations: { [key: string]: string };
}