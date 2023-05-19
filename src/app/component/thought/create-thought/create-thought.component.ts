import { Component, OnInit } from '@angular/core';
import { thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      conteudo : ['Digite seus pensamentos...'],
      autoria : ['By autor'],
      modelo : ['modelo1']
    })
  }

  CreateThought(){
    this.service.thoughtCreate(this.form.value).subscribe(() => {
      this.router.navigate(['/ListaPensamentos'])
    })
  }

  cancelThought(){
    this.router.navigate(['/ListaPensamentos'])
  }
}
