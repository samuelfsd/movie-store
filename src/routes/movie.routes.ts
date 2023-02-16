import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/CreateMovie/CreateMovieController";
import { GetMoviesByReleaseDateController } from "../modules/movies/useCases/GetMoviesByReleaseDate/GetMoviesByReleaseDateController";


const createMovieController = new CreateMovieController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release", getMoviesByReleaseDateController.handle)


export {
  movieRoutes
}