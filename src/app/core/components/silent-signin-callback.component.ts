import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-silent-signin-callback",
  template: `<p>Processing silent signin callback</p>`,
  styles: [],
})
export class SilentSigninCallbackComponent implements OnInit {
  constructor(private readonly _router: Router, private readonly _authService: AuthService) {}

  async ngOnInit() {
    await this._authService.userManager.signinSilentCallback();
  }
}
