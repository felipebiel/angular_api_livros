import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../servicos/livros.service';


@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  public livros:any;
  public exibir = true;
  public erro = false;
  public texto_erro:string = "Erro ao carregar a API.";

  constructor( private http: LivrosService) {
  }

  ngOnInit() {
    this.http.getLivros()
      .subscribe(data =>{
        //console.log(data);
        this.livros = data;
        this.exibir = false;
      },
      error => {
        console.error(error);
        this.exibir = false;
        this.erro = true;
      }
    );
    //
    //console.log(this.livros);
  }

}
