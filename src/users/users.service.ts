import { Body, Injectable } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { plainToClass } from "class-transformer";
import { UsersRepository } from "./users.repository";
import { StoreService } from "store/store.service";

@Injectable()
export class UsersService {
    constructor(private readonly _storeService: StoreService) {

    }
    createUser(user: UserDto): UserDto  {
        user.id = "1";
        user.createdAt = new Date();
        user.updatedAt = new Date();
        const userReal = plainToClass(UserDto, user, {excludeExtraneousValues: true});
        this._storeService.save(userReal);
        console.log(userReal);
        return userReal;
    };
}