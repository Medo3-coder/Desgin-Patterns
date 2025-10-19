import express from 'express';
import singletonRouter from './controllers/singletonController.js';
import factoryRouter from './controllers/factoryController.js';
import { createArticle } from "./controllers/BuilderController.js";

const app = express();

app.use(express.json());

app.use('/singleton', singletonRouter);
app.use('/factory', factoryRouter);
app.post("/builder", createArticle);

export default app;

