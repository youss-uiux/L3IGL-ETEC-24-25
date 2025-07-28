import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {
        path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'create-task', loadComponent: () => import('./pages/create-task/create-task.component').then(m => m.CreateTaskComponent)
    },
    {
        path: 'task-details', loadComponent: () => import('./pages/details-task/details-task.component').then(m => m.DetailsTaskComponent)
    }
];
