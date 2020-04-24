import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesListComponent } from './pages/companies-list/companies-list.component';
import { CompaniesDetailsComponent } from './pages/companies-details/companies-details.component';


const routes: Routes = [
  {path: '', redirectTo: '/companies-page', pathMatch: 'full'},
  {path: 'companies-page', component: CompaniesListComponent},
  {path: ':id', component: CompaniesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
