import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { PostService } from "./post.service";

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http:HttpClient) {}
  //Save
  saveData() {
    const listOfPosts: Post[] = this.postService.getPosts();
	this.http.put('https://blog-posts-e9035-default-rtdb.firebaseio.com/posts.json',listOfPosts).subscribe((res)=>{
		console.log(res);
	});
  }

  //Fetch
  fetchData(){
    this.http
      .get<Post[]>(
        'https://blog-posts-e9035-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);
        })
      ).subscribe();
  }
}

function tap(arg0: (listOfPosts: Post[]) => void): import("rxjs").OperatorFunction<Post[], unknown> {
  throw new Error("Function not implemented.");
}

