import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "NGO",
  clientId: "NGO",
});

export default keycloak;
