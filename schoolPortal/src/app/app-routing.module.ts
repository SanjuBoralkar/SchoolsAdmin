import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './modules/general/admin/admin.module';
import { TeacherModule } from './modules/general/teacher/teacher.module';
import { StudentModule } from './modules/general/student/student.module';
import { SigninModule } from './modules/general/signin/signin.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './modules/general/signin/signin/signin.component';


const routes: Routes = [
  
  { path: '',
   component:SigninComponent
  },
  {
    path: 'student',
    loadChildren: () => import('./modules/general/student/student.module')
      .then(mod => mod.StudentModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./modules/general/teacher/teacher.module')
      .then(mod => mod.TeacherModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/general/admin/admin.module')
      .then(mod => mod.AdminModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/signin/signin.module')
      .then(mod => mod.SigninModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}