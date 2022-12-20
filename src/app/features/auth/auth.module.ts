import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../store/auth/auth.effects';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountConfirmComponent } from './account-confirm/account-confirm.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountConfirmComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    EffectsModule.forFeature([AuthEffects]),
    MatIconModule,
    MatButtonModule
  ]
})
export class AuthModule { }
