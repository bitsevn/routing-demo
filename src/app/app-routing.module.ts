import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseOverviewComponent } from './courses/course-overview.component';
import { CourseSpecsComponent } from './courses/course-specs.component';
import { CourseComponent } from './courses/course.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      { path: ':id', component: CourseOverviewComponent },
      { path: ':id/specs', component: CourseOverviewComponent }
    ]
  },
  { path: 'lessons', component: LessonsComponent }

  // { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

// localhost:3000/product-details/3/overview
// localhost:3000/product-details/3/specs

const childRoutes: Routes = [
  { path: 'courses', component: CoursesComponent },
  {
    path: 'courses/:id',
    component: CourseComponent,
    children: [
      { path: '', component: CourseOverviewComponent },
      { path: 'specs', component: CourseSpecsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
