import { Router } from "express";
import SwaggerUI from "swagger-ui-express";
import APISchema from '../api.schema.json';

const routeDocs = Router();

routeDocs.use("/", SwaggerUI.serve, SwaggerUI.setup(APISchema))

export default routeDocs;