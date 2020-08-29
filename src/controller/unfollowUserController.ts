import { Request, Response } from 'express';
import { Follower } from '../models/followUsers';
import Authenticator from '../utils/Authenticator';


export const unfollowUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const userIdToUnfollow = req.body.userIdToUnfollow;

        if (!userIdToUnfollow || userIdToUnfollow === "") {
            throw new Error("Incorrect id!")
        }

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getTokenData(token);

        const followDatabase = new Follower();
        await followDatabase.unfollowUser(authenticationData.id, userIdToUnfollow)

        res
        .status(200)
        .send({
            message: "Unfollowing friend."
        })
    } catch(error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            })
    } 
}