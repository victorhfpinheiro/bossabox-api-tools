// import { Request, Response, NextFunction } from 'express'

class Auth {
//   public validateJwt (req: Request, res: Response, next: NextFunction): Response {
//     const authHeader = req.headers.authorization

  //     if (!authHeader) {
  //       return res.status(401).send({ error: 'No token provided' })
  //     }

  //     const parts = authHeader.split(' ')

  //     if (!parts.length === 2) {
  //       return res.status(401).send({ error: 'Token error' })
  //     }

  //     const [scheme, token] = parts

  //     if (!/^Bearer$/i.test(scheme)) {
  //       return res.status(401).send({ error: 'Token malformatted' })
  //     }

  //     jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
  //       if (err) {
  //         return res.status(401).send({ error: 'Token invalid' })
  //       }

  //       req.userId = decoded.id
  //       return next()
  //     })
  //   }

  //   public async authenticate (req: Request, res: Response): Promise<Response> {
  //     const { clientId, clientSecret } = req.body

  //     const user = await User.findOne({ email }).select('+password')

  //     if (!user) {
  //       return res.status(400).send({ error: 'User Not Found' })
  //     }

  //     if (!await bcrypt.compare(password, user.password)) {
  //       return res.status(400).send({ error: 'Invalid password' })
  //     }

  //     user.password = undefined

  //     res.send({
  //       user,
  //       token: this.generateToken({ id: user.id })
  //     })
  //   }

//   public generateToken (params): string {
//     return jwt.sign(params, process.env.SECRET_KEY, {
//       expiresIn: 3600
//     })
//   }
}

export default new Auth()
