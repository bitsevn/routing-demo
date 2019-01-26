import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LessonComponent } from './lesson.component';
import { LessonsComponent } from './lessons.component';

const lessonRoutes: Routes = [
  {
    path: 'lessons',
    component: LessonsComponent,
    children: [
      { path: 'lessons-all/:restOfPath', redirectTo: 'lesson/:restOfPath' },
      { path: 'lessons-all', redirectTo: 'lesson' },
      { path: 'lesson', children: [{ path: '**', component: LessonComponent }] }
    ]
  }
];

const lesaltRoutessonRoutes: Routes = [
  {
    path: 'lessons',
    component: LessonsComponent,
    children: [
      { path: ':lessonId', redirectTo: 'page/:lessonId/charts/0/view', pathMatch: 'full' },
      { path: ':lessonId/view', redirectTo: 'page/:lessonId/charts/0/view', pathMatch: 'full' },
      { path: ':lessonId/edit', redirectTo: 'page/:lessonId/charts/0/edit', pathMatch: 'full' },
      {
        path: ':lessonId/delete',
        redirectTo: 'page/:lessonId/charts/0/delete',
        pathMatch: 'full'
      },

      {
        path: ':lessonId/charts/:chartId',
        redirectTo: 'page/:lessonId/charts/:chartId/view'
      },
      {
        path: ':lessonId/charts/:chartId/view',
        redirectTo: 'page/:lessonId/charts/:chartId/view'
      },
      {
        path: ':lessonId/charts/:chartId/edit',
        redirectTo: 'page/:lessonId/charts/:chartId/edit'
      },
      {
        path: ':lessonId/charts/:chartId/delete',
        redirectTo: 'page/:lessonId/charts/:chartId/delete'
      },

      { path: 'page/:lessonId/charts/:chartId/:action', component: LessonComponent }
    ]
  }
];

@NgModule({
  declarations: [LessonsComponent, LessonComponent],
  exports: [RouterModule, LessonsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(lesaltRoutessonRoutes)]
})
export class LessonsModule {}
