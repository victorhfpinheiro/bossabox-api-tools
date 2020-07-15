import { Request, Response } from 'express'
import authUtils from '@utils/auth.utils'
import User from '@schemas/user.schema'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = User.find()
    return res.status(200).json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(400).send({ sucesso: false, mensagem: 'Usuário já cadastrado!' })
    }

    const user = await User.create({ name: name, email: email, password: password })
    user.password = undefined

    if (!user) {
      return res.status(400).json({ sucesso: false, mensagem: 'Ops! Algo deu errado, tente novamente mais tarde!' })
    }

    const token = await authUtils.generateToken({ email: user.email })

    return res.status(201).json({
      sucesso: true,
      user,
      token
    })
  }
}

export default new UserController()
