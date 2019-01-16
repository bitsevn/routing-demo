import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { LessonsComponent } from './lessons/lessons.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PresenterComponent } from './presenter/presenter.component';
import { CourseComponent } from './courses/course.component';
import { CourseOverviewComponent } from './courses/course-overview.component';
import { CourseSpecsComponent } from './courses/course-specs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    LessonsComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    PresenterComponent,
    CourseComponent,
    CourseOverviewComponent,
    CourseSpecsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
