import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/rules',
    pathMatch: 'full',
  },
  {
    path: 'rules',
    loadChildren: () => import('./pages/rules/rules.module').then(m => m.RulesModule),
  },
  {
    path: '**',
    redirectTo: '/rules',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
