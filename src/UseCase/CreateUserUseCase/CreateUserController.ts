import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {

  async handle (req: Request, res: Response) {

    const { name, email, password } = req.body

    const createUser = new CreateUserService()

    const resultCreate = await createUser.execute( { name, email, password } )

    const {password: _, ...userCreated } = resultCreate

    return res.status(201).json(userCreated)
  }
}