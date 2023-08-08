import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { StoreModule } from "store/store.module";

@Module({
    imports: [StoreModule.register({
        dirName: "storage",
        fileName: "user.json"
    })],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {

}