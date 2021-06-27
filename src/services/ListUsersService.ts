import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

class ListUsersService {

    async execute() {
        const usersRepositores = getCustomRepository(UsersRepositories);

        const users = await usersRepositores.find();

        return classToPlain(users);
    }
}

export { ListUsersService }