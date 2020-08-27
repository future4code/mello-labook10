import { Router } from 'express';
import userRouter from './';
import singinRouter from './';
import { signUp } from './signUp';

const routes = Router();

routes.use('/', userRouter);
routes.use('/', singinRouter);
routes.use('/', signUp);
export default routes;
