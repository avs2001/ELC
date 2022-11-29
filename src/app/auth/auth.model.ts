export interface UserTenant {
    organizationId: number;
    tenantId?: number;
    tenantName: string;
}

export interface CommonInfo {
    availableLanguages: string[];
    currentLanguage: string;
    userInfo: UserInfo;
    permissions: string[];
    translations: { [key: string]: string };
}

export interface UserInfo {
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    phone: string,
    isActive: boolean,
    lastLoginTime: number,
    isPendingActivation: boolean,
    isLocked: boolean,
    userType: number,
    createdAt: number
}

export enum LoggedInCase {
    USER_LOGGED_IN,
    USER_NOT_LOGGED_IN
}