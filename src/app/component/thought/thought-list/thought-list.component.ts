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

  constructor(
    private service : ThoughtService
  ) { }

  ngOnInit(): void {
    this.service.thoughtList().subscribe((thought) =>{
      this.thoughtList = thought
    })
  }
}
