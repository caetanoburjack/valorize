import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthentication } from "./middlewares/ensureAuthentication";
import { ListSentComplimentsController } from "./controllers/ListSentComplimentsController";
import { ListReceivedComplimentsController } from "./controllers/ListReceivedComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listSentComplimentController = new ListSentComplimentsController();
const listReceivedComplimentController = new ListReceivedComplimentsController();
const listTagsController = new ListTagsController;
const listUsersController = new ListUsersController;

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthentication, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthentication, createComplimentController.handle);
router.get("/users/compliments/sent", ensureAuthentication, listSentComplimentController.handle)
router.get("/users/compliments/received", ensureAuthentication, listReceivedComplimentController.handle)
router.get("/tags", ensureAuthentication, listTagsController.handle)
router.get("/users", ensureAuthentication, listUsersController.handle)


export { router };