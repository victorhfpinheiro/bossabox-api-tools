import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import routes from './routes'
import { errors } from 'celebrate'

class App {
    public express: express.Application;

    public constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
      this.envs()
    }

    private envs (): void {
      dotenv.config()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private routes (): void {
      this.express.use('/api', routes)
      this.express.use(errors())
    }
}

export default new App().express
