import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'remote',
        loadChildren: () => import('remoteApp/RemoteModule').then((m) => {
            console.log("m", m);
            return m.RemoteModule;
          }),
    },
];
