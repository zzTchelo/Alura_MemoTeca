import { Component, OnInit } from '@angular/core';
import { thought } from '../thought';
import { HttpClient } from '@angular/common/http';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {

  thoughts : thought = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service : ThoughtService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  CreateThought(){
    this.service.thoughtCreate(this.thoughts).subscribe(() => {
      this.router.navigate(['/ListaPensamentos'])
    })
  }

  cancelThought(){
    this.router.navigate(['/ListaPensamentos'])
  }
}
