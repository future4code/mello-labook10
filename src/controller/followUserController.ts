import { Request, Response } from 'express';
import { Follower } from '../models/followUsers';
import Authenticator from '../utils/Authenticator';

 class FollowUserController{ 
        async follow(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string;

        const userIdToFollow = req.body.userIdToFollow;

        if (!userIdToFollow || userIdToFollow === '') {
            throw new Error("Incorrect id!")
        }

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getTokenData(token)

        const followDatabase = new Follower();
        await followDatabase.followUser(authenticationData.id, userIdToFollow)

        res
            .status(200)
            .send({
                message: "Congratulations! Now, you are following your friend."
            })
    } catch(error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            })
        }
}
}
export default FollowUserController;