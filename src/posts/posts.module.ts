import { Module } from "@nestjs/common";
import { StoreModule } from "store/store.module";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";

@Module({
    imports: [
        StoreModule.forRoot({
            dirName: "storage"
        }),
        StoreModule.forFeature({
            fileName: "posts.json"
        })],
    providers: [PostsService],
    controllers: [PostsController]
})
export class PostsModule {

}