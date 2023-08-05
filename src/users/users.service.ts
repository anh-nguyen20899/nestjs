import { Body } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { plainToClass } from "class-transformer";
import { UsersRepository } from "./users.repository";

export class UsersService {
    private userRepository: UsersRepository;
    constructor(repository) {
        this.userRepository = repository;
    }
    createUser(user: UserDto): UserDto  {
        user.id = "1";
        user.createdAt = new Date();
        user.updatedAt = new Date();
        const userReal = plainToClass(UserDto, user, {excludeExtraneousValues: true});
        console.log(userReal);
        return userReal;
    };
}