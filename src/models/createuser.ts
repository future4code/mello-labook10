import { connection } from '../utils/knexFile';
import { v4 } from 'uuid';

class UserCreate {
  id: string;
  name: string;
  password: any;
  email: string;

  constructor(name: string, email: string, password: any) {
    this.id = v4();
    this.name = name;
    this.password = password;
    this.email = email;
  }

  async create(name: string, email: string, password: any): Promise<any> {
    const id: string = v4();
    const result = await connection('Labook_Users').insert({
      id,
      name,
      email,
      password,
    });
    return result;
  }
}

export default UserCreate;
