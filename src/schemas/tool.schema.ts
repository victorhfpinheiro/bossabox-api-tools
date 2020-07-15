import { Document, Schema, model } from 'mongoose'

export interface IToolInterface extends Document {
  title: string,
  link: string,
  description: string,
  tags: string[]
}

const ToolSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
    link: {
      type: String,
      trim: true,
      required: true
    },
    description: {
      type: String,
      trim: true,
      required: true
    },
    tags: [
      {
        type: String,
        ref: 'Tag',
        required: true
      }
    ]
  },
  {
    timestamps: true
  }
)

export default model<IToolInterface>('Tool', ToolSchema)
