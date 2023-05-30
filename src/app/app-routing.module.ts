import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormWithFileComponent } from './form-with-file/form-with-file.component';

const routes: Routes = [
  {path: 'form-file',component: FormWithFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
