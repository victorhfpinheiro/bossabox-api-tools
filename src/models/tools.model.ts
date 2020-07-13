export class Tools {
    id: number
    title: string
    link: string
    description: string
    tags: string

    public Tools (title: string, link: string, description: string, tags: string): void {
      this.title = title
      this.link = link
      this.description = description
      this.tags = tags
    }
}
