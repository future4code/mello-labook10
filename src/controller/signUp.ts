import { Request, Response } from "express";
import { BaseDatabase } from "../utils/BaseDataBase";
import  {UserBusiness}  from "../utils/UserBusiness";

export const signUp = async (req: Request, res: Response) => {
  try {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const userBusiness = new UserBusiness();
    const token = await 
    userBusiness.signUp(name, email, password);

    res.status(200).send({
      message: 'Usuário criado com sucesso',
      token
    });


  } catch (e) {
    res.status(400).send({
      message: e.message
    })
  }
  await BaseDatabase.destroyConnection();
};