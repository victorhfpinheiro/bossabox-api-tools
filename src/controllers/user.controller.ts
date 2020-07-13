import { Request, Response } from 'express'
import { User } from '../models/user.model'
import connection from '../database/connection'
import { hash } from 'bcrypt'
import AuthUtils from '../utils/auth.utils'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await connection('users').select('id', 'name', 'email') as User[]
    return res.status(200).json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user = req.body as User

    const userDb = await connection('users').select('*').where('email', user.email).first() as User

    if (userDb) {
      return res.status(400).send({ error: 'Usuario já cadastrado!' })
    }

    user.password = await hash(user.password, 10)
    const [id] = await connection('users').insert(user)
    user.id = id
    user.password = undefined

    const token = await AuthUtils.generateToken({ email: user.email })

    return res.status(201).json({
      user,
      token
    })
  }
}

export default new UserController()
