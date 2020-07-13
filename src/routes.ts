import { Router } from 'express'

import ToolsController from './controllers/tools.controller'
import { ToolsValidator } from './validators/tools.validator'
import { celebrate } from 'celebrate'

// import Auth from './middlewares/auth.middleware'

const routes = Router()
routes.get('/tools', ToolsController.index)
routes.post('/tools', celebrate(ToolsValidator.create), ToolsController.create)
routes.delete('/tools/:id', celebrate(ToolsValidator.delete), ToolsController.delete)

// routes.post('/authenticate', Auth.authenticate)

export default routes
