import { NgModule } from '@angular/core';
import { AuthGuard } from './services';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
  },
  {
    path: 'content',
    loadChildren: () => import('./pages/content/content.module').then( m => m.ContentPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'member',
    loadChildren: () => import('./pages/member/member.module').then( m => m.MemberPageModule)
  },
  {
    path: 'data-master',
    loadChildren: () => import('./pages/data-master/data-master.module').then( m => m.DataMasterPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./pages/contract/contract.module').then( m => m.ContractPageModule)
  },
  {
    path: 'payouts',
    loadChildren: () => import('./pages/payouts/payouts.module').then( m => m.PayoutsPageModule)
  },
  {
    path: 'stream-report',
    loadChildren: () => import('./pages/stream-report/stream-report.module').then( m => m.StreamReportPageModule)
  },
  {
    path: 'streams',
    loadChildren: () => import('./pages/streams/streams.module').then( m => m.StreamsPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
