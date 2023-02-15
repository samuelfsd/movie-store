import { Router } from "express";
import { CreateMovieRentController } from "../modules/MovieRent/useCases/CreateMovieRent/CreateMovieRentController";



const createMovieRentController = new CreateMovieRentController();

const movieRentRoutes = Router();

movieRentRoutes.post("/", createMovieRentController.handle)

export { movieRentRoutes }