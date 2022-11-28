export const environment = {
    apiUrl: 'https://api.diality.integration.kebormed.com',
    auth: {
        issuer: 'https://identity.diality.integration.kebormed.com/auth/realms/Main',
        redirectUri: 'http://localhost:4200',
        silentRefreshRedirectUri: 'http://localhost:4200/silent-refresh.html',
        clientId: 'frontend-client',
        requireHttps: false,
        scope: 'openid profile email offline_access',
        responseType: 'code',
        disableAtHashCheck: true,
        PERSONA_LIFESPAN: 15, // minutes
    }
}