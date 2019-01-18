import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CourseOverviewComponent } from './course-overview.component';
import { CourseSpecsComponent } from './course-specs.component';
import { CourseComponent } from './course.component';
import { CourseGuard } from './course.guard';
import { CoursesComponent } from './courses.component';

const coursesRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      { path: '', component: CourseComponent },
      { path: ':id', component: CourseOverviewComponent, canDeactivate: [CourseGuard] },
      { path: ':id/specs', component: CourseOverviewComponent }
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
  providers: [CourseGuard]
})
export class CoursesModule {}
