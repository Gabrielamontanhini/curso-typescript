import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validateSchemaMid } from "../middlewares/schemas-validation";
import musicSchema from "../schemas/music-schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchemaMid(musicSchema), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;