import { Body, Controller, Get, Options, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { ValidationTypes } from "class-validator";
import { plainToClass } from "class-transformer";

@Controller("users")
export class UsersController {
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
    createUser(@Body() user: UserDto):UserDto  {
        user.id = "1";
        user.createdAt = new Date();
        user.updatedAt = new Date();
        const userReal = plainToClass(UserDto, user, {excludeExtraneousValues: true});
        console.log(userReal);
        return userReal;
    };
    @Get(":id")
    getUserById(@Param("id",ParseIntPipe) id: number)  {
        return id;
    }
}