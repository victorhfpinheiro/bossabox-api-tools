import { Joi, Segments } from 'celebrate'

export class UserValidator {
  public static create = {
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }).unknown()
  }
}
