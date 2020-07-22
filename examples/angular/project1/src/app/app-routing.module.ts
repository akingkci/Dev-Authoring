import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialTableExampleComponent } from './material-table-example/material-table-example.component';
import { MaterialFormExampleComponent } from './material-form-example/material-form-example.component';
import { NgBootstrapTableExampleComponent } from './ng-bootstrap-table-example/ng-bootstrap-table-example.component';
import { NgBootstrapFormComponent } from './ng-bootstrap-form/ng-bootstrap-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'material-table', component: MaterialTableExampleComponent },
  { path: 'material-form', component: MaterialFormExampleComponent },
  { path: 'ng-bootstrap-table', component: NgBootstrapTableExampleComponent },
  { path: 'ng-bootstrap-form', component: NgBootstrapFormComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
