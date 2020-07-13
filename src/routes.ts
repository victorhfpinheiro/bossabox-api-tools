import { Router } from 'express'

import ToolsController from './controllers/tools.controller'
import UserController from './controllers/user.controller'
import Auth from './middlewares/auth.middleware'
import { ToolsValidator } from './validators/tools.validator'
import { celebrate } from 'celebrate'
import { UserValidator } from './validators/user.validator'

// import Auth from './middlewares/auth.middleware'

const routes = Router()
routes.get('/tools', celebrate(ToolsValidator.index), Auth.validateJwt, ToolsController.index)
routes.post('/tools', celebrate(ToolsValidator.create), Auth.validateJwt, ToolsController.create)
routes.delete('/tools/:id', celebrate(ToolsValidator.delete), Auth.validateJwt, ToolsController.delete)

routes.post('/users', celebrate(UserValidator.create), UserController.create)
routes.post('/authenticate', Auth.authenticate)

export default routes
