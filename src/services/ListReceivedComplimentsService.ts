import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListReceivedComplimentsService {

    async execute(user_id: string) {
        const complimentsRepositores = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositores.find({
            where: {
                user_receiver: user_id,
            },
            relations: ["userSender", "userReceiver", "tag"]//FAZ COM QUE TRAGA TAMBÉM OS DADOS DO RELACIONAMENTO
        });
        return compliments;
    }
}

export { ListReceivedComplimentsService }