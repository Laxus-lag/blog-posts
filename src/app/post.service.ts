import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostService {
  listOfPosts: Post[] = [
    new Post('Nature', 'nature is undefine', '', 'test@test.com', new Date()),
  ];

  getPosts(){
	  return this.listOfPosts;
  }

  deletePost(index:number){
	  this.listOfPosts.splice(index,1);
  }

  addPost(post: Post){
	  this.listOfPosts.push(post);
  }

  updatePost(index:number,post:Post){
	  this.listOfPosts[index] =post;
  }

}