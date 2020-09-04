import { Router } from 'express';

import CreateUserController from '../controller/CreateUserControler';
import FollowUserController from '../controller/followUserController';

const userRouter = Router();
const createUser = new CreateUserController();
const followUser = new FollowUserController();

userRouter.post('/', createUser.create);
userRouter.post('/',followUser.follow);
export default userRouter;
