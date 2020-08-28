import { Router } from 'express';

import CreateUserController from '../controller/CreateUserControler';

const userRouter = Router();
const createUser = new CreateUserController();

userRouter.post('/', createUser.create);

export default userRouter;
