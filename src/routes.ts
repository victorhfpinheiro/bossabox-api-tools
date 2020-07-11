import { Router } from 'express'

import ToolsController from './controllers/tools.controller'
import ToolsValidator from './validators/tools.validator'

// import Auth from './middlewares/auth.middleware'

const routes = Router()
routes.get('/tools', ToolsController.index)
routes.post('/tools', ToolsValidator.create, ToolsController.create)
routes.delete('/tools', ToolsValidator.delete, ToolsController.delete)

// routes.post('/authenticate', Auth.authenticate)

export default routes
