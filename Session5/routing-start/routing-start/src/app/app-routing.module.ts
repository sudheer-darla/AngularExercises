import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersComponent } from './servers/servers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { AuthGuard, AuthChildGuard } from './guards/auth.guard.service';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';

const myRoutes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  }, // localhost:4200/users
  {
    path: 'servers',
    component: ServersComponent,
    // canActivate: [AuthGuard],
    canActivateChild: [AuthChildGuard],
    children: [
      { path: ':id', component: ServerComponent },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  {
    path: 'something',
    component: NotFoundComponent,
    data: { message: 'Static data' },
  },
  { path: 'somethingelse', redirectTo: '/something' },
  // { path: '', redirectTo: '/something', pathMatch: 'full' },
  { path: '**', redirectTo: '/something' },
];

@NgModule({
  // imports: [RouterModule.forRoot(myRoutes, { useHash: true })],
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
