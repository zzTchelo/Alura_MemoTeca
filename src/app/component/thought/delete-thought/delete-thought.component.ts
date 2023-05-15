import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent {

  thought : thought = {
    id : 0,
    conteudo : '',
    autoria : '',
    modelo : ''
  }

  constructor (
    private service : ThoughtService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() : void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.searchByID(parseInt(id!)).subscribe((thought) =>{
      this.thought = thought
    })
  }

  thoughtDelete(){
    if(this.thought.id){
      this.service.thoughtDelete(this.thought.id).subscribe(() =>{
        this.router.navigate(['/ListaPensamentos'])
      })
    }
  }

  cancel(){
    this.router.navigate(['/ListaPensamentos'])
  }
}
