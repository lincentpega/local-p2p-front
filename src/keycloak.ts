import Keycloak, {KeycloakTokenParsed} from 'keycloak-js';

export const keycloak = new Keycloak({
    url: 'http://localhost:8091',
    realm: 'local-p2p',
    clientId: 'frontend'
})

export interface LocalP2PKeycloakTokenParsed extends KeycloakTokenParsed {
    role: ('admin' | 'user')[];
    username: string;
}

export default keycloak;