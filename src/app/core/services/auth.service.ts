import { Injectable } from '@angular/core';
import {Log, User, UserManager} from 'oidc-client-ts';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userManager: UserManager;

  constructor() {
    const settings = {
      authority: environment.stsAuthority,
      client_id: environment.clientId,
      redirect_uri: `${environment.clientRoot}signin-callback`,
      silent_redirect_uri: `${environment.clientRoot}silent-callback.html`,
      post_logout_redirect_uri: `${environment.clientRoot}`,
      response_type: 'code',
      scope: environment.clientScope,
      automaticSilentRenew: true
    };
    this.userManager = new UserManager(settings);

    //Comment the following 2 lines to toggle package logs
    Log.setLogger(console);
    Log.setLevel(Log.DEBUG);
  }

  public getUser(): Promise<User> {
    return this.userManager.getUser();
  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public renewToken(): Promise<User> {
    return this.userManager.signinSilent();
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }
}
