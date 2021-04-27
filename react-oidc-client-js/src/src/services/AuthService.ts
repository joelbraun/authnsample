import { Log, User, UserManager } from 'oidc-client';

export class AuthService {
  public userManager: UserManager;

 
  constructor() {
    const settings = {
      authority: 'https://signin.mindbodyonline.com',
      redirect_uri: 'https://localhost:3000/signin-callback.html',
      silent_redirect_uri: 'https://localhost:3000/silent-renew.html',
      response_type: 'code',
      client_id: '2897f3c3-5572-4005-bc34-71e07fc472b5',
      scope: 'openid profile email Platform.Accounts.Api.Read', 

    };
    
    this.userManager = new UserManager(settings);
    Log.logger = console;
    Log.level = Log.INFO;
  }

  public getUser(): Promise<User | null> {
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
