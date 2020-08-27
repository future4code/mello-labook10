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
exports.signUp = void 0;
const BaseDataBase_1 = require("../utils/BaseDataBase");
const UserBusiness_1 = require("../utils/UserBusiness");
exports.signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const userBusiness = new UserBusiness_1.UserBusiness();
        const token = yield userBusiness.signUp(name, email, password);
        res.status(200).send({
            message: 'Usuário criado com sucesso',
            token
        });
    }
    catch (e) {
        res.status(400).send({
            message: e.message
        });
    }
    yield BaseDataBase_1.BaseDatabase.destroyConnection();
});
