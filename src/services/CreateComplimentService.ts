import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;

}

class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const usersRepositories = getCustomRepository(UsersRepositories);

        const userReceiverExists = await usersRepositories.findOne(user_receiver);

        if (!userReceiverExists) {
            throw new Error("User Receiver does not exists!");
        }

        if (user_sender === user_receiver) {
            throw new Error("You cannot assess yourself!")
        }

        const compliment = complimentsRepositories.create({
            tag_id, user_sender, user_receiver, message
        })

        await complimentsRepositories.save(compliment);

        return compliment;

    }
}

export { CreateComplimentService };