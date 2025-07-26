import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'home',
        loadComponent:()=>import('./Pages/home-page/home-page.component').then(m => m.HomePageComponent),
    },

    {
        path: 'contact',
        loadComponent:()=>import('./Pages/contact-page/contact-page.component').then(m => m.ContactPageComponent),
    },
];
