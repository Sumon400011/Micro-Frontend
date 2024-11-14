import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./remote/remote.module').then((m) => m.RemoteModule),
    },
];
