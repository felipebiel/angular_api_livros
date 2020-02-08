import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosService } from '../servicos/livros.service';
import { LivrosComponent } from './livros.component';
import { LivrosLerComponent } from './livros-ler/livros-ler.component';
import { routing } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    LivrosComponent,
    LivrosLerComponent
  ],
  providers: [LivrosService],
})
export class LivrosModule { }
