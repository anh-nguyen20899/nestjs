import { Body, Controller, Post } from "@nestjs/common";
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
    constructor(private readonly _postService: PostsService) {
        
    }
    @Post()
    createPost(@Body() post: any): any {
        this._postService.createPost(post);
    }
}