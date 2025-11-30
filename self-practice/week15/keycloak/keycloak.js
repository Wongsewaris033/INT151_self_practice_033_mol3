import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://your-keycloak.com/auth",
  realm: "myrealm",
  clientId: "myclient"
});

export default keycloak;
