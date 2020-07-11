import { Router } from 'express'

import ToolsController from './controllers/tools.controller'

// import Auth from './middlewares/auth.middleware'

const routes = Router()
routes.get('/tools', ToolsController.index)
routes.post('/tools', ToolsController.create)
routes.delete('/tools', ToolsController.delete)

// routes.post('/authenticate', Auth.authenticate)

export default routes
