import { Router } from 'express';
import userRouter from './';
import singinRouter from './';

const routes = Router();

routes.use('/', userRouter);
routes.use('/', singinRouter);

export default routes;
