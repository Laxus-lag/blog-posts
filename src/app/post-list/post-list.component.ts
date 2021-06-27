import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[]=[
    new Post("Nature","nature is undefine","","test@test.com",new Date())
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
