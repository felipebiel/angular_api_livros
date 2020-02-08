import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LivrosComponent } from './livros/livros.component';
import { LivrosLerComponent } from './livros/livros-ler/livros-ler.component';

const APP_ROUTES: Routes = [
    { path: '', component: LivrosComponent },
    { path: 'livro/:id', component: LivrosLerComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);