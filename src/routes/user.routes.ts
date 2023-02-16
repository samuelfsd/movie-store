import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCases/GetAllUsers/GetAllUsersController";

const createUserController = new CreateUserController();
const getAllUsers = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle)
userRoutes.get("/", getAllUsers.handle)

export { userRoutes };