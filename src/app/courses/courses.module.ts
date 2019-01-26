import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CourseOverviewComponent } from './course-overview.component';
import { CourseSpecsComponent } from './course-specs.component';
import { CourseComponent } from './course.component';
import { CourseGuard } from './course.guard';
import { CourseResolver } from './course.resolver';
import { CoursesComponent } from './courses.component';

const coursesRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: ':id',
        component: CourseComponent,
        children: [
          {
            path: 'overview',
            component: CourseOverviewComponent,
            canDeactivate: [CourseGuard],
            resolve: { course: CourseResolver }
          },
          { path: 'specs', component: CourseOverviewComponent, resolve: { course: CourseResolver } }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [CoursesComponent, CourseComponent, CourseOverviewComponent, CourseSpecsComponent],
  exports: [
    RouterModule,
    CoursesComponent,
    CourseComponent,
    CourseOverviewComponent,
    CourseSpecsComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(coursesRoutes)],
  providers: [CourseGuard, CourseResolver]
})
export class CoursesModule {}
