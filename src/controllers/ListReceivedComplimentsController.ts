import { Request, Response } from "express";
import { ListReceivedComplimentsService } from "../services/ListReceivedComplimentsService";

class ListReceivedComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listSentComplimentsService = new ListReceivedComplimentsService;

        const compliments = await listSentComplimentsService.execute(user_id);

        return response.json(compliments);

    }
}

export { ListReceivedComplimentsController };