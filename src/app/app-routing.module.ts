import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawsComponent } from './components/laws/laws.component';

const routes: Routes = [
  {  path: '', component: LawsComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
