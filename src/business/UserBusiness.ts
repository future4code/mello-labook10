import { IdGenerator } from "../utils/IdGenerator";
import { HashManager } from "../utils/HashManager";
import { UserDatabase } from "../utils/UserDataBase";
import { Authenticator } from "../utils/Authenticator";

export class UserBusiness {

    public async signUp(name: string, email: string, password: string): Promise<string> {

        if (!name || !email || !password) {
            throw new Error('Insira todas as informações necessárias para o cadastro');
        }

        if (password.length < 8) {
            throw new Error('A senha deve conter no mínimo 8 caracteres');
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generateId();

        const hashManager = new HashManager(); 
        const hashPassword = await hashManager.hash(password);

        const userDataBase = new UserDatabase(); // colocar na business
        await userDataBase.registerUser(
            id,
            name,
            email,
            hashPassword
        );

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({ id });

        return token;
    }
}