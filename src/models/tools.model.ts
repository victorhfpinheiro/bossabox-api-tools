export class Tools {
    private title: string
    private link: string
    private description: string
    private tags: string[]

    public Tools (title: string, link: string, description: string, tags: string[]): void {
      this.title = title
      this.link = link
      this.description = description
      this.tags = tags
    }

    public getTitle (): string {
      return this.title
    }

    public setTitle (title: string): void {
      this.title = title
    }

    public setLink (link: string): void {
      this.link = link
    }

    public getLink (): string {
      return this.link
    }

    public setDescription (description: string): void {
      this.description = description
    }

    public getDescription (): string {
      return this.description
    }

    public getTags (): string[] {
      return this.tags
    }

    public setTags (tags: string[]): void {
      this.tags = tags
    }
}
