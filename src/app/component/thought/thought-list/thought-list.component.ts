import { thought } from './../thought';
import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';

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

  constructor(
    private service : ThoughtService
  ) { }

  ngOnInit(): void {
    this.service.thoughtList(this.page, this.filter).subscribe((thought) =>{
      this.thoughtList = thought
    })
  }

  loadMore() {
    this.service.thoughtList(++this.page, this.filter).subscribe((listaPensamentos) => {
      this.thoughtList.push(...listaPensamentos);
      if(this.thoughtList.length) {
        this.existsMoreThoughts = false
      }
    })
  }

  searchThoughts() {
    this.page = 1;
    this.existsMoreThoughts = true;
    this.service.thoughtList(this.page, this.filter).subscribe((thought) => {
      this.thoughtList = thought
    })
  }
}
