import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NavigationActionTiming,
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './app.reducer';
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lessons', component: LessonsComponent }

  // { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }),
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PostActivation
    })
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    }
  ]
})
export class AppRoutingModule {}
