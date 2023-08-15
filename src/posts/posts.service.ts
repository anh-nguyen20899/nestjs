import { Inject, Injectable } from "@nestjs/common";
import { StoreService } from "store/store.service";

@Injectable()
export class PostsService {
    constructor(@Inject("STORE_SERVICE") private readonly _storeService: StoreService) {

    }
    createPost(data: any): void {
        this._storeService.save(data);
        return data;
    }
}