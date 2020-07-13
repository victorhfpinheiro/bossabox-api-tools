import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import connection from '../database/connection'
import { User } from '../models/user.model'
import AuthUtils from '../utils/auth.utils'

class Auth {
  public validateJwt (req: Request, res: Response, next: NextFunction): Response {
    const authHeader = req.headers.authorization

    const parts = authHeader.split(' ')

    if (!(parts.length === 2)) {
      return res.status(401).send({ error: 'Token mal formatado' })
    }

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).send({ error: 'Token mal formatado' })
    }

    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) {
        return res.status(401).send({ error: 'Token inválido' })
      }

      return next()
    })
  }

  public async authenticate (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const user = await connection('users').select('*').where('email', email).first() as User

    if (!user) {
      return res.status(400).send({ error: 'Usuário não existe' })
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).send({ error: 'Senha inválida' })
    }

    user.password = undefined

    const token = await AuthUtils.generateToken({ email: user.email })

    res.send({
      user,
      token
    })
  }
}

export default new Auth()
