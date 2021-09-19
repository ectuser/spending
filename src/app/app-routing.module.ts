import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: (): Promise<unknown> => import('@home/home.module').then((module) => module.HomeModule) },
  { path: 'settings', loadChildren: (): Promise<unknown> => import('@settings/settings.module').then((module) => module.SettingsModule) },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
