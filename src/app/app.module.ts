import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//import { LivrosComponent } from './livros/livros.component';
//import { LivrosService } from './servicos/livros.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { LivrosLerComponent } from './livros/livros-ler/livros-ler.component';
import { routing } from './app.routing';
import { LivrosModule } from './livros/livros.module';

@NgModule({
  declarations: [
    AppComponent,
    /*LivrosComponent,
    LivrosLerComponent*/
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LivrosModule,
    routing
  ],
  //providers: [LivrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
