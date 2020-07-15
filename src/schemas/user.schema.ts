import { Document, Schema, model } from 'mongoose'
import { NextFunction } from 'express'
import { hash } from 'bcrypt'

export interface IUserInterface extends Document {
  name: string,
  email: string,
  password: string
}
const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    }
  },
  {
    timestamps: true
  }
)

UserSchema.pre<IUserInterface>('save', async function (next: NextFunction) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const self = this
  self.password = await hash(self.password, 10)
  next()
})

export default model<IUserInterface>('User', UserSchema)
