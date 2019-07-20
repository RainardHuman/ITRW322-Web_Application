import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver} from './services/user.resolver';
import { AuthGuard} from './services/auth/auth.guard';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: SignInComponent, canActivate: [AuthGuard] },
  { path: 'register', component: SignUpComponent, canActivate: [AuthGuard] },
  { path: 'user', component: HomeComponent,  resolve: { data: UserResolver}},
  { path: 'profile', component: ProfileComponent,  resolve: { data: UserResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
