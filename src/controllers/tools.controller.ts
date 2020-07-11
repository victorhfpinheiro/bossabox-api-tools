/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'

class ToolsController {
  public index (req: Request, res: Response): Response {
    // const { tag } = req.body
    // if (tag) {
    //   // chamar rota para pesquisar com tag
    // } else {
    //   // chamar rota para trazer todos
    // }
    return res.status(200).json({ msg: 'Sucess 🤘...' })
  }

  public create (req: Request, res: Response): Response {
    return res.status(201).json({ msg: 'Sucess 🤘...' })
  }

  public delete (req: Request, res: Response): Response {
    return res.status(200).json({ msg: 'Sucess 🤘...' })
  }
}

export default new ToolsController()
