import { createStore, withProps, select } from '@ngneat/elf';
import { CommonInfo, UserInfo, UserTenant } from "./auth.model";

interface AuthProps {
    isLoggedIn: boolean;
    tenants: UserTenant[];
    currentTenant: CommonInfo | null;
    availableLanguages: string[];
    currentLanguage: string;
    userInfo: UserInfo;
    permissions: string[];
    translations: { [key: string]: string } | null;
}

export function createInitialAuthState(): AuthProps {
    return {
        isLoggedIn: false,
        tenants: [],
        currentTenant: null,
        availableLanguages: [],
        currentLanguage: 'en',
        permissions: [],
        translations: null,
        userInfo: {
            id: null,
            firstName: null,
            lastName: null,
            username: null,
            email: null,
            phone: null,
            isActive: null,
            lastLoginTime: null,
            isPendingActivation: null,
            isLocked: null,
            userType: null,
            createdAt: null
        }
    };
}

const authStore = createStore(
    { name: 'auth' },
    withProps<AuthProps>(createInitialAuthState())
);

export class AuthRepository {
    userInfo$ = authStore.pipe(select((state) => state.userInfo));
    isLoggedIn$ = authStore.pipe(select((state) => state.isLoggedIn));
    tenants$ = authStore.pipe(select((state) => state.tenants));
    currentTenant$ = authStore.pipe(select((state) => state.currentTenant));

    update(authProps: any) {
        authStore.update((state) => ({
            ...state,
            authProps,
        }));
    }

    updateUserInfo(userInfo: AuthProps['userInfo']) {
        console.log(authStore)
        authStore.update((state) => ({
            ...state,
            userInfo,
        }));
    }

    updateIsLoggedIn(isLoggedIn: AuthProps['isLoggedIn']) {
        authStore.update((state) => ({
            ...state,
            isLoggedIn,
        }));
    }

    updateUserTenants(tenants: AuthProps['tenants']) {
        authStore.update((state) => ({
            ...state,
            tenants,
        }));
    }

    updateCurrentTenant(currentTenant: AuthProps['currentTenant']) {
        authStore.update((state) => ({
            ...state,
            currentTenant,
        }));
    }
    
    reset() {
        authStore.update(() => (createInitialAuthState()));
    }
}