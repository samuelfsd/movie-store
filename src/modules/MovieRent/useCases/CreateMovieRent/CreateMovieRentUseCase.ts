import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";



export class CreateMovieRentUseCase {
  async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {
    const movieExists = await prisma.movie.findUnique({ where: { id: movieId } });

    if (!movieExists) {
      throw new AppError("Movie does not exists", 400)
    }

    const movieAlreadyRented = await prisma.movieRent.findFirst({ where: { movieId } });

    if (movieAlreadyRented) {
      throw new AppError("Movie already rented", 400)
    }

    const userExists = await prisma.user.findUnique({ where: { id: userId } });

    if (!userExists) {
      throw new AppError("user does not exists", 400)
    }

    await prisma.movieRent.create({
      data: {
        movieId,
        userId
      }
    })
  }
}