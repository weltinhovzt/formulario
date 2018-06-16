import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputModel } from './Formularios';
import { BotoesModel } from './Formularios/Botoes/botoes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  teste: InputModel[] = [{
    formControlName: "nome",
    formControl: this.formBuilder.control('')
  }]

  buttons: BotoesModel[] = [{
    nome: "Salvar",
    funcao: this.salvar
  },
  {
    nome: "Editar",
    funcao: this.editar
  },
  {
    nome: "Atualizar",
    funcao: this.atualizar
  }

  ]

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

  }

  salvar() {
    console.log("salvar")
  }

  editar() {
    console.log("editar")
  }

  atualizar() {
    console.log("atualizar")
  }


}
