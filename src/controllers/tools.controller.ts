/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'
import { Tool } from '../models/tool.model'
import ToolsService from '../services/tools.service'

class ToolsController {
  public async index (req: Request, res: Response): Promise<Response> {
    const { tag } = req.query

    const tools = await ToolsService.index(tag)

    return res.status(200).json(tools)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const { title, link, description, tags } = req.body

    const tool = await ToolsService.findByTitle(title)

    if (tool) {
      return res.status(400).send({ error: 'Ferramenta já cadastrada' })
    }

    const id = await ToolsService.create(title, link, description, tags)

    if (!id) {
      return res.status(400).json({ error: 'Algo deu errado, tente novamente mais tarde!' })
    }

    return res.status(201).json({ id: id })
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    await ToolsService.delete(id)

    return res.status(204).send()
  }
}

export default new ToolsController()
