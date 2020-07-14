export class Tool {
    id: number
    title: string
    link: string
    description: string
    tags: string

    public Tool (title: string, link: string, description: string, tags: string): void {
      this.title = title
      this.link = link
      this.description = description
      this.tags = tags
    }
}
