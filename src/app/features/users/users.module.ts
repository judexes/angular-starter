import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from '../../store/users/users.effects';
import {MatTableModule} from '@angular/material/table'


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    EffectsModule.forFeature([UsersEffects]),
    MatTableModule
  ]
})
export class UsersModule { }
