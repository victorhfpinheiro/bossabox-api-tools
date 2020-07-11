import { Request, Response } from 'express'

class ToolsValidator {
  public create (req: Request, res: Response): Response {
    const { title, link, description, tags } = req.body
    if (!title) {
      return res.status(400).send()
    }
    if (!link) {
      return res.status(400).send()
    }
    if (!description) {
      return res.status(400).send()
    }
    if (!tags) {
      return res.status(400).send()
    }
  }

  public delete (req: Request, res: Response): Response {
    const { id } = req.query

    if (!id) {
      return res.status(400).send()
    }
  }
}

export default new ToolsValidator()
