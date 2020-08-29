import {connection}from '../utils/knexFile';

export class Follower {
    private static TABLE_NAME_FOLLOW: string = "Labook_Followers";

    public async followUser(
        userId: string,
        userIdToFollow: string
    ) :Promise<void> {
        await connection()
            .insert({
                user_id: userId,
                user_id_to_follow: userIdToFollow
            })
            .into(Follower.TABLE_NAME_FOLLOW)
    }

    public async unfollowUser(
        userId: string,
        userIdToUnfollow: string
    ) :Promise<void> {
        await connection()
            .delete()
            .from(Follower.TABLE_NAME_FOLLOW)
            .where({
                user_id: userId,
                user_id_to_follow: userIdToUnfollow
            })
    }
}