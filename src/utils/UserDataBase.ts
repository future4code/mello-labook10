import {BaseDatabase} from "./BaseDataBase";


export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME: string = 'Labook_Users';

  public async registerUser(id: string, name: string, email: string, password: string): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        name,
        email,
        password
      }).into(UserDatabase.TABLE_NAME);
  }
}