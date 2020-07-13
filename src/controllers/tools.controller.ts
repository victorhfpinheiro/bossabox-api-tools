/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'
import connection from '../database/connection'
import { Tools } from '../models/tools.model'

class ToolsController {
  public async index (req: Request, res: Response): Promise<Response> {
    const { tag } = req.query
    let tools: Tools[]
    if (tag) {
      tools = await connection('tools').select('*').where('tags', 'like', '%' + tag + '%') as Tools[]
    } else {
      tools = await connection('tools').select('*') as Tools[]
    }

    return res.status(200).json(tools)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const tools = req.body as Tools

    const [id] = await connection('tools').insert(tools)
    tools.id = id

    return res.status(201).json(tools)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    await connection('tools').where('id', id).delete(id)

    return res.status(204).send()
  }
}

export default new ToolsController()
