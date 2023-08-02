import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { ValidationTypes } from "class-validator";

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
        return {
            username: "anh",
            password: "test"
        }
    };
    @Get(":id")
    getUserById(@Param("id",ParseIntPipe) id: number)  {
        return id;
    }
}