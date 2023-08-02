import { Controller, Get } from "@nestjs/common";

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
    }
}