export class User {
    id: number
    name: string
    email: string
    password: string

    public User (name: string, email: string, password: string): void {
      this.name = name
      this.email = email
      this.password = password
    }
}
