import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const users = new GetAllUsersUseCase();

    const result = await users.execute();

    return res.status(200).json(result);
  }
}