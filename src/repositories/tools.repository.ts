import { Tool } from 'src/models/tool.model'
import connection from '../database/connection'

class ToolsRepository {
  public async index (tag?: string): Promise<Tool[]> {
    let tools: Tool[] = []

    if (tag) {
      tools = await this.findByTag(tag)
    } else {
      tools = await connection('tools').select('*') as Tool[]
    }

    return tools
  }

  public async create (title: string, link: string, description: string, tags: string): Promise<number> {
    const [id] = await connection('tools').insert({ title, link, description, tags })
    return id
  }

  public async delete (id: string): Promise<void> {
    await connection('tools').where('id', id).delete(id)
  }

  public async findByTitle (title: string): Promise<Tool> {
    return await connection('tools').select('*').where('title', title).first() as Tool
  }

  public async findByTag (tag: string): Promise<Tool[]> {
    return await connection('tools').select('*').where('tags', 'like', '%' + tag + '%') as Tool[]
  }
}

export default new ToolsRepository()
