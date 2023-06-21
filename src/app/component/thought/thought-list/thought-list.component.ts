import { thought } from './../thought';
import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thought-list',
  templateUrl: './thought-list.component.html',
  styleUrls: ['./thought-list.component.css']
})
export class ThoughtListComponent implements OnInit{

  thoughtList : thought[] = [];
  page : number = 1;
  existsMoreThoughts : boolean = true;
  filter : string = '';
  favorite : boolean = false;
  favoriteList : thought [] = []
  title : string = 'Todos os Pensamentos';

  constructor(
    private service : ThoughtService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.service.thoughtList(this.page, this.filter, this.favorite).subscribe((thought) =>{
      this.thoughtList = thought
    })
  }

  loadMore() {
    this.service.thoughtList(++this.page, this.filter, this.favorite).subscribe((listaPensamentos) => {
      this.thoughtList.push(...listaPensamentos);
      if(this.thoughtList.length) {
        this.existsMoreThoughts = false
      }
    })
  }

  searchThoughts() {
    this.page = 1;
    this.existsMoreThoughts = true;
    this.service.thoughtList(this.page, this.filter, this.favorite).subscribe((thought) => {
      this.thoughtList = thought
    })
  }

  favoriteListMethod() {
    this.title = 'Meus Favoritos'
    this.favorite = true;
    this.page = 1;
    this.existsMoreThoughts = true;
    this.service.thoughtList(this.page, this.filter, this.favorite).subscribe(listaFavoritos =>{
      this.thoughtList = listaFavoritos
      this.favoriteList = listaFavoritos
    })
  }

  reloadComponent() {
    this.favorite = false;
    this.page = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }
}
