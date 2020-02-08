import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class LivrosService {

  private url:string = "http://assys.com.br/desenvolvimento/api/public/";

  constructor( private http: HttpClient) {

  }

  getLivros(){
    //return [cep,'Brasil', 'Cidade', 'Bairro'];
    return this.http.get(this.url+ 'livros');
  }

  getLivro(id){
    //return [cep,'Brasil', 'Cidade', 'Bairro'];
    return this.http.get(this.url + 'livro/'+ id);
  }
}
