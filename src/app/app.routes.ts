import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/shell-window/shell-window').then((m) => m.ShellWindow),
  },
];
