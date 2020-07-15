import { Request, Response } from 'express'
import Tool, { IToolInterface } from '@schemas/tool.schema'

class ToolsController {
  public async index (req: Request, res: Response): Promise<Response> {
    const { tag } = req.query

    let tools: IToolInterface[]

    if (tag) {
      tools = await Tool.find({
        tags: {
          $in: Array.of(tag) as string[]
        }
      })
    } else {
      tools = await Tool.find()
    }

    return res.status(200).json(tools)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const { title, link, description, tags } = req.body

    const toolExists = await Tool.findOne(
      { title: title }
    )

    if (toolExists) {
      return res.status(400).send({ sucesso: false, mensagem: 'Ferramenta já cadastrada!' })
    }

    // const tagsDb = await Tag.createCollection(tags)

    const tool = await Tool.create({ title: title, link: link, description: description, tags: tags })

    if (!tool) {
      return res.status(400).json({ sucesso: false, mensagem: 'Ops! Algo deu errado, tente novamente mais tarde!' })
    }

    return res.status(201).json({ sucesso: true, tool })
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    await Tool.findByIdAndDelete(id)

    return res.status(204).send()
  }
}

export default new ToolsController()
