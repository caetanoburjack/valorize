import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {

    async execute(user_id: string) {
        const tagsRepositores = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositores.find();

        return classToPlain(tags);
    }
}

export { ListTagsService }