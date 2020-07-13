import { Joi, Segments } from 'celebrate'

export class ToolsValidator {
  public static create = {
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      link: Joi.string().required(),
      description: Joi.string().required(),
      tags: Joi.array().required()
    }).unknown()
  }

  public static delete = {
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    }).unknown()
  }
}
