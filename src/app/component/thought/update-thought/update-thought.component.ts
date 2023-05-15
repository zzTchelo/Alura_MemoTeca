import { Component } from '@angular/core';
import { thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-thought',
  templateUrl: './update-thought.component.html',
  styleUrls: ['./update-thought.component.css']
})
export class UpdateThoughtComponent {

  thoughts : thought = {
    id : 0,
    conteudo : '',
    autoria : '',
    modelo : ''
  }

  constructor(
    private service : ThoughtService,
    private router : Router,
    private route : ActivatedRoute
  ){ }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.service.searchByID(parseInt(id!)).subscribe((thought) =>{
      this.thoughts = thought
    })
  }

  UpdateThought(){

  }

  cancelThought(){

  }

}
