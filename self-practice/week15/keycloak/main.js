import keycloak from "./keycloak";

keycloak.init({ onLoad: "login-required" }).then(auth => {
  if (!auth) {
    keycloak.login();
  } else {
    console.log("Authenticated");
    console.log("Token:", keycloak.token);
    console.log("User ID:", keycloak.tokenParsed.preferred_username);
  }

  // token refresh
  setInterval(() => {
    keycloak.updateToken(30);
  }, 10000);
});
