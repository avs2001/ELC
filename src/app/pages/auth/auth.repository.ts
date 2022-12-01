import { AuthService } from './auth.service';
import { IS_PERSONA } from './../../tokens';
import { OAuthService } from 'angular-oauth2-oidc';
import { createStore, withProps, select, createState, StoreDef, Store, getStore } from '@ngneat/elf';
import { CommonInfo, UserInfo, UserTenant } from "./auth.model";
import { USER_STORE } from 'src/app/tokens';
import { uuidv4 } from 'src/app/const';

export interface AuthProps {
    isLoggedIn: boolean;
    isPersona: boolean;
    tenants: UserTenant[];
    currentTenant: CommonInfo | null;
    availableLanguages: string[];
    currentLanguage: string;
    userInfo: UserInfo;
    permissions: string[];
    translations: { [key: string]: string } | null;
}

export function dummyAuthProps(): AuthProps {
    return {
        isLoggedIn: false,
        isPersona: true,
        tenants: [],
        currentTenant: {
            userInfo: {
                id: 1000,
                firstName: 'First Name',
                lastName: 'Last Name',
                username: 'Username',
                email: 'impersonate@test.com',
                phone: '123212321',
                isActive: true,
                lastLoginTime: 3123132132,
                isPendingActivation: null,
                isLocked: null,
                userType: null,
                createdAt: null
            }
        } as CommonInfo,
        availableLanguages: [],
        currentLanguage: 'gr',
        permissions: [],
        translations: null,
        userInfo: {
            id: 1000,
            firstName: 'First Name',
            lastName: 'Last Name',
            username: 'Username',
            email: 'impersonate@test.com',
            phone: '123212321',
            isActive: true,
            lastLoginTime: 3123132132,
            isPendingActivation: null,
            isLocked: null,
            userType: null,
            createdAt: null
        }
    }
}

export function createInitialAuthState(): AuthProps {
    return {
        isLoggedIn: false,
        isPersona: false,
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

const { state, config } = createState(
    withProps<AuthProps>(createInitialAuthState())
);

export class AuthRepository {
    userInfo$ = this.authStore.pipe(select((state) => state.userInfo));
    isLoggedIn$ = this.authStore.pipe(select((state) => state.isLoggedIn));
    tenants$ = this.authStore.pipe(select((state) => state.tenants));
    currentTenant$ = this.authStore.pipe(select((state) => state.currentTenant));
    isPersona$ = this.authStore.pipe(select((state) => state.isPersona));

    constructor(
        private authStore: Store<StoreDef<typeof state>>
    ) { }

    getRepository() {
        return this
    }

    update(authProps: any) {
        this.authStore.update((state) => ({
            ...state,
            authProps,
        }));
    }

    updateUserInfo(userInfo: AuthProps['userInfo']) {
        this.authStore.update((state) => ({
            ...state,
            userInfo,
        }));
    }

    updateIsLoggedIn(isLoggedIn: AuthProps['isLoggedIn']) {
        this.authStore.update((state) => ({
            ...state,
            isLoggedIn,
        }));
    }

    updateIsPersona(isPersona: AuthProps['isPersona']) {
        this.authStore.update((state) => ({
            ...state,
            isPersona,
        }));
    }

    updateUserTenants(tenants: AuthProps['tenants']) {
        this.authStore.update((state) => ({
            ...state,
            tenants,
        }));
    }

    updateCurrentTenant(currentTenant: AuthProps['currentTenant']) {
        this.authStore.update((state) => ({
            ...state,
            currentTenant,
        }));
    }

    reset() {
        this.authStore.update(() => (createInitialAuthState()));
    }
}

export const authStoreProvider = {
    provide: USER_STORE,
    useFactory(oAuthService: OAuthService) {

        // TODO: The logic here depends on how we are handling the persona case. Do we get a new token?

        let authStore: Store;
        let claims = oAuthService.getIdentityClaims();
        let name: string = `auth-${claims['email']}`
        authStore = getStore(name) ?
            getStore(name)
            :
            new Store({
                name: name,
                state,
                config,
            })

        if (authStore.state.isPersona) {
            name = `auth-persona-${uuidv4()}`;
            authStore = new Store({
                name: name,
                state: dummyAuthProps(),
                config,
            })
        }
        let currentAuthRepository = new AuthRepository(authStore)
        return currentAuthRepository;
    },
    deps: [OAuthService]
}

export const isPersonaProvider = {
    provide: IS_PERSONA,
    useFactory(authRepository: AuthRepository) {

    },
    deps: [AuthRepository]
}