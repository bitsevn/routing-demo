import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { PresenterComponent } from './presenter/presenter.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonsComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    PresenterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AppStoreModule, CoursesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
