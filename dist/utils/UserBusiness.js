"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBusiness = void 0;
const IdGenerator_1 = require("../utils/IdGenerator");
const HashManager_1 = require("../utils/HashManager");
const UserDataBase_1 = require("../utils/UserDataBase");
const Authenticator_1 = require("../utils/Authenticator");
class UserBusiness {
    signUp(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || !email || !password) {
                throw new Error('Insira todas as informações necessárias para o cadastro');
            }
            if (password.length < 8) {
                throw new Error('A senha deve conter no mínimo 8 caracteres');
            }
            const idGenerator = new IdGenerator_1.IdGenerator();
            const id = idGenerator.generateId();
            const hashManager = new HashManager_1.HashManager();
            const hashPassword = yield hashManager.hash(password);
            const userDataBase = new UserDataBase_1.UserDatabase(); // colocar na business
            yield userDataBase.registerUser(id, name, email, hashPassword);
            const authenticator = new Authenticator_1.Authenticator();
            const token = authenticator.generateToken({ id });
            return token;
        });
    }
}
exports.UserBusiness = UserBusiness;
