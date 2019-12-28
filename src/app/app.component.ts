import { Component } from "@angular/core";
import { AuthConfig, OAuthService, OAuthErrorEvent } from "angular-oauth2-oidc";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SignatureValidationHandler } from "./signature-validation-handler";

/* A private proxy server is required b/c ADFS and Azure AD do not support CORS */
export const PRIVATE_PROXY_SERVER: string = "localhost:4200";
export const TENANT_GUID: string = "1b714369-df05-4aa1-abc6-cee6fa19a23a";

export const authConfig: AuthConfig = {
  issuer: "https://login.microsoftonline.com/" + TENANT_GUID + "/v2.0",
  //redirectUri: window.location.origin + "/oidc-azure",
  redirectUri: window.location.origin,
  requestAccessToken: true,
  logoutUrl: "http://localhost:4200",
  showDebugInformation: true,
  clientId: "ec3be22e-cde0-4779-b8b7-7b9b89d33c54",
  strictDiscoveryDocumentValidation: false
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "CabinetAngular";
  raw = "";
  http: any;
  constructor(
    private httpClient: HttpClient,
    private oauthService: OAuthService
  ) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new SignatureValidationHandler();

    this.oauthService.loadDiscoveryDocument().then(doc => {
      this.oauthService.tryLogin({
        onTokenReceived: context => {
          console.debug("logged in");
          console.info("Accesstoken: " + this.oauthService.getAccessToken());
          console.info("Id TOken: " + this.oauthService.getIdToken());
        }
      });
    });

    this.oauthService.responseType = "id_token token";
    this.oauthService.scope =
      "openid email profile api://c39e1d04-10f1-4c56-985e-b9317d055e95/access_as_user";

    this.oauthService.loginUrl =
      "https://login.microsoftonline.com/" +
      TENANT_GUID +
      "/oauth2/v2.0/authorize";

    this.oauthService.events.subscribe(event => {
      if (event instanceof OAuthErrorEvent) {
        console.error(event);
      } else {
        console.warn(event);
      }
    });
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims["name"];
  }

  get_private() {
    var headers = new HttpHeaders({
      Authorization: this.oauthService.getIdToken()
    });
    this.httpClient
      .get(
        "http://" +
          PRIVATE_PROXY_SERVER +
          "/angular2azure/private?tenant=" +
          TENANT_GUID,
        { headers: headers }
      )
      .subscribe(result => {
        console.log(result);
        this.raw = JSON.stringify(result);
      });
  }
  message: string;

  public getMessage() {
    var test = this.oauthService.getAccessToken();
    var headers = new HttpHeaders({
      Authorization: `Bearer  ${test}`
    });
    this.httpClient
      .get(
        "https://localhost:44393/api/values",
        // ?tenant=" + TENANT_GUID
        {
          headers: headers,
          responseType: "text"
        }
      )

      .subscribe(r => {
        this.message = r;

        console.log("message: ", this.message);
      });
  }
}
