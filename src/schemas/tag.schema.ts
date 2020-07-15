import { model, Document, Schema } from 'mongoose'

export interface ITagInterface extends Document {
  title: string,
}

const TagSchema = new Schema(
  {
    title: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default model<ITagInterface>('Tag', TagSchema)
