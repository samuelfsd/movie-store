import { Request, Response } from "express";
import { GetMoviesByReleaseDateUseCase } from "./GetMoviesByReleaseDateUseCase";



export class GetMoviesByReleaseDateController {
  async handle(req: Request, res: Response) {
    const movies = new GetMoviesByReleaseDateUseCase()

    const result = await movies.execute();

    return res.status(200).json(result)
  }
}