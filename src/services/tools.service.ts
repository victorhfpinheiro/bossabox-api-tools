import ToolsRepository from '../repositories/tools.repository'
import { Tool } from '../models/tool.model'

class ToolsService {
  public async index (tag?): Promise<Tool[]> {
    return await ToolsRepository.index(tag)
  }

  public async findByTitle (title: string): Promise<Tool> {
    return await ToolsRepository.findByTitle(title)
  }

  public async create (title: string, link: string, description: string, tags: string): Promise<number> {
    return await ToolsRepository.create(title, link, description, tags)
  }

  public async delete (id: string): Promise<void> {
    await ToolsRepository.delete(id)
  }
}

export default new ToolsService()
