import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LivrosService } from '../../servicos/livros.service';

@Component({
  selector: 'app-livros-ler',
  templateUrl: './livros-ler.component.html',
  styleUrls: ['./livros-ler.component.css']
})
export class LivrosLerComponent implements OnInit {

  public inscricao: Subscription;
  public id:number;
  public exibir = true;
  public livro : any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: LivrosService,
  ) {
   
   }

  ngOnInit() {
    /* pega o parametro de id */
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.getLivro(this.id);
      }
    );

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  //pega o livro na api
  getLivro(id){
    this.http.getLivro(id)
      .subscribe(data =>{
        this.livro = data;
        this.exibir = false;
        //redireciona para a listagem de livros se achar o livro com aquele id
        if(this.livro == null){
          this.router.navigate([""]);
        }
      },
      error => {
        console.error(error);
      }
    );
  }

}
