import {Button} from '@mantine/core';
import {useKeycloak} from '@react-keycloak/web';
import {LocalP2PKeycloakTokenParsed} from '../../keycloak.ts';

const LogInButton = () => {
  const {keycloak} = useKeycloak();
  const tokenParsed = keycloak.tokenParsed as LocalP2PKeycloakTokenParsed | undefined;
  return (
    <>
      {
        !keycloak.authenticated && (
          <Button
            onClick={() => {
              keycloak.login();
            }}
          >
            Login
          </Button>

        )
      }
      {
        keycloak.authenticated && (
          <Button
            onClick={() => {
              keycloak.logout();
            }}
          >
            Logout ({tokenParsed?.username})
          </Button>
        )
      }
    </>
  );
}

export default LogInButton;