import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

import routes from './routes'

class App {
    public express: express.Application;

    public constructor () {
      this.express = express()
      // this.middlewares()
      // this.database()
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

    private database (): void {
      mongoose.connect('mongodb://localhost:27017/tsnode', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      })
    }

    private routes (): void {
      this.express.use('/api', routes)
    }
}

export default new App().express
