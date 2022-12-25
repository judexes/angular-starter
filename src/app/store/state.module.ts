import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromUsers from './users';
import * as fromAuth from './auth';
import { AppEffects } from './app/app.effects';
import * as fromApp from './app';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.reducer, { metaReducers: fromUsers.metaReducers }),

    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer, { metaReducers: fromAuth.metaReducers }),

    StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducer, { metaReducers: fromApp.metaReducers }),
    
    EffectsModule.forFeature([AppEffects]),
        
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ]
})
export class StateModule { }
