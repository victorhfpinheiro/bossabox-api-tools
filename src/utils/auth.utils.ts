import * as jwt from 'jsonwebtoken'

export class AuthUtils {
  public async generateToken (params): Promise<string> {
    return jwt.sign(params, process.env.SECRET_KEY, {
      expiresIn: 86400 // 24h
    })
  }
}

export default new AuthUtils()
