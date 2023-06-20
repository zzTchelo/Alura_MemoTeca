import { Component, OnInit } from '@angular/core';
import { thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {

  form! : FormGroup;

  constructor(
    private service : ThoughtService,
    private router : Router,
    private formbuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      conteudo : ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria : ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo : ['modelo1'],
      favorito: [false]
    })
  }

  CreateThought(){
    console.log(this.form.valid)
    if (this.form.valid){
      this.service.thoughtCreate(this.form.value).subscribe(() => {
        this.router.navigate(['/ListaPensamentos'])
      })
    }
  }

  cancelThought(){
    this.router.navigate(['/ListaPensamentos'])
  }

  enableButton(): string {
    if(this.form.valid){
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
