import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormWithFileComponent } from './form-with-file/form-with-file.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: 'form-file',component: FormWithFileComponent},
  {path: 'table', component: TableComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
