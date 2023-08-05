import { Body, Controller, Get, Options, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { ValidationTypes } from "class-validator";
import { plainToClass } from "class-transformer";
import { UsersService } from "./users.service";
import { UsersRepository } from "./users.repository";

@Controller("users")
export class UsersController {
    private usersService:  UsersService;
    constructor() {
        const usersRepository = new UsersRepository();
        this.usersService = new UsersService(usersRepository);
    }
    @Get()
    getAllUsers() {
        return [
            {
                name: "Anh Ng",
                age: 28
            },
            {
                name: "Em Ng",
                age: 29
            }
        ]
    };
    @UsePipes(new ValidationPipe())
    @Post()
    createUser(@Body() user: UserDto): UserDto  {
        return this.usersService.createUser(user);
    };
    @Get(":id")
    getUserById(@Param("id",ParseIntPipe) id: number)  {
        return id;
    }
}